// import Payment from '@/models/Payment';
import connectDB from '@/db/connectDB';
import User from '@/models/User';
import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github";
const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     if (account.provider == 'github') {
  //       await connectDB();
  //       // const client=await mongoose.connect("mongodb://localhost:27017/chai")
  //       const currentUser =await  User.find({ email: email })
  //       console.log("await connectDB",currentUser);
  //       if (!currentUser) {
  //         console.log("new userS")
  //         const newUser = new User({
  //           email: email,
  //           username: email.split("@")[0]
  //         });
  //         await newUser.save();
  //         user.name = newUser.username;
  //         // console.log("newuser",newUser);
  //       }
  //     }
  //     return true;
  //   } 
  // },
  // async session({ session, user, token }) {
  //   const dbUser = await User.find({ email: session.user.email })
  // //   console.log(dbUser)
  //   session.user.name = dbUser.username;
  //   return session

  // },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'github') {
        try {
          await connectDB();
          const userEmail = email || profile?.email; // Make sure email is correctly accessed

          if (!userEmail) {
            throw new Error('Email is not available from the provider');
          }

          const currentUser = await User.findOne({ email: userEmail });
          if (!currentUser) {
            const newUser = new User({
              email: userEmail,
              username: userEmail.split("@")[0],
            });
            await newUser.save();
            user.name = newUser.username;
          } else {
            user.name = currentUser.username;
          }
        } catch (error) {
          console.error('Error in signIn callback:', error);
          return false;
        }
      }
      return true;
    },
    async session({ session, user, token }) {
      try {
        await connectDB();
        const dbUser = await User.findOne({ email: session.user.email });
        session.user.name = dbUser?.username;
      } catch (error) {
        console.error('Error in session callback:', error);
      }
      return session;
    },
  },

})

export { handler as GET, handler as POST };

