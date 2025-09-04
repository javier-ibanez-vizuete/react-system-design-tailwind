export const ImageContainer = ({ children, className }) => {
    return <picture className={`flex justify-center items-center ${className}`}>{children}</picture>;
};
