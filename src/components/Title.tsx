import React, {ReactNode} from 'react';

const Title = ({children, className}:{children: ReactNode, className?: string}) => {
    return (
        <h2 className={`text-center font-extrabold text-3xl -tracking-tighter uppercase ${className}`}>{children}</h2>)
}

export default Title;