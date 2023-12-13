import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center capitalize">Contact Us</h2>
        <p className="text__para text-center mb-8 lg:mb-16 font-light">
          got a technical issue? want to send feedback about a beta featue ? let
          us know
        </p>
        <form action="" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email{" "}
            </label>
            <input
              type="email"
              name="email"
              className="form__input mt-0"
              placeholder="example @gmail.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="form__label">
              Subject{" "}
            </label>
            <input
              type="text"
              name="subject"
              className="form__input mt-0"
              placeholder="lets us know how can we help you"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              your message{" "}
            </label>
            <textarea name="message" id="message" rows="6" placeholder="leave message..." className="w-full mt-2 px-5"></textarea>
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
