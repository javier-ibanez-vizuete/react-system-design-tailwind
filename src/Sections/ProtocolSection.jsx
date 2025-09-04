import { ProtocolCard } from "../components/ProtocolCard";
import { SectionContainer } from "../components/SectionContainer";

import imageAppSettings from "../assets/pictures/home-page/image-app-settings.png";
import imageProductivity from "../assets/pictures/home-page/image-productivity.png";

const PROTOCOL_DATA = [
    {
        title: "Make the best hire in half the time",
        content:
            "Move faster on a recruiting platform that automates manual tasks like scheduling interviews and getting approvals.",
        img: imageAppSettings ? imageAppSettings : "",
    },
    {
        title: "Streamline your recruitment process",
        content:
            "Centralize candidate data, simplify workflows, and collaborate with your team in real time.",
        img: imageProductivity ? imageProductivity : "",
    },
    {
        title: "Improve candidate experience",
        content:
            "Offer a smooth and professional journey with automated communication and personalized touchpoints.",
        img: imageAppSettings ? imageAppSettings : "",
    },
    {
        title: "Data-driven hiring decisions",
        content:
            "Use analytics and reporting tools to optimize your recruitment strategy and reduce time-to-hire.",
        img: imageProductivity ? imageProductivity : "",
    },
];

export const ProtocolSection = () => {
    return (
        <SectionContainer className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
            {PROTOCOL_DATA.map((data, index) => {
                return (
                    <ProtocolCard
                        key={data.title}
                        title={data?.title}
                        content={data?.content}
                        img={data?.img}
                        direction={index % 2 !== 0 ? "md:flex-col-reverse" : "md:flex-col"}
                        imgSize="max-w-[200px] md:max-w-[400px] xl:max-w-[500px]"
                    />
                );
            })}
        </SectionContainer>
    );
};
