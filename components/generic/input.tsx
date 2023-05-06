type InputProps = {
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 bg-slate-800 focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded-md px-3 py-2 text-base text-black dark:text-white ${className}`}
    />
  );
};

export default Input;
