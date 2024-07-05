'use client';
import { useEffect } from "react";
import { selectAuth, setCredentials } from "@/lib/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserOrganizations() {
    const auth = useAppSelector(selectAuth)
    const dispatch = useAppDispatch();
    const { data: session } = useSession();
    const organisations = session?.user.organisations;
    useEffect(() => {
        if (session?.token && !auth.token) {
            dispatch(
                setCredentials({
                    user: session.user,
                    token: session.token
                })
            )
        }
    }, [session, auth, dispatch]);
    return (
        <>
            {session && organisations && organisations.length > 0 && (
                <div>
                    <h1>User Organizations</h1>
                    <p>
                        Bellow is a list of organizations that you are a member of.
                    </p>
                    select an organization to view dashboard.
                    <ul>
                        {organisations && organisations.map((organization: any) => (
                            <li key={organization.id}>
                                <Link href={`/dashboard/${organization.id}`}>
                                    {`/dashboard/${organization.id}`}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>)
            }
        </>
    );
}