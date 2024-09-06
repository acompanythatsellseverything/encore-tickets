import React, {ReactNode} from 'react';

const Text = ({children, className}:{children: ReactNode, className?: string}) => {
    return (
        <p className={`text-lg -tracking-tighter ${className}`}>{children}</p>)
}

export default Text;