import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({ label, ...rest }: Props) {
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={rest.id} className="font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...rest}
        className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}
