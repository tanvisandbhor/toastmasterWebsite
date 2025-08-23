// src/pages/EventLocation.jsx

export default function EventLocation() {
  return (
    <section
      id="location"
      className="bg-white py-16 px-6 md:px-20 text-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Where Exactly Do Our Events Take Place?
      </h2>
      <p className="text-lg text-center mb-10">
        All our Toastmasters events happen in the <strong>Soft Skills Lab</strong> —
        located on the 3rd floor of the Polytechnic Building, right above the Library.
        Here’s how to find us:
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src="http://googleusercontent.com/image_generation_content/0"
            alt="Library Entrance"
            className="rounded-xl shadow-md mb-4 w-full h-64 object-cover"
          />
          <p className="text-center text-sm">
            Step 1: Enter the campus and walk towards the Polytecnic building.
          </p>
        </div>

        <div>
          <img
            src="http://googleusercontent.com/image_generation_content/1"
            alt="Polytechnic Building"
            className="rounded-xl shadow-md mb-4 w-full h-64 object-cover"
          />
          <p className="text-center text-sm">
            Step 2: Find the Polytechnic Building, located just beside the Cafeteria.
          </p>
        </div>

        <div>
          <img
            src="http://googleusercontent.com/image_generation_content/2"
            alt="Staircase"
            className="rounded-xl shadow-md mb-4 w-full h-64 object-cover"
          />
          <p className="text-center text-sm">
            Step 3: Take the stairs or elevator to reach the 3rd floor.
          </p>
        </div>

        <div>
          <img
            src="http://googleusercontent.com/image_generation_content/3"
            alt="Soft Skills Lab"
            className="rounded-xl shadow-md mb-4 w-full h-64 object-cover"
          />
          <p className="text-center text-sm">
            Step 4: Look for the door labeled “Soft Skills Lab” — and you're here!
          </p>
        </div>
      </div>
    </section>
  );
}
