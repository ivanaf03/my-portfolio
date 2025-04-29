import React from "react";
import Main from "../UI/Main";

const formSpreeId = import.meta.env.VITE_FORMSPREE_ID;

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://formspree.io/f/${formSpreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error("Failed to send");

      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Main title="Contact">
      <form
        onSubmit={handleSubmit}
        className="my-8 sm:my-16 md:my-24 flex flex-col gap-4 items-center"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          className="w-sm sm:w-md md:w-xl p-2 border-2 border-white rounded-2xl"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter a contact email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          className="w-sm sm:w-md md:w-xl p-2 border-2 border-white rounded-2xl"
        />
        <textarea
          name="message"
          placeholder="What do you want to say?"
          required
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
          className="w-sm sm:w-md md:w-xl p-2 border-2 border-white rounded-lg"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-sm sm:w-md md:w-xl bg-onyx rounded-full px-4 py-2 text-white font-bold border-x-2 border-white flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          ) : sent ? (
            "Sent!"
          ) : (
            "Send"
          )}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </Main>
  );
};

export default Contact;
