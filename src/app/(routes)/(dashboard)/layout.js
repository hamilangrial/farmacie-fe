import Footer from '@/components/core/layout/footer/Footer';
import Navbar from '@/components/core/layout/navbar/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <Navbar />

        <main className="pt-[65px] pl-[80px] pb-[120px]">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
