import VerifyOtp from "@/components/VerifyOtp/VerifyOtp";
import Image from "next/image";
import img from "../../../public/images/emailcode-img.jpeg";

export default function page() {
    return (
        <div className="auth-page">
            <div className="auth-page__content">
                <div className="auth-page__form">
                    <VerifyOtp />
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