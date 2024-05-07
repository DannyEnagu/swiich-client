import Image from "next/image";
import UserFrom from "@/components/UserForm/UserForm";
import img from "../../../public/images/signin-img.jpeg";
import googleIcon from "../../../public/images/google.png";
import Link from "next/link";

export default function page() {
    return (
        <div className="auth-page sign-in">
            <div className="auth-page__content">
                <div className="auth-page__form">
                    <h1>Sign In</h1>
                    <UserFrom type="sign-in"/>
                    <p className="password-help text-right">
                        <Link href="/forgot-password">
                            Forgot password?
                        </Link>
                    </p>
                    <div className="auth__divider">
                        <span>or</span>
                    </div>
                    <div className="auth__opt">
                        <button className="btn btn-outline">
                            <Image
                                src={googleIcon}
                                alt="Google sign in Icon"
                                width={20}
                                height={20}
                            />
                            Google
                        </button>
                    </div>
                    <p className="auth__help">
                        Don&apos;t have an account? &nbsp; 
                        <Link href="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
            <div className="auth-page__img">
                <Image
                    src={img}
                    alt="Sign in"
                />
            </div>
        </div>
    );
}