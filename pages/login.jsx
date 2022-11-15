import Head from "next/head";

import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { LayoutSignInRegister } from "../components/components";

const Login = () => {
    const validate = Yup.object({
        
        u_email: Yup.string()
        .email(`Please add '@example.com' in the email`)
        .required('Email is required'),

        u_pword: Yup.string()
        .min(4, 'Password must be at least 4 characters')
        .required('Password is required'),   

    })
    return (
        <LayoutSignInRegister>
            <Head>
                <title>Login Page</title>
            </Head>
            <>
                <div>
                    <h1 className="text-3xl font-semibold text-center">Sign In</h1>
                    <p className="text-gray-500 mx-auto text-center mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo, numquam corporis exercitationem aliquid dolores.
                    </p>
                </div>
                <Formik
                    initialValues={{
                        u_email: '',
                        u_pword: '',
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {   formik => (
                        <Form>
                            <div className="mt-12 relative">
                                <label htmlFor="lab_email" className="">Email</label>
                                <input
                                    id="email" 
                                    className={`w-full py-2 px-3 border ${ formik.errors.u_email && formik.touched.u_email ? `border-red-500 focus:border-red-500` : `focus:border-indigo-500 border-gray-300` } rounded-lg focus:outline-none`}
                                    type="email"
                                    placeholder="johndoe@gmail.com"
                                    name="u_email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    values={formik.values.u_email}
                                    autoComplete="off"
                                />
                                {   formik.errors.u_email && formik.touched.u_email ? (
                                        <p className="absolute -bottom-4 inset-x-0 px-3 text-xs text-red-500">{formik.errors.u_email}</p>
                                    ) : (null)
                                }
                            </div>

                            <div className="mt-5 relative">
                                <label htmlFor="lab_pword" className="">Password</label>
                                <input 
                                    id="lab_pword"
                                    className={`w-full py-2 px-3 border ${ formik.errors.u_pword && formik.touched.u_pword ? `border-red-500 focus:border-red-500` : `focus:border-indigo-500 border-gray-300` } rounded-lg focus:outline-none`}
                                    type="password"
                                    placeholder="doe123"
                                    name="u_pword"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    values={formik.values.u_pword}
                                    autoComplete="off"
                                />
                                {   formik.errors.u_pword && formik.touched.u_pword ? (
                                        <p className="absolute -bottom-4 inset-x-0 px-3 text-xs text-red-500">{formik.errors.u_pword}</p>
                                    ) : (null)
                                }
                            </div>

                            <button 
                                type="submit" 
                                className="mt-6 p-1 px-8 py-1 text-white font-medium bg-violet-500 hover:bg-violet-600 rounded-md w-full focus:outline-none focus:ring focus:ring-violet-300"
                            >Login
                            </button>
                        </Form>
                    )}
                </Formik>
            </>
        </LayoutSignInRegister>
    )
}
export default Login;