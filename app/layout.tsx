import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import './globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className="min-h-[100vh]">
          <Nav />
          {children}
          <div className="bg-black pb-8"></div>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
};

export default Layout; // Add export statement to fix the problem
