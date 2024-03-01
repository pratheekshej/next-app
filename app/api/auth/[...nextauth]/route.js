import NextAuth from "next-auth/next";
import GoogelProvider from "next-auth/providers/google";
import { connectToDB } from "../../../../utils/database";
import User from "../../../../models/user";

const googleProvider = {
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
};

const handler = NextAuth({
    providers: [
        GoogelProvider(googleProvider)
    ],
    callbacks: {
        async session({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();
                // check for existing user
                const userExists = await User.findOne({ email: profile.email });
                // create a user otherwise
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    });
                }
                return true;
            } catch (error) {
                console.log(error)
            }
        },
    }
})

export { handler as GET, handler as POST };