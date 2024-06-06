'use client';

import {
    useVerifyOtpMutation,
    OtpBody
} from '@/services/auth';
import { useState } from 'react';
import styles from './VerifyOtp.module.css';
import Input from '@/components/ui/Input';
import Spinner from '../ui/Spinner';
import { useSession } from 'next-auth/react';
import customToast from '@/utils/toast';

export default function VerifyOtp() {
    const [code, setCode] = useState<number | string>('');
    const { data: session } = useSession();
    const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userId = session?.user?.id;
        try {
            const reqBody: OtpBody = {
                userId: userId,
                otp: code
            }
            
            await verifyOtp(reqBody).unwrap()
                .then((res) => {
                    if (res.isSuccess) {
                        customToast({
                            position: "bottom-left",
                            message: res.message,
                            type: 'success',
                            className: 'toast-medium'
                        });
                    }
                })
                .catch((error) => {
                    const { status, data } = error;
                    const errMeg = status === 500
                    ? data.message
                    : data.message[0].message;

                    customToast({
                        position: "bottom-left",
                        message: errMeg,
                        type: 'error',
                        className: 'toast-medium'
                    });
                });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form
        onSubmit={handleSubmit}
        className={styles.form}>
            <h1>Confirm Email Address</h1>
            <p>
                We have sent a confirmation email to the email address you provided. Please check your email and click the confirmation link to proceed.
            </p>
            <div className={styles.formGroup}>
                <label
                    className='sr-only'
                    htmlFor="emailCode"
                >
                    Email Code
                </label>
                <Input
                    type="number"
                    id="emailCode"
                    name="emailCode"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className={styles.formInput}
                    placeholder="Email Code"
                />
            </div>
            <div className={styles.formGroup}>
                <button
                    disabled={isLoading || !code}
                    className={`btn btn-primary ${styles.formButton}`}
                >
                    
                    {isLoading ? <Spinner /> : 'Verify OTP'}
                </button>
            </div>
            <div className={styles.formGroup}>
                <button
                    className={`btn btn-outline ${styles.formButton}`}
                >
                    Resend OTP
                </button>
            </div>
        </form>
    );
}