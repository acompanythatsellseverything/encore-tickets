import {ReactNode} from "react";

const Box = ({children, className}:{children: ReactNode, className?: string }) => {
    return (
        <div className={`max-w-[1440px] mx-auto py-20 px-20 ${className}`}>{children}</div>
    )
}

export default Box