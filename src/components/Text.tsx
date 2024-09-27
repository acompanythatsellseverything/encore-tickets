import React, {ReactNode} from 'react';

const Text = ({children, className}:{children: ReactNode, className?: string}) => {
    return (
        <p className={`text-sm md:text-lg -tracking-tighter text-secondary ${className}`}>{children}</p>)
}

export default Text;