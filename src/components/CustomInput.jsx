export const CustomInput = ({ children, inputName, labelName, className = "" }) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <label htmlFor={inputName} className="text-sm">
                {labelName}
            </label>
            {children}
        </div>
    );
};
