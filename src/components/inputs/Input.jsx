const Input = ({
    onBlur = "",
    className = "",
    width = "w-full",
    type = "text",
    name = "undefined",
    placeholder = "Enter your input text",
    value = "",
    handler = "",
}) => {
    return (
        <>
            <input
                className={`form-input-field ${width} ${className}`}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handler}
                onBlur={onBlur}
            />
        </>
    );
};

export default Input;
