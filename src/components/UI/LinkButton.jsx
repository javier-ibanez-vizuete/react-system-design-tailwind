import { Link } from "react-router-dom";

export const LinkButton = ({ children, to, className }) => {
    return (
        <Link
            to={`${to}`}
            className={`py-2xs px-xs rounded-lg elevation border md:hover:translate-y-[-2px] md:px-sm transition ${className}`}
        >
            {children}
        </Link>
    );
};
