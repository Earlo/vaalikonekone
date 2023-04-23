import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ className = '', ...rest }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
      //className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      {...rest}
    />
  );
}
