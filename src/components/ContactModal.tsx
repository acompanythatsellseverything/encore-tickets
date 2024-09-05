import React, { useEffect } from "react";
import FormBook from "@/app/components/FormBook";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps>= ({ isOpen, onClose }) => {
    useEffect(() => {
        // Disable scroll when modal is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // Cleanup function to reset overflow when the component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Prevent the click inside the modal from triggering the close
    const handleModalClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };

    // Close modal when clicking outside
    const handleOverlayClick = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div
                className="bg-beige  w-fit"
                onClick={handleModalClick}
            >
               <FormBook/>
            </div>
        </div>
    );
};

export default ContactModal;
