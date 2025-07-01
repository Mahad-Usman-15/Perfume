"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("error");
      setError("Network or server error");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center space-y-6 mt-32">
        <h1 className="font-bold text-3xl uppercase tracking-tight text-center text-black">Get In Touch</h1>
        <p className="text-lg text-balance text-black tracking-wide text-center">
          Use this text to share information about your brand with your customers. Describe a product, share announcements, or welcome customers to your store.
        </p>
      </div>

      <div className="h-full relative bgimage w-full mt-10 px-4 py-4">
        <div className="absolute inset-0 bg-black bg-opacity-30 w-full"></div>
        <div className="relative flex flex-col items-center justify-start px-2 py-2 min-h-screen">
          <h1 className="font-bold text-3xl uppercase tracking-tight text-start text-black">Contact</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-2xl grid grid-cols-1 grid-rows-2">
            <span className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <span className="w-full flex flex-col items-start justify-center gap-2">
                <label className="font-bold text-2xl text-black">Name</label>
                <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required type="text" className="w-full bg-white px-2 py-2" />
              </span>
              <span className="w-full flex flex-col items-start justify-center gap-2">
                <label className="font-bold text-2xl text-black">Email</label>
                <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required type="email" className="bg-white w-full px-2 py-2" />
              </span>
            </span>

            <span className="w-full flex flex-col items-start justify-center gap-2 mt-4">
              <label className="font-bold text-2xl text-black">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="w-full px-4 py-4" />
            </span>

            <button type="submit" className="mt-5 w-1/4 px-2 py-2 text-center rounded-3xl bg-white hover:bg-red-700 text-black hover:text-white text-lg">
              {status === "loading" ? "Sending..." : "Send"}
            </button>

            {status === "success" && <p className="text-green-600">Email sent successfully!</p>}
            {status === "error" && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
