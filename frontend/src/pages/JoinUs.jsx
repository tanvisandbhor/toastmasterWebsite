// src/pages/JoinUs.jsx
export default function JoinUs() {
  return (
    <section
      id="join"
      className="min-h-screen bg-gradient-to-br from-[#fff0f0] to-[#fdf6f0] text-gray-900 flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600">
          Ready to Join Us?
        </h2>

        <p className="text-lg md:text-xl">
          Be part of a supportive community where you can practice public
          speaking, grow as a leader, and boost your confidence — one meeting at
          a time.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a
            href="https://forms.gle/your-google-form"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
          >
            Register Now
          </a>

          <a
            href="https://chat.whatsapp.com/GS6tcEl4mYYHscuE0J5c2o?mode=ac_t
"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-red-500 text-red-600 hover:bg-red-500 hover:text-white rounded-lg font-semibold transition"
          >
            Join WhatsApp Group
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          📅 Meetings every Wednesday • 🕔 5:00 PM • 📍 Softskills Lab,Polytechnic Building
        </p>

        <p className="text-xs text-gray-400 italic">
          
        </p>
      </div>
    </section>
  );
}
