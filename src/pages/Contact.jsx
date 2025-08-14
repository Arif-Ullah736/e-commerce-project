import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form action=" https://formspree.io/f/xpwlndrr" method="POST">
        <div className="flex flex-col justify-center gap-5">
          <input
            type="text "
            name="name"
            placeholder="Enter Your Name"
            className="border-1 outline-0 w-80 h-[35px] pl-3 rounded"
          />
          <input
            type="email "
            name="email"
            placeholder="Enter Your Email"
            className="border-1 outline-0 w-80 h-[35px] pl-3 rounded"
            required
          />
          <textarea
            name="message"
            id=""
            placeholder=" Message"
            className="border-1 outline-0 w-80  pl-3 rounded"
          ></textarea>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-5 py-0.5 bg-black rounded-full   text-white hover:bg-gray-900/75 transition-all duration-300 ease-in"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
