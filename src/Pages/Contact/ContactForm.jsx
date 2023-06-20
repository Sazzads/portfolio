import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const ContactForm = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v4axg7a', 'template_eb3n5rs', form.current, 'Uanvk0UfLgd_BStCp')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'your message has been sent successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div className="hero  bg-base-200" data-aos="flip-left" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl uppercase font-bold ">Contact Me!</h1>
                        <p className="py-6">Please do not hesitate to contact me for any reason.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-500 shadow-black mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <input name="from_name" type="text" placeholder="Your Name" className="input input-bordered textarea" />
                            </div>
                            <div className="form-control">
                                <input name="from_email" type="email" placeholder="Your Email" className="input input-bordered textarea" />
                            </div>
                            <div className="form-control">
                                <input name="message" type="text" placeholder="Enter Your Message" className="input input-bordered textarea" />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-slate-700 text-white" type="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default ContactForm;