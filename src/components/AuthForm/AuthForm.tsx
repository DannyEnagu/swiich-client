
"use client";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "@/components/ui/FromField/FormField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faEnvelope,
    faLock,
    faUser,
    faSpinner
}
from "@fortawesome/free-solid-svg-icons";
import styles from "./AuthForm.module.css";
import { RegisterBody} from "@/services/auth";
import { useRouter, useSearchParams } from 'next/navigation';
import { setCredentials } from "@/lib/features/authSlice";
import { useAppDispatch } from "@/lib/hooks/storeHooks";

interface UserFormProps {
    type: "sign-up" | "sign-in";
};

// Regex: Full Name must contain only alphabets and two words separated by a space
const fullNameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/

const mainSchema = z.object({
    name: z.string()
        .min(1, {
            message: "Full Name is required"
        })
        .min(5, {
            message: "Full Name is too short"
        })
        .regex(fullNameRegex , {
            message: "Valide format is: Firstname Lastname"
        }),
    email: z.string()
        .min(1, {
            message: "Email is required"
        })
        .min(5, {
            message: "Email is too short"
        })
        .email({
            message: "Invalid! Example: Yourname@email.com"
        }),
    password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters long"
        }),
    confirmPassword: z.string()
        .min(8,
            {
                message: "Passwords do not match"
            })
  }).required();

  const signInSchema = mainSchema.partial({
    name: true,
    confirmPassword: true,
  
  });

export default function UserFrom({ type }: UserFormProps) {
    const router = useRouter();
    // Get page full url path
    const searchParams = useSearchParams();
    const loginCallbackUrl = searchParams.get('callbackUrl') || '';
    const dispatch = useAppDispatch();
    // omit confirmPassword and name from schema
    const schema = type === "sign-in" ? signInSchema : mainSchema;

    const { data: session } = useSession();

    // Infer the type of the schema
    type FormData = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });


    const generateReqBody = (params: RegisterBody) => {
        return {
            'sign-in': {
                email: params.email,
                password: params.password,
                url: '/auth/login',
                redirect: false,
                callbackUrl: loginCallbackUrl,
            },
            'sign-up': {
                email: params.email,
                name: params.name,
                password: params.password ,
                url: '/auth/signup', 
                redirect: false,
                callbackUrl: loginCallbackUrl,
            }
        }
    };

    useEffect(() => {
        if (session?.user && Object.keys(session?.user).length > 0) {
            dispatch(
                setCredentials({
                    user: session.user,
                    token: session.token
                })
            )
            // Extract page url path from callbackUrl
            if (loginCallbackUrl) {
                const url = new URL(loginCallbackUrl);
                const path = url.pathname;
                router.push(path);
            }

            const organisations = session?.user?.organisations;
            if (organisations.length === 1) {
                router.push(`/dashboard/${organisations[0].id}`);
                return;
            }

            router.push('/');
            return;
        }

        // router.push('/');
    }, [session, dispatch, router, loginCallbackUrl]);

    const onSubmit: SubmitHandler<FormData> = async (params) => {
        const reqBody = generateReqBody(params);
        const res = await signIn("credentials", reqBody[type]);
        if (res?.error) {
            setError("root", {
                message: type === "sign-in"
                ? "Invalid email or password"
                : "Could not sign up. Please try again later.",
            });
            return;
        }
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            
            <span>
                {errors.confirmPassword?.message}
                {errors.name?.message}
            </span>
            {errors.root &&
                <div className={styles.formError}>    
                    {errors.root?.message}
                </div>
            }

            {type == 'sign-up' && (
                <FormField
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    register={register}
                    error={errors.name}
                    iconType={faUser}
                />
            )}
            <FormField
                type="text"
                name="email"
                placeholder="Email"
                register={register}
                error={errors.email}
                iconType={faEnvelope}
            />
            <FormField
                type="password"
                name="password"
                placeholder="Password"
                register={register}
                error={errors.password}
                iconType={faLock}
            />
            {type == 'sign-up' && (
                <FormField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    register={register}
                    error={errors.confirmPassword}
                    iconType={faLock}
                />
            )}
            <button
                disabled={isSubmitting}
                className="btn btn-primary mt-md"
                type="submit">
                {isSubmitting
                ? <FontAwesomeIcon icon={faSpinner} spinPulse />
                : "Submit"}
            </button>
        </form>
    );
}