import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const ContactForm = () => {

    const [isFormFilled, setFormFilled] = useState(false);

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


    const handleInputChange = () => {
        const formData = new FormData(form.current);
        let isFilled = true;

        for (let value of formData.values()) {
            if (!value) {
                isFilled = false;
                break;
            }
        }

        setFormFilled(isFilled);
    };
    return (
        <div>
            <div className="hero  "   >
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline uppercase ">
                        --Contact Me!--
                            </p>
                        <p className="py-6">Please do not hesitate to contact me for any reason.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border flex flex-col items-center shadow-lg hover:scale-105 duration-500 shadow-gray-500 hover:bg-gray-100 rounded-md"  >
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <input onChange={handleInputChange} name="from_name" type="text" placeholder="Your Name" className="input input-bordered textarea" />
                            </div>
                            <div className="form-control">
                                <input onChange={handleInputChange} name="from_email" type="email" placeholder="Your Email" className="input input-bordered textarea" />
                            </div>
                            <div className="form-control">
                                <input onChange={handleInputChange} name="message" type="text" placeholder="Enter Your Message" className="input input-bordered textarea" />
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={!isFormFilled} className="btn bg-slate-700 text-white" type="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default ContactForm;