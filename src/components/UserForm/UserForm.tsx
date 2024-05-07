
"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import { FormData } from "@/types";
import FormField from "@/components/ui/FromField/FormField";
import {
    faEnvelope,
    faLock,
    faUser
}
from "@fortawesome/free-solid-svg-icons";
import styles from "./UserFrom.module.css";

interface UserFormProps {
    type: "sign-up" | "sign-in";
};

// Regex: Full Name must contain only alphabets and two words separated by a space
const fullNameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/

const schema = z.object({
    fullName: z.string()
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

type FormData = z.infer<typeof schema>;

export default function UserFrom({ type }: UserFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
          } catch (error) {
            setError("root", {
              message: "This email is already taken",
            });
        }
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            {errors.root &&
                <div className={styles.formError}>    
                    {errors.root?.message}
                </div>
            }

            {type == 'sign-up' && (
                <FormField
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    register={register}
                    error={errors.fullName}
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
                {isSubmitting ? "Loading..." : "Submit"}
            </button>
        </form>
    );
}