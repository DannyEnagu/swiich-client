import { useContext } from 'react';
import { SocketContext } from '@/lib/AppProvider/SocketProvider';

export default function useSocket() {
    const socket = useContext(SocketContext);
    return socket;
}