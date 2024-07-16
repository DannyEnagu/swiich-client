"use client"
import { socket } from "@/socket";
import { createContext, useEffect, useState } from "react";

export const SocketContext = createContext(socket);

export default function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socketInstance, setSocketInstance] = useState(socket);

  useEffect(() => {
    setSocketInstance(socket);
  }, []);

  return (
    <SocketContext.Provider value={socketInstance}>
      {children}
    </SocketContext.Provider>
  );
}