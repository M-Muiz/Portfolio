import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { IoSend } from "react-icons/io5";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bw0axwa",
        "template_e1s01s1",
        form.current,
        "7rZJQACfHvmnUQEgJ"
      )
      .then(
        (result) => {
          toast.success('Message Send Successfully!');
        },
        (error) => {
          toast.error('Message Send Failed. Try Again!');
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="md:w-1/2 w-full font-jaldi flex flex-col gap-4"
      autoComplete="off"
    >
      <label>Name</label>
      <input
        type="text"
        required
        name="from_name"
        className="bg-lightgray border border-solid border-black rounded-md h-10 p-3 outline-none focus:border-orange-500"
      />
      <label>Email</label>
      <input
        type="email"
        required
        name="from_email"
        className="bg-lightgray border border-solid border-black rounded-md h-10 p-3 outline-none focus:border-orange-500"
      />
      <label>Message</label>
      <textarea
        className="bg-lightgray border border-solid border-black rounded-md p-3 outline-none focus:border-orange-500"
        rows="5"
        required
        cols="30"
        name="message"
      ></textarea>
      <button
        type="submit"
        value="Send"
        className="bg-orange-500 text-white border border-black font-semibold tracking-wider rounded-md py-2 my-3 duration-150 hover:scale-110"
      >
        <div className="flex items-center justify-center gap-3">
          <p>Send Message</p>
          <IoSend className="text-xl" />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
