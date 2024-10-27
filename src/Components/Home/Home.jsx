import "./Home.css";
function Home() {
  return (
    <div className="home min-h-screen bg-gray-200 flex justify-center items-center px-4 md:px-12 ">
      <div className="max-w-6xl w-full  grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to Our Professional Service
          </h1>
          <p className="text-lg text-gray-600">
            We provide exciting tasks designed to help you enhance your skills,
            gain practical experience, and prepare you for your future career.
            Each task is a stepping stone towards achieving your goals. Dive in
            and complete your tasks to unlock your potential!
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300">Learn More</button>
            <button className="px-6 py-3 shadow-lg rounded-full font-semibold bg-white text-gray-800 hover:bg-gray-50">Contact Us</button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="rounded-md" src="/public/img/home-bg.jpeg" alt="Home Img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
