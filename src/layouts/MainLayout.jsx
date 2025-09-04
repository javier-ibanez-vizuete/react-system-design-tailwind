import { Footer } from "../components/Footer";
import { NavBar } from "../components/Navbar";

export const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-full text-gray-900 divide-solid divide-y divide-neutral-300">
            <NavBar />
            <main className="flex-1 flex flex-col bg-white">{children}</main>
            <Footer />
        </div>
    );
};
