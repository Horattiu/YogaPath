import React from "react";

function SelfSummary() {
  return (
    <div className="bg-[#060606] min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl text-white">
        {/* Profilul */}
        <div className="md:col-span-3 bg-gray-800 rounded-lg p-6 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-24 h-24 mb-4"
          />
          <h2 className="text-3xl font-semibold mb-2">David Henderson</h2>
          <p className="text-gray-400 text-center">
            I am a San Francisco-based product designer with a focus on web
            design, illustration, and visual development. I have a diverse range
            of experience working across various fields and industries.
          </p>
        </div>

        {/* Self-Summary Header */}
        <div className="md:col-span-3 bg-gray-800 rounded-lg p-6 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">SELF-SUMMARY</h1>
        </div>

        {/* Experiență */}
        <div className="md:col-span-2 bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          <p className="text-gray-400">
            2007 - 2017 <br />
            Framer Designer & Developer
          </p>
          <p className="text-gray-400 mt-4">
            2017 - 2023 <br />
            Front-End Developer
          </p>
        </div>

        {/* Educație */}
        <div className="md:col-span-2 bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <p className="text-gray-400">
            2004 - 2007 <br />
            Bachelor Degree in Psychology
            <br />
            University of California
          </p>
          <p className="text-gray-400 mt-4">
            Master Degree in Designing <br />
            University of Texas
          </p>
        </div>

        {/* Profiles */}
        <div className="md:col-span-1 bg-gray-800 rounded-lg p-6 flex items-center justify-center">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M12 0C5.371 0 0 5.371 0 12c0 5.06 3.166 9.321 7.584 10.871.554.102.753-.241.753-.535 0-.265-.01-.966-.015-1.896-3.083.669-3.732-1.485-3.732-1.485-.504-1.281-1.231-1.623-1.231-1.623-.997-.682.076-.668.076-.668 1.104.077 1.684 1.135 1.684 1.135.979 1.677 2.566 1.192 3.189.911.099-.71.383-1.193.696-1.467-2.463-.281-5.054-1.232-5.054-5.489 0-1.213.434-2.205 1.148-2.98-.115-.282-.498-1.419.109-2.959 0 0 .929-.297 3.046 1.137.883-.245 1.832-.368 2.774-.372.941.004 1.891.127 2.774.372 2.117-1.434 3.046-1.137 3.046-1.137.608 1.54.225 2.677.11 2.959.716.775 1.148 1.767 1.148 2.98 0 4.269-2.596 5.204-5.066 5.479.394.339.744 1.006.744 2.028 0 1.464-.014 2.642-.014 3.002 0 .297.195.641.761.531C20.837 21.318 24 17.061 24 12 24 5.371 18.629 0 12 0z" />
            </svg>
            <p>Profiles</p>
          </div>
        </div>

        {/* Let's Work Together */}
        <div className="md:col-span-2 bg-gray-800 rounded-lg p-6 flex items-center justify-center">
          <h3 className="text-2xl font-semibold text-center">
            Let's <span className="text-blue-500">work</span> together.
          </h3>
        </div>

        {/* Credentials */}
        <div className="md:col-span-1 bg-gray-800 rounded-lg p-6 flex items-center justify-center">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M12 0C5.371 0 0 5.371 0 12c0 5.06 3.166 9.321 7.584 10.871.554.102.753-.241.753-.535 0-.265-.01-.966-.015-1.896-3.083.669-3.732-1.485-3.732-1.485-.504-1.281-1.231-1.623-1.231-1.623-.997-.682.076-.668.076-.668 1.104.077 1.684 1.135 1.684 1.135.979 1.677 2.566 1.192 3.189.911.099-.71.383-1.193.696-1.467-2.463-.281-5.054-1.232-5.054-5.489 0-1.213.434-2.205 1.148-2.98-.115-.282-.498-1.419.109-2.959 0 0 .929-.297 3.046 1.137.883-.245 1.832-.368 2.774-.372.941.004 1.891.127 2.774.372 2.117-1.434 3.046-1.137 3.046-1.137.608 1.54.225 2.677.11 2.959.716.775 1.148 1.767 1.148 2.98 0 4.269-2.596 5.204-5.066 5.479.394.339.744 1.006.744 2.028 0 1.464-.014 2.642-.014 3.002 0 .297.195.641.761.531C20.837 21.318 24 17.061 24 12 24 5.371 18.629 0 12 0z" />
            </svg>
            <p>Credentials</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfSummary;
