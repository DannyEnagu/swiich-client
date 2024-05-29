import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { CurrentUser } from "@/types";

// Reference: https://next-auth.js.org/getting-started/typescript

declare module "next-auth" {
    interface Session {
      user: CurrentUser;
      token: string;
      expires: string;
    }
  
    interface User {
      user: CurrentUser;
      token: string;
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      
    }
  }