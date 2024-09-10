import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Support = () => {
    return (
        <Link href={'#'}>
            <Image src={'/img/icons/support.svg'} alt={'Support'} width={60} height={60} className='fixed bottom-10 right-10 z-40'/>
        </Link>
    );
};

export default Support;