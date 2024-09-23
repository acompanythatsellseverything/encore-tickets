import React, {ReactNode} from 'react';

const Text = ({children, className}:{children: ReactNode, className?: string}) => {
    return (
        <p className={`text-lg -tracking-tighter text-secondary ${className}`}>{children}</p>)
}

export default Text;