import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CTAFirstSection } from "../Sections/CTAFirstSection";

export const HomePage = () => {
    const { getText } = useContext(LanguageContext);

    return (
        <div>
            <CTAFirstSection />
            <div className="bg-blue-700">hola</div>
        </div>
    );
};
