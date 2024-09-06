'use client'
import {useFormik} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().optional(),
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
        <form onSubmit={formik.handleSubmit} className="flex-col items-center mt-8">
            <label className="uppercase text-sm flex items-center" htmlFor="firstName">
                first name <span className="lowercase text-xs text-gray-500">(required)</span>
            </label>
            <input
                id="firstName"
                name="firstName"
                className="w-full bg-inherit border-b border-black focus:outline-0"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.firstName}</div>
            ) : null}

            <label className="uppercase text-sm flex items-center gap-1 mt-8" htmlFor="lastName">
                last name <span className="lowercase text-xs text-gray-500">(required)</span>
            </label>
            <input
                id="lastName"
                name="lastName"
                className="w-full bg-inherit border-b border-black focus:outline-0"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.lastName}</div>
            ) : null}

            <label className="uppercase text-sm flex items-center gap-1 mt-8" htmlFor="email">
                email <span className="lowercase text-xs text-gray-500">(required)</span>
            </label>
            <input
                id="email"
                name="email"
                type="email"
                className="w-full bg-inherit border-b border-black focus:outline-0"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
            ) : null}

            <label className="uppercase text-sm flex items-center gap-1 mt-8" htmlFor="phone">
                phone
            </label>
            <input
                id="phone"
                name="phone"
                className="w-full bg-inherit border-b border-black focus:outline-0"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <label className="uppercase text-sm flex items-center gap-1 mt-8" htmlFor="message">
                message
            </label>
            <textarea
                id="message"
                name="message"
                className="w-full bg-inherit border-b border-black h-auto focus:outline-0"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <div className="w-full flex justify-center">
                <button
                        type="submit"
                        className="mt-8 bg-black text-white uppercase py-5 px-32  text-xl hover:bg-gray-300 hover:text-black transition-all duration-500"
                        >
                        Submit
                </button>
            </div>
        </form>
    );
};

export default SellTicketForm;