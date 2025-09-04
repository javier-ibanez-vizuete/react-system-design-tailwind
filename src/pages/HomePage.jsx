import { Hero } from "../components/Hero";
import { BrandsSection } from "../Sections/BrandsSection";
import { CTAFirstSection } from "../Sections/CTAFirstSection";
import { CTASecondSection } from "../Sections/CTASecondSection";
import { CTAThirdSection } from "../Sections/CTAThirdSection";
import { FaqSection } from "../Sections/FaqSection";
import { FeaturesSection } from "../Sections/FeaturesSection";
import { ProtocolSection } from "../Sections/ProtocolSection";

export const HomePage = () => {
    return (
        <div className="flex flex-col flex-1 text-center">
            <CTAFirstSection />
            <Hero />
            <BrandsSection />
            <FeaturesSection />
            <CTASecondSection />
            <ProtocolSection />
            <CTAThirdSection />
            <FaqSection />
        </div>
    );
};
