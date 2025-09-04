import { Hero } from "../components/Hero";
import { BrandsSection } from "../Sections/BrandsSection";
import { CTAFirstSection } from "../Sections/CTAFirstSection";
import { CTASecondSection } from "../Sections/CTASecondSection";
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
        </div>
    );
};
