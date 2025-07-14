const ContactForm = () => {
  return (
    <section className="form flex flex-col justify-center items-center h-screen">
      <h1 className="text-white text-6xl mb-10">Get in Touch - Let Connect!</h1>
      <form className="flex flex-col p-6 text-white b-2 border-red-500 bg-gray-600 rounded-2xl gap-2">
        <label>Your Name</label>
        <input
          className="input-field border-1 h-12 border-white w-160 rounded-xl placeholder:pl-4"
          type="text"
          placeholder="Name"
        ></input>
        <label>Your Email</label>
        <input
          className="input-field border-1 h-12 border-white w-160 rounded-xl placeholder:pl-4"
          type="text"
          placeholder="Email"
        ></input>
        <label>Your Message</label>
        <textarea
          className="input-field border-1 h-40 border-white w-160 rounded-xl placeholder:p-4"
          placeholder="What's up?"
        ></textarea>
        <button className="form-button rounded-2xl mt-4 border-2 h-16">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
