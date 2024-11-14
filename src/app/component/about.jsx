import React from "react";

export default function About() {
  return (
    <section className="about-section py-10 bg-gray-50">
      <div className="about-header flex flex-col items-center mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Building Future Since 1997
        </h1>
        <h3 className="text-black">Founded by Mr. Mahendra Singh</h3>
      </div>

      <div className="branches flex flex-wrap justify-center gap-8">
        <div className="branch max-w-md bg-white p-6 shadow-md rounded-lg  relative">
          <img
            src="/assets/logo.jpg"
            alt="School Logo"
            className="w-40 h-40 mb-4 rounded-full"
          />
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            SARDAR PATEL HR SEC SCHOOL
          </h2>
          <p className="text-gray-600 mb-2">
            Established in 1997, upgraded to a high school in 2012, and further
            upgraded to a higher secondary school in 2014. Currently affiliated
            with MP Government.
            <br />
            We offer Science, Commerce, and Humanities streams, with subjects
            tailored to prepare students for careers in technology, business,
            and the arts.
          </p>

          <p className="text-gray-800 absolute bottom-2">
            <strong>Contact:</strong> +91 9907378338
          </p>
        </div>

        <div className="branch max-w-md bg-white p-6 shadow-md rounded-lg relative">
          <img
            src="/assets/logo_1.jpg"
            alt="School Logo"
            className="w-40 h-40 mb-4 rounded-full"
          />
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Sardar Patel Convent School
          </h2>
          <p className="text-gray-600 mb-2">
            Our second branch, established in 2013, the Convent School offers
            education from Nursery to Class 8 in English medium. We are
            dedicated to providing a nurturing and engaging environment that
            encourages academic excellence and personal growth, fostering a love
            for learning and a strong foundation for future success.
          </p>

          <p className="text-gray-800 absolute bottom-2">
            <strong>Contact:</strong> +91 9907378338
          </p>
        </div>
      </div>
    </section>
  );
}
