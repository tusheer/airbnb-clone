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
        <html lang="en" suppressHydrationWarning className={inter.className}>
            <head>
                <title>Vacation Homes &amp; Condo Rentals - Airbnb</title>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
                />
            </head>
            <body suppressHydrationWarning>
                <TRPCReactProvider>{children}</TRPCReactProvider>
            </body>
        </html>
    );
}
