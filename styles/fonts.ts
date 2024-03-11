import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  variable: '--ff-inter',
});
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: '--ff-poppins',
});

export { inter, poppins };