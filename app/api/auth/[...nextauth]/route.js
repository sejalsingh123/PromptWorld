import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ profile }) {
      try {
        const userExists = await prisma.user.findUnique({
          where: { email: profile.email },
        });

        if (!userExists) {
          await prisma.user.create({
            data: {
              email: profile.email,
              username: profile.name, // Google does NOT send profile.username
              image: profile.picture,
            },
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking or creating user:", error);
        return false;
      }
    },

    async session({ session }) {
      // Fetch user from DB
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      // Attach user id
      session.user.id = user.id;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
