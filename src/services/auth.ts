import baseApiRoute from "./baseApiRoute";
import type { AuthType } from "@/lib/features/authSlice";

export type LoginBody = Pick<AuthFormDataType, 'email' | 'password'>;

type LoginResponse = AuthType;

export type RegisterBody = Pick<AuthFormDataType, 'email' | 'name' | 'password'>;

export type OtpBody = {
    userId: number | string | undefined,
    otp: number | string
}

export type OtpResponse = {
    message: string,
    isSuccess: boolean
};


// Inject endpoints into the baseApiRoute
export const authApi = baseApiRoute.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<LoginResponse, LoginBody>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
        signup: builder.mutation<LoginResponse, LoginBody>({
            query: (body) => ({
                url: '/auth/signup',
                method: 'POST',
                body,
            }),
        }),
        verifyOtp: builder.mutation<OtpResponse, OtpBody>({
            query: (body) => ({
                url: '/auth/otp',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const {
    useSignInMutation,
    useSignupMutation,
    useVerifyOtpMutation
} = authApi;