import { Inter } from 'next/font/google';
import '../../styles/globals.css';
import '../../styles/tailwind.css';
import { TRPCReactProvider } from './providers';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <TRPCReactProvider>{children}</TRPCReactProvider>
            </body>
        </html>
    );
}
