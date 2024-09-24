import React from 'react';
import {useFormik} from "formik";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().optional(),
    message: Yup.string().optional(),
});
const MainForm = () => {
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
                    className="mt-8  bg-secondary text-white uppercase py-2 px-4 w-1/2 hover:bg-gray-300 hover:text-secondary transition-all duration-500"
                >
                    Submit
                </button>
            </div>

        </form>
    );
};

export default MainForm;