import {ReactNode} from "react";

const Box = ({children}:{children: ReactNode }) => {
    return (
        <div className='max-w-[1440px] mx-auto py-20 px-20'>{children}</div>
    )
}

export default Box