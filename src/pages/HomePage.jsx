import { useContext } from "react";
import { Hero } from "../components/Hero";
import { LanguageContext } from "../contexts/LanguageContext";
import { CTAFirstSection } from "../Sections/CTAFirstSection";

export const HomePage = () => {
    const { getText } = useContext(LanguageContext);

    return (
        <div className="flex flex-col flex-1">
            <CTAFirstSection />
            <Hero />
        </div>
    );
};
