import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { verifyPassword } from '../../../utils/auth';
import { connectToDatabase } from '../../../utils/database';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
        name:'credentials',
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        // console.log(user);
        if (!user) {
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
            console.log('wrong email or password');
          throw new Error('Could not log you in!');
        }

        return { email: user.email };
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret:process.env.JWT_SECRET
});