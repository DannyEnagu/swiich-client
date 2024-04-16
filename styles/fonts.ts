import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  variable: '--ff-inter',
  weight: ["400", "500", "600", "700", "800"],
});
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: '--ff-poppins',
});

export { inter, poppins };