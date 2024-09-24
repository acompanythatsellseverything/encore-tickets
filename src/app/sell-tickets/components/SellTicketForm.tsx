'use client'
import {useFormik} from "formik";
import * as Yup from "yup";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string(),
    message: Yup.string().optional(),
});

const SellTicketForm = () => {
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
                alert("Form submitted successfully");
            } catch (error) {
                console.error("Error submitting form", error);
                alert("Error submitting form");
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex-col items-center mt-8 text-secondary">
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
            <div className="w-full flex justify-center">
                <button
                        type="submit"
                        className="mt-8 bg-secondary text-white uppercase py-5 px-20 md:px-32  text-sm md:text-xl hover:bg-button-hover hover:text-secondary transition-all duration-500"
                        >
                        Submit
                </button>
            </div>
        </form>
    );
};

export default SellTicketForm;