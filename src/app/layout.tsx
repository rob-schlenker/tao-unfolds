import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

export const metadata = {
  title: 'Tao Unfolds',
  description: 'A daily journey through the Tao Te Ching',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}