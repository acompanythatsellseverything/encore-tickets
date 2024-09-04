import React, {ReactNode} from 'react';

const Title = ({children}:{children: ReactNode}) => {
    return (
        <h2 className="text-center font-extrabold text-3xl -tracking-tighter uppercase">{children}</h2>)
}

export default Title;