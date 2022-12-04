import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export interface ContactInterface {}

const Contact: React.FC<ContactInterface> = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jsebastiangb.12@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left justify-evenly items-center md:flex-row max-w-7xl px-10 mx-auto bg-custom_white-primary text-[#0f0f0f]">
      <h3 className="absolute text-2xl top-16 uppercase tracking-[20px]">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 md:flex-row items-center justify-center gap-2">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <h4 className="text-4xl font-semibold text-center">Let talk...</h4>
          <div className="flex flex-row items-center justify-center gap-3 animate-pulse">
            <PhoneIcon className="h-7 w-7 text-[#0f0f0f]" />
            <p>+57 3002069768</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 animate-pulse">
            <EnvelopeIcon className="h-7 w-7 text-[#0f0f0f]" />
            <p>jsebastiangb.12@gmail.com</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 animate-pulse">
            <MapPinIcon className="h-7 w-7 text-[#0f0f0f]" />
            <p>Cali, Colombia</p>
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 300 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-fit mx-auto"
        >
          <div className="flex gap-2">
            <input
              {...register('name')}
              className="contact-input"
              type="text"
              placeholder="Name"
            />
            <input
              {...register('email')}
              className="contact-input"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register('subject')}
            className="contact-input"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register('message')}
            className="contact-input"
            name=""
            id=""
            placeholder="Message"
          ></textarea>
          <button className="bg-[#0f0f0f] px-10 py-5 rounded-md text-custom_white-primary text-lg font-bold">
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
