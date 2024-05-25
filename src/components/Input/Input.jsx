const Input = ({label, type, invalid, ...props}) => {
    let labelStyle = "block mb-2 text-xs font-bold tracking-wide uppercase";
    let inputClasses = "w-full px-3 py-1 leading-tight border rounded shadow";

    if (invalid) {
        labelStyle += " text-red-400";
        inputClasses += " text-red-500 bg-red-100 border-red-300";
    } else {
        labelStyle += " text-stone-300";
        inputClasses += " text-gray-700 bg-gray-200";
    }

    return (
        <p>
            <label className={labelStyle}>{label}</label>
            <input className={inputClasses}{...props}/>
        </p>
    )
}

export default Input;
