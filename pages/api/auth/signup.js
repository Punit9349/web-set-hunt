import User from "../../../models/User";
import { hashPassword } from "../../../utils/auth";
import connectToDatabase from "../../../utils/database";
import errorCodes from '../../../utils/errorCodes';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  try{
    const data = req.body;
    const { email, password } = data;
    let p = String(password);
    let e = String(email);
    if (
      !e ||
      !e.includes('@') ||
      !p ||
      p.trim().length < 7
    ) {
      res.status(errorCodes.BAD_REQUEST).json({
        message:
          'Invalid input - password should also be at least 7 characters long.'
      });
      return;
    }
  
    await connectToDatabase();
    const existingUser = await User.findOne({ email: e });
  
    if (existingUser) {
      res.status(errorCodes.BAD_REQUEST).json({ message: 'User exists already!' });
      return;
    }
  
    const hashedPassword = await hashPassword(p);
    let user = new User({
      email: e,
      password: hashedPassword,
    });
    await user.save();
    user = user.toObject();
    delete user.password;
    res.status(201).json({ message: 'Created user!',user });
  }
  catch(error){
    return res.status(errorCodes.INTERNAL_ERROR).json({message:'error in signing up user'});
  }
}

export default handler;