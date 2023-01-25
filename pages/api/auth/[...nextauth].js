import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { verifyPassword } from '../../../utils/auth';
import connectToDatabase from '../../../utils/database';
import User from '../../../models/User';

export const authOptions = {
  session: {
    strategy:'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials) {
        await connectToDatabase();
        if(!credentials || !credentials.email || !credentials.password){
          return null;
        }
        let user = await User.findOne({
          email: credentials.email,
        });
        if(!user){
          return null;
        }
        const isValid = await verifyPassword(credentials.password,user.password);
        if(!isValid){
          return null;
        }
        user = await user.toObject();
        delete user.password;
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks:{
    jwt:async({token,user,account})=>{
      // console.log('token callback');
      try{
        // console.log(token);
        // console.log(user);
        // console.log('account');
        // console.log(account);
        if(user && user.email){
          await connectToDatabase();
          const newUser = await User.findOne({email:[user.email]});
          // console.log('newUser');
          // console.log(newUser);
          token.user = newUser;
          // console.log(token);
          return token;
        }
      }
      catch(error){
        console.log(error);
        return token;
      } 
      return token;
    },
    session:async({session,token})=>{
      // console.log('session');
      // console.log(session);
      // console.log('token');
      // console.log(token);
      session.user = token.user;
      return session;
    },
    signIn:async({ user})=>{
      try{
        await connectToDatabase();
         const entry = await User.findOne({email:[user.email]});
        //  console.log(entry);
         if(!entry){
            const newUser = new User({
              email:user.email,
              name:user.name,
              loginWithGoogle: true
            });
            await newUser.save();
         }
         else{
           const {loginWithGoogle} = entry;
           if(!loginWithGoogle){
              return false;
           }
         }
         return true;
      }
      catch(error){
        console.log(error);
        return false;
      }
    }
  }
  ,
  pages:{
    signIn:'/login',
  }
  ,
  secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions);
