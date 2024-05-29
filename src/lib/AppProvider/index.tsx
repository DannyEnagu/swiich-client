import SessionProvider from "./SessionProvider";
import StoreProvider from "./StoreProvider";
import ToastProvider from "./ToastProvider";
import { getServerSession } from "next-auth/next";

interface AppProviderProps {
    children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
    const session = getServerSession();
    return (
        <ToastProvider>
            <StoreProvider>
                <SessionProvider session={session}>
                    {children}
                </SessionProvider>
            </StoreProvider>
        </ToastProvider>
    );
}