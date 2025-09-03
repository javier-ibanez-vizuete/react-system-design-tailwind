export const Container = ({ children, className = "" }) => {
    return <div className={`md:w-[95%] lg:w-[85%] xl:w-[75%] md:mx-auto px-sm ${className}`}>{children}</div>;
};
