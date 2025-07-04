
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-grayish via-misty-lavender/20 to-soft-blue/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,172,228,0.05),transparent_50%)] pointer-events-none"></div>
      <Navbar />
      <main className="pt-20 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
