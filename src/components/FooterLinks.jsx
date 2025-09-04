import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

export const LINKS_FORM_DATA = [
    {
        title: "linksFormDataTitle1",
        links: [
            { label: "linkFormDataLabel1", href: "#" },
            { label: "linkFormDataLabel2", href: "#" },
            { label: "linkFormDataLabel3", href: "#" },
            { label: "linkFormDataLabel4", href: "#" },
            { label: "linkFormDataLabel5", href: "#" },
        ],
    },
    {
        title: "linksFormDataTitle2",
        links: [
            { label: "linkFormDataLabel6", href: "#" },
            { label: "linkFormDataLabel7", href: "#" },
            { label: "linkFormDataLabel8", href: "#" },
            { label: "linkFormDataLabel9", href: "#" },
            { label: "linkFormDataLabel10", href: "#" },
        ],
    },
    {
        title: "linksFormDataTitle3",
        links: [
            { label: "linkFormDataLabel11", href: "#" },
            { label: "linkFormDataLabel12", href: "#" },
            { label: "linkFormDataLabel13", href: "#" },
            { label: "linkFormDataLabel14", href: "#" },
            { label: "linkFormDataLabel15", href: "#" },
        ],
    },
    {
        title: "linksFormDataTitle4",
        links: [
            { label: "linkFormDataLabel16", href: "#" },
            { label: "linkFormDataLabel17", href: "#" },
            { label: "linkFormDataLabel18", href: "#" },
            { label: "linkFormDataLabel19", href: "#" },
            { label: "linkFormDataLabel20", href: "#" },
        ],
    },
    {
        title: "linksFormDataTitle5",
        links: [
            { label: "linkFormDataLabel21", href: "#" },
            { label: "linkFormDataLabel22", href: "#" },
            { label: "linkFormDataLabel23", href: "#" },
            { label: "linkFormDataLabel24", href: "#" },
            { label: "linkFormDataLabel25", href: "#" },
        ],
    },
];

const LinksList = ({ listData }) => {
    const { getText } = useContext(LanguageContext);

    return (
        <div className="flex flex-col gap-2.5 basis-[100px] md:basis-[120px]">
            <h6 className="text-xl">{getText(listData.title)}</h6>
            <ul className="flex flex-col gap-2.5">
                {listData?.links?.map((link) => (
                    <li key={link.label}>
                        <Link to={link?.href}>{getText(link?.label)}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const FooterLinks = () => {
    return (
        <div className="flex flex-wrap gap-x-16 justify-between gap-y-14">
            {LINKS_FORM_DATA.map((link) => (
                <LinksList key={link.title} listData={link} />
            ))}
        </div>
    );
};
