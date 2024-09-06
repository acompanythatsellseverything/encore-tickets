import React, {ReactNode} from 'react';

const Subtitle = ({children, className}:{children: ReactNode, className?: string}) => {
    return (
        <h2 className={`text-center font-extrabold text-xl -tracking-tighter uppercase ${className}`}>{children}</h2>)
}

export default Subtitle;