import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {
    pageInfo: PageInfo;
}

const ContactMe = ({ pageInfo }: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        // window.location.href = `mailto:ahmadhamidty@gmail.com?subject=${formData.subject}&
        //body=Hi, my name is ${formData.name}. ${formData.message}`;
    };

    return (
        <>
            <div className="h-full
            flex relative flex-col justify-evenly items-center text-center
            md:pb-0
            px-10
            mb-28
            md:text-left
            md:flex-row
            max-w-7xl
            mx-auto">
                <div className="flex flex-col space-y-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h3 className='sectionHeaderTitle'>Contact</h3>
                    </motion.div>
                    <h4 className=" md:text-3xl text-xl font-semibold text-center px-9">Contact me whenever you wish. {" "}
                        <span className="bg-primaryColorBlue/50 md:p-0 ">I have got what you need</span>
                    </h4>
                    <div className="space-y-10">
                        {/* Phone */}
                        <div className="flex items-center space-x-5 justify-center">
                            <PhoneIcon className="text-primaryColorBlue h-7 w-7 animate-pulse" />
                            <p className="text-base md:text-lg">{pageInfo?.phoneNumber}</p>
                        </div>

                        {/*  */}
                        <div className="flex items-center space-x-5 justify-center">
                            <EnvelopeIcon className="text-primaryColorBlue h-7 w-7 animate-pulse" />
                            <p className="text-base md:text-lg">{pageInfo?.email}</p>
                        </div>

                        {/* Address */}
                        <div className="flex items-center space-x-5 justify-center">
                            <MapPinIcon className="text-primaryColorBlue h-7 w-7 animate-pulse" />
                            <p className="text-base md:text-lg">{pageInfo?.address}</p>
                        </div>
                    </div>

                    <form className="flex flex-col  space-y-2 w-full md:w-fit mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0 ">
                            <input {...register('name')} className='contactInput' placeholder="Name" type="text" />
                            <input {...register('email')} className='contactInput' placeholder="Email" type="email" />
                        </div>

                        <input {...register('subject')} placeholder="Subject" className='contactInput' type="text" />
                        <textarea {...register('message')} placeholder="Message" className='contactInput' />
                        <button className="formSubmitButton">Submit</button>
                    </form>

                </div>
            </div>
        </>
    )
}
export default ContactMe;