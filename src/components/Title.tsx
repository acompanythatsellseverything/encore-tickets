import React, {ReactNode} from 'react';

const Title = ({children, className}:{children: ReactNode, className?: string}) => {
    return (
        <h2 className={`text-center font-extrabold text-xl lg:text-3xl -tracking-tighter uppercase text-secondary ${className}`}>{children}</h2>)
}

export default Title;