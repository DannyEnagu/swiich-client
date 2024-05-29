import Image from "next/image";
import UserFrom from "@/components/AuthForm/AuthForm";
import img from "../../../public/images/signup-img.jpeg";
import googleIcon from "../../../public/images/google.png";
import Link from "next/link";

export default function page() {
    return (
        <div className="auth-page sign-up">
            <div className="auth-page__img">
                <Image
                    src={img}
                    alt="Sign in"
                />
            </div>
            <div className="auth-page__content">
                <div className="auth-page__form">
                    <h1>Sign Up</h1>
                    <UserFrom type="sign-up"/>
                    <div className="auth__divider">
                        <span>or</span>
                    </div>
                    <div className="auth__opt">
                        <button className="btn btn-outline-primary">
                            <Image
                                src={googleIcon}
                                alt="Google sign Up Icon"
                                width={20}
                                height={20}
                            />
                            Google
                        </button>
                    </div>
                    <p className="auth__help">
                        Already have an account? &nbsp; 
                        <Link href="/signin">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}