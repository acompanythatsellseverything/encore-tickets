'use client'
import Box from "@/components/Box";
import Title from "@/components/Title";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { MockEvents } from "@/data/MockEvents";
import ContactModal from "@/components/ContactModal";

const Slider = () => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: { preventDefault: () => void; pageX: number; }) => {
        e.preventDefault();
        setIsDragging(true);
        // @ts-ignore
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        // @ts-ignore
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: { preventDefault: () => void; pageX: number; }) => {
        if (!isDragging) return;
        e.preventDefault();
        // @ts-ignore
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        // @ts-ignore
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className='relative mt-24 overflow-x-scroll overflow-y-clip scrollbar-hide cursor-grab active:cursor-grabbing select-none'
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onDragStart={(e) => e.preventDefault()}
        >
            <div className='flex gap-5 relative w-max'>
                {MockEvents.map((card, i) => (
                    <div className='w-72 h-96 relative overflow-hidden' key={i}>
                        <Image
                            src={card.img}
                            width={280}
                            height={380}
                            alt={card.title}
                            className='object-cover hover:scale-110 transition-all duration-500 '
                            layout="responsive"
                        />
                        <div className='absolute bottom-5 left-5 text-white'>
                            <h2 className='uppercase'>{card.title}</h2>
                            <p>{card.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StayAhead = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box>
            <Title>Stay ahead of the crowd with our<br /> selection of trending events</Title>
            <p className="text-center mt-7 w-2/3 mx-auto">
                From the hottest concerts and must-see theater shows to thrilling sports matches
                and exclusive festivals, these are the events everyone is talking about.
            </p>
            <Slider />
            <div className='flex justify-center mt-8'>
                <button
                    className='uppercase bg-inherit border border-black text-xl px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'
                    onClick={handleOpenModal}
                >
                    Contact Us
                </button>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </Box>
    );
};

export default StayAhead;
