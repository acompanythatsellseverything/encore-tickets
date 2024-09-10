import React from 'react'


export const Divider = ({className}: {className?: string}) => {
	return (
		<span className={`w-full border border-dashed border-gray-500 my-6 ${className}`}></span>
	)
}
