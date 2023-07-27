import User from "../../../models/User";
import { hashPassword } from "../../../utils/auth";
import connectToDatabase from "../../../utils/database";
import errorCodes from '../../../utils/errorCodes';

async function handler(req, res) {
  console.log('at top')
  
  if (req.method !== 'POST') {
    console.log('not post')
    return res.status(500);
  }
  try{
    const data = req.body;
    const { email, password } = data;
    let p = String(password);
    let e = String(email);
    console.log('at try')
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
  
    const resp = await connectToDatabase();
    const existingUser = await User.findOne({ email: e });
    console.log(existingUser)
    if (existingUser) {
      res.status(errorCodes.BAD_REQUEST).json({ message: 'User exists already!' });
      return;
    }
  
    const hashedPassword = await hashPassword(p);
    let user = new User({
      email: e,
      password: hashedPassword,
      loginWithGoogle: false
    });
    await user.save();
    user = user.toObject();
    delete user.password;
    res.status(errorCodes.SUCCESS).json({ message: 'Created user!',user });
  }
  catch(error){
    console.log(error);
    return res.status(errorCodes.INTERNAL_ERROR).json({message:'error in signing up user'});
  }
}

export default handler;