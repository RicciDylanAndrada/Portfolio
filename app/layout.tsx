import type { Metadata } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource-variable/jetbrains-mono';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'Ricci Dylan Andrada | Software Engineer',
  description: 'Software Engineer at ADP, MS CS Student at Georgia Tech. Building scalable products with React, TypeScript, and Node.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
