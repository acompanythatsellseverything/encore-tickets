'use client';
import {
	ChangeEventHandler,
	FocusEventHandler,
	useEffect,
	useRef,
} from 'react';
import Image from 'next/image';

interface IProps {
	id?: string;
	name?: string;
	type?: string;
	value: string;
	onChange: ChangeEventHandler<HTMLTextAreaElement>;
	onBlur?: FocusEventHandler<HTMLTextAreaElement>;
	required?: boolean;
	label?: string;
	error?: string | false;
}

export const TextArea = (props: IProps) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	useEffect(() => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	}, [props.value]);

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
				className={`mt-2.5 py-1.5 px-2 flex hover:bg-focus focus-within:bg-focus w-full bg-inherit border-b border-[#b8bbc0] focus-within:border-secondary hover:border-secondary transition-colors duration-300 ${
					props.error && 'hover:bg-errorBg focus-within:bg-errorBg bg-errorBg border-error'
				}`}
			>
				<textarea
					ref={textareaRef}
					id={props.id}
					name={props.name}
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
