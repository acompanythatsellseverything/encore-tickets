import React from 'react';
import {useFormik} from "formik";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import * as Yup from "yup";
import SuccessModal from "@/components/SuccessModal";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().optional(),
    message: Yup.string().optional(),
});

const MainForm = () => {
    const [showSuccess, setShowSuccess] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await fetch('https://hook.us1.make.com/h39n115ur077thcbm189447kbrdx8795', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                formik.resetForm();
                setShowSuccess(true);
            } catch (error:any) {
                console.error("Error submitting form", error);
            }
        },
    });

    const closeModal = () => {
        setShowSuccess(false);
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit} className='text-secondary'>
                <Input
                    id="firstName"
                    name="firstName"
                    label="first name"
                    required
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName && formik.errors.firstName}
                />

                <Input
                    id="lastName"
                    name="lastName"
                    label="last name"
                    required
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName && formik.errors.lastName}
                />

                <Input
                    id="email"
                    name="email"
                    label="email"
                    type="email"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email}
                />

                <Input
                    id="phone"
                    name="phone"
                    label="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && formik.errors.phone}
                />

                <TextArea
                    id="message"
                    name="message"
                    label="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <div className='flex justify-center md:justify-start'>
                    <button
                        type="submit"
                        className="mt-8 bg-secondary text-white uppercase py-2 px-4 w-1/2 hover:bg-button-hover hover:text-secondary transition-all duration-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <SuccessModal isOpen={showSuccess} onClose={closeModal} />
        </>
    );
};

export default MainForm;
