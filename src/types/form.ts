import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
    email: string;
    name?: string;
    password: string;
    confirmPassword?: string;
};

export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    iconType: IconProp;
};


export type ValidFieldNames =
    | "email"
    | "name"
    | "password"
    | "confirmPassword";