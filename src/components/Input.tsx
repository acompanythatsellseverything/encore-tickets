import { ChangeEventHandler, FocusEventHandler } from 'react';
import Image from 'next/image';

interface IProps {
	id?: string;
	name?: string;
	type?: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	required?: boolean;
	label?: string;
	error?: string | false;
}
export const Input = (props: IProps) => {
	return (
		<>
			<label
				className={`mt-8 uppercase text-sm flex items-center ${
					props.error && 'text-error'
				}`}
				htmlFor={props.name}
			>
				{`${props.label}`}
				{props.required && (
					<span className='ml-1 lowercase text-xs text-gray-500'>
						(required)
					</span>
				)}
			</label>
			<div
				className={`group mt-2.5 py-1.5 px-2 flex hover:bg-focus focus-within:bg-focus w-full bg-inherit border-b border-[#b8bbc0] focus-within:border-secondary hover:border-secondary transition-colors duration-300 ${
					props.error && 'hover:bg-errorBg focus-within:bg-errorBg bg-errorBg border-error'
				}`}
			>
				<input
					id={props.id}
					name={props.name}
					type={props.type}
					className={`w-full focus:outline-0 bg-inherit flex-shrink`}
					value={props.value}
					onChange={props.onChange}
					onBlur={props.onBlur}
				/>
				{props.error && (
					<div className='flex-grow min-w-44 basis-full flex justify-end gap-2 items-center text-right text-sm text-error'>
						<span className='flex-grow w-full'>{props.error}</span>
						<Image src='/img/icons/error.svg' alt='' width={17} height={17} />
					</div>
				)}
			</div>
		</>
	);
};
