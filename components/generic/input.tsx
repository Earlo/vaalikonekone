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
      className={`border-2 border-gray-300 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-3 text-base text-black dark:text-white transition-colors duration-200 ease-in-out ${className}`}
    />
  );
};

export default Input;
