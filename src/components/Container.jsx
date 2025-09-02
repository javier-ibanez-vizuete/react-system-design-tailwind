export const Container = ({ children, className = "" }) => {
    return <div className={`md:w-[95%] md:mx-auto px-sm ${className}`}>{children}</div>;
};
