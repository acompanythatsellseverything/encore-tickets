import React, {ReactNode} from 'react';

const Subtitle = ({children}:{children: ReactNode}) => {
    return (
        <h2 className="text-center font-extrabold text-xl -tracking-tighter uppercase">{children}</h2>)
}

export default Subtitle;