import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { NewType } from '../types/NewType';

const Layout: NewType = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-base-black">
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        {/*  */}
        <Navbar />
        {/*  */}
        <main className="w-full pb-12 px-4">{children}</main>
        {/*  */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
