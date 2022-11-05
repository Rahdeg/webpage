import React from "react";

const Contact = () => {
  return (
    <div class="flex flex-col m-3 items-center justify-center ">
   
      <form class="bg-white  px-8 pt-6 pb-8 mb-4">
      <div className="flex flex-col gap-3 ">
      <h1 className=" text-3xl md:text-2xl font-bold  text-primary">Contact Me</h1>
      <p className=" text-sm text-textColor tracking-wider">Hi   there,contact me to ask me about anything you have in mind.</p>
      </div>
        <div className="flex flex-col md:flex-row w-full gap-5 mt-6">
          <div className="mb-4">
            <label
              class="block text-sm  mb-2 text-textColor"
              for="username"
            >
              Firstname
            </label>
            <input
              class="shadow appearance-none border rounded py-2 h-80 w-full px-3 lg:w-350 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div class="mb-4" >
            <label
              class="block text-gray-700 text-sm  mb-2"
              for="username"
            >
              Lastname
            </label>
            <input
              class="shadow appearance-none border rounded  h-80 w-full lg:w-350 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm  mb-2"
            for="username"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded h-80 w-full lg:w-650 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="yourname@email.com"
          />
        </div>

        <div>
          <label for="about" class="block text-sm  text-gray-700">
            Message
          </label>
          <div class="mt-1">
            <textarea
              id="message"
              name="about"
              rows="3"
              class="shadow appearance-none border rounded h-225 w-full lg:w-650 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="send me message and I'II reply you as soon as possible"
            ></textarea>
          </div>
        </div>

        <div class="flex items-center mb-4 mt-4">
          <input
            id="checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm  text-gray-700"
          >
            You agree to providing your data to (Rahdeg) who may contact you
          </label>
        </div>

        <div class="flex items-center justify-center w-full">
          <button
            class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            id="btn__submit"
            type="button"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
