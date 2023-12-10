import { Figtree } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'Spotify 2.0',
  description: 'Enjoy the music',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
