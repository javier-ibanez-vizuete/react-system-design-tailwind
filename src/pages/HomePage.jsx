import { useContext } from "react";
import { Hero } from "../components/Hero";
import { LanguageContext } from "../contexts/LanguageContext";
import { BrandsSection } from "../Sections/BrandsSection";
import { CTAFirstSection } from "../Sections/CTAFirstSection";

export const HomePage = () => {
    const { getText } = useContext(LanguageContext);

    return (
        <div className="flex flex-col flex-1 text-center">
            <CTAFirstSection />
            <Hero />
            <BrandsSection />
        </div>
    );
};
