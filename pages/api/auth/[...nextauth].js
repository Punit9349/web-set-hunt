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
        // console.log(credentials);
        // console.log(credentials.email +" "+credentials.password);
        if(!credentials || !credentials.email || !credentials.password){
          console.log('fallback');
          return null;
        }
        // console.log('fetching user');
        let user = await User.findOne({
          email: credentials.email,
        });
        // console.log(user);
        if(!user){
          return null;
        }
        const isValid = await verifyPassword(credentials.password,user.password);
        // console.log(isValid);
        if(!isValid){
          return null;
        }
        return {
          email:user.email
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks:{
    jwt:async({token,user,account})=>{
      // // console.log('token callback');
      // try{
      //   // console.log(token);
      //   // console.log(user);
      //   // console.log('account');
      //   // console.log(account);
      //   // if(user && user.email){
      //   //   await connectToDatabase();
      //   //   const newUser = await User.findOne({email:[user.email]});
      //     // console.log('newUser');
      //     // console.log(newUser);
      //     // token.user = newUser;
      //     // console.log(token);
      //     return token;
      //   }
      // }
      // catch(error){
      //   console.log(error);
      //   return token;
      // } 
      // return token;
      user&&(token.user=user);
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
        // console.log(user);
        const {email}=user;
         const entry = await User.findOne({email});
         console.log(entry);
         if(!entry){
            const newUser = new User({
              email:user.email,
              name:user.name,
              loginWithGoogle: true
            });
            await newUser.save();
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
