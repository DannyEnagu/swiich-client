"use client"

import { io, Socket } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.ENV === 'production' ? undefined : 'http://localhost:3001';

const URL = 'http://localhost:3001';

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL);