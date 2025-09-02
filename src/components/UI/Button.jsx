export const Button = ({ children, className, onClick }) => {
    return (
        <button
            className={`py-xs px-10 rounded-lg border md:hover:translate-y-[-2px] transition ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
