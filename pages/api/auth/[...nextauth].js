import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { verifyPassword } from '../../../utils/auth';
import connectToDatabase from '../../../utils/database';
import User from '../../../models/User';
import errorCodes from '../../../utils/errorCodes';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
        name:'credentials',
      async authorize(credentials) {
        await connectToDatabase();
        const user = await User.findOne({
          email: credentials.email,
        });
        if (!user) {
          return res.status(errorCodes.NOT_FOUND).json({message:'the email is not registered'});
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
            return res.status(errorCodes.NOT_FOUND).json({message:'wrong email or password'});
        }
        return res.status(errorCodes.NOT_FOUND).json({...user});
        
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret:process.env.JWT_SECRET
});