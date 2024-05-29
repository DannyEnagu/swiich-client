import NextAuth  from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

const API = process.env.NEXT_PUBLIC_BASE_URL;

const providers = [
  CredentialsProvider({
    name: "credentials",
    credentials: {
      name: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        const url = API + req.body?.url;
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })

          const user = await res.json();
    
          // If no error and we have user data, return it
          if (res.ok && user) {
            return user;
          }
          // Return null if user data could not be retrieved
          return null;
    }
  }),
//   GoogleProvider({}),
]

export const authOptions: NextAuthOptions = {
  providers,
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        Object.assign(token, {
          userInfo: user?.user,
          accessToken: user?.token
        });
      }
      // console.log(token);
      return token;
    },
    async session({ session, token}) {
      // console.log(session, token);
      if(token){
        Object.assign(session, {
          user: token.userInfo,
          token: token.accessToken
        })
      }
      // console.log(session);
      return session;
    },
  },
  session: {
    // jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
      signIn: "/sign-in",
      signOut: "/sign-out",
      error: "/sign-in",
      verifyRequest: "/verify",
      newUser: '',
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


