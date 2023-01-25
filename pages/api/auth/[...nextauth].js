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
    jwt:async({token,user})=>{
      user && (token.user=user);
      return token;
    },
    session:async({session,token})=>{
      session.user=token.user;
      return session;
    }
  }
  ,
  secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions);
