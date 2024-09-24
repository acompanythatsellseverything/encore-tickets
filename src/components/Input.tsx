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
				className={`mt-2.5 py-1.5 px-2 flex hover:bg-focus focus:bg-focus  w-full bg-inherit border-b border-secondary ${
					props.error && 'hover:bg-errorBg bg-errorBg border-error'
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
					<div className='flex-grow basis-full flex justify-end gap-2 items-center text-right text-sm text-error'>
						{props.error}
						<Image src='/img/icons/error.svg' alt='' width={17} height={17} />
					</div>
				)}
			</div>
		</>
	);
};
