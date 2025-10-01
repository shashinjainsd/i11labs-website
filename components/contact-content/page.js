'use client'
import styles from "../../app/page.module.css";
import Link from "next/link"
import { useRouter } from "next/navigation";
import * as Yup from 'yup'
import { useFormik } from 'formik'

const Contact = () => {

    const router = useRouter();

    const validationSchema = Yup.object({
        firstname: Yup.string().required('Please fill out this field')
            .min(3, 'Minimum 3 characters'),
        lastname: Yup.string()
            .required('Please fill out this field')
            .min(1, 'Minimum 1 character'),
        emailaddress: Yup.string().email("Please enter a valid email address")
            .required('Please enter an email address')
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/,
                "Please enter a valid email address"
            ),
        phonenumber: Yup.string()
            .min(10, "Please enter a valid phone number")
            .max(20, "Please enter a valid phone number")
            // .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number')
            .required('Please enter a phone number'),
        message: Yup.string().required('Please fill out this field')
            .min(5, 'Minimum 5 characters')
    });

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            emailaddress: "",
            phonenumber: "",
            message: ""
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                console.log('', values); // Debugging submission values
                const response = await fetch('https://www.i11labs.com/i11nodeemail/api/emailService/i11contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values)
                });
                const res = await response.json();
                console.log('', res); // Debugging response
                
                if (res.status === 'Ok' || res.message === 'Email Sent Successfully') {
                    document.getElementById("contactform").reset();
                    console.log(''); // Debugging navigation
                    router.push('/contact-thank').then(() => {
                        console.log('');
                    }).catch((err) => {
                        console.error('', err);
                    });
                } else {
                    console.error('', res.message);
                }
            } catch (error) {
                console.error('', error);
            }
        },
    });

    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-12 p-5" id="bgcolorsection">
                        <div className="bgcolorposition pt-5 pt-md-0">
                            <div className={`${styles.vr}`}>
                                <h2 className={`${styles.heading} ps-4 mb-0`}>Reach Us</h2>
                            </div>
                            <div className="pt-5 pt-md-3">
                                <p className={`${styles.para} mb-0`}><Link style={{ textDecoration: "none", color: "#191E23" }} href="tel: (915) 235-9076" rel="noreferrer" target="_blank" >(915) 235-9076 </Link></p>
                                <p className={`${styles.para} mb-0`}><Link style={{ textDecoration: "none", color: "#191E23" }} href="mailto: connect@i11labs.com" rel="noreferrer" target="_blank">connect@i11labs.com</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-2 col-lg-6 col-md-7 col-12 p-lg-5 pt-5 pt-md-0" id="contactpad">
                        <div className={`${styles.vr}`}>
                            <h2 className={`${styles.heading} ps-4 mb-0`}>Write To Us</h2>
                            <p className={`${styles.subheading} ps-4 mb-0`}>We would love to hear from you!</p>
                        </div>
                        <div className="row">
                            <div className="col">
                                <form onSubmit={formik.handleSubmit} id="contactform" autoComplete="off">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-xl-5">
                                            <div className="form_group">
                                                <input type="text" className="form-control" placeholder="First Name" aria-label="First name" name="firstname" autoComplete="off" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                            </div>
                                            {formik.errors.firstname && formik.touched.firstname && (
                                                <p className="errors pt-2 mb-0">{formik.errors.firstname}</p>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-5">
                                            <div className="form_group">
                                                <input type="text" className="form-control" placeholder="Last Name" name="lastname" autoComplete="off" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                            </div>
                                            {formik.errors.lastname && formik.touched.lastname && (
                                                <p className="errors pt-2 mb-0">{formik.errors.lastname}</p>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-5">
                                            <div className="form_group">
                                                <input type="email" className="form-control" placeholder="Email Address" autoComplete="off" name="emailaddress" value={formik.values.emailaddress} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                            </div>
                                            {formik.errors.emailaddress && formik.touched.emailaddress && (
                                                <p className="errors pt-2 mb-0">{formik.errors.emailaddress}</p>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-5">
                                            <div className="form_group">
                                                <input type="tel" className="form-control" placeholder="Phone No" autoComplete="off" name="phonenumber" value={formik.values.phonenumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                            </div>
                                            {formik.errors.phonenumber && formik.touched.phonenumber && (
                                                <p className="errors pt-2 mb-0">{formik.errors.phonenumber}</p>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-12 col-xl-10">
                                            <div className="form_group">
                                            <textarea type="text" className="form-control" id="exampleFormControlTextarea1" name="message" placeholder="Your Message" autoComplete="off" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} rows="3" style={{resize:"none"}}></textarea>
                                            </div>
                                            {formik.errors.message && formik.touched.message && (
                                                <p className="errors pt-2 mb-0">{formik.errors.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-xl-10 pt-4 pt-xl-5">
                                            <button className={`${styles.btn} `} type="submit" htef="#">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact
