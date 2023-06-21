import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ className = '', ...rest }: ButtonProps) {
  return (
    <button
      className={`px-5 py-3 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600 transition-colors duration-200 ease-in-out ${className}`}
      {...rest}
    />
  );
}
