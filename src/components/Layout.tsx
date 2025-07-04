
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-light-grayish">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(108,172,228,0.03),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(214,214,245,0.05),transparent_50%)] pointer-events-none"></div>
      <Navbar />
      <main className="pt-20 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
