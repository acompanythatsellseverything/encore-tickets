import React, { useEffect } from "react";
import FormBook from "@/app/components/FormBook";
import {motion} from "framer-motion";

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
            className="fixed inset-0 bg-secondary bg-opacity-50 flex items-center justify-center px-4 z-50"
            onClick={handleOverlayClick}
        >
            <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                viewport={{ once: true, amount: 0.05 }}
                className="bg-beige w-fit max-h-[90vh] md:max-h-fit overflow-y-scroll z-50 scrollbar-hide"
                onClick={handleModalClick}
            >
               <FormBook/>
            </motion.div>
        </div>
    );
};

export default ContactModal;
