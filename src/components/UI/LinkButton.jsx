import { Link } from "react-router-dom";

export const LinkButton = ({ children, to, className }) => {
    return (
        <Link
            to={`${to}`}
            className={`py-2xs px-10 rounded-lg border md:hover:translate-y-[-2px]  transition ${className}`}
        >
            {children}
        </Link>
    );
};
