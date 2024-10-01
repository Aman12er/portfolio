import React, { useEffect, useState ,useRef} from 'react';


function Home() {
  const [welcomeleft, setwelcomeleft] = useState(false);
  const [welcomeup, setwelcomeup] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [maincontent, setmaincontent] = useState(false);
 

  

  useEffect(() => {
    // Show the initial welcome message after 0.5 second
    const timer1 = setTimeout(() => {
      setwelcomeleft(true);
    }, 500);



    // Set welcome up after 4 seconds
    const timer2 = setTimeout(() => {
      setwelcomeup(true);
    }, 4000);

    // Set main content to visible after 4.1 seconds
    const timer3 = setTimeout(() => {
      setmaincontent(true);
    }, 4100);

    // Hide the welcome message after it has moved up
    const timer4 = setTimeout(() => {
      setHidden(true);
    }, 5000);

    // Cleanup timers on component unmount



   
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
     
    };
  }, []);

  return (
    <div className="bg-black w-full h-screen">
      {/* Welcome Animation */}
      {!hidden && (
        <div
          className={`flex flex-col md:flex-row items-center justify-center text-white text-center transition-all duration-1000 ease-in-out h-full ${
            welcomeleft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          } ${welcomeup ? 'translate-y-full' : '-translate-y-0'}`}
        >
          <h1 className="text-6xl font-bold">WELCOME</h1>
          <p className="text-2xl font-bold md:pl-4 md:text-6xl">TO MY PORTFOLIO</p>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex flex-col absolute z-10 top-10 left-0 w-full md:flex-row h-full justify-center items-center transition-all duration-1000 ease-in-out ${
          maincontent ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-1/2 md:flex md:flex-col md:justify-center md:items-center ">
          <img
            className=" rounded-lg shadow-[0_4px_15px_rgba(255,255,255,0.6)]"
            src="/images/aman..png"
            height={300}
            width={300}
            alt="Logo"
          />
        </div>

        {/* Text and Social Links */}
        <div className="md:flex md:flex-col md:justify-center md:items-center md:w-1/2 ">
          <div className="intro text-white text-center m-8">
            <h1 className="text-4xl font-bold mb-4">
              Hi, I am <span className="text-3xl uppercase">Aman Pathak</span>
            </h1>
            <p className="max-w-2xl mx-auto">
              <span className="text-bold text-2xl">
                A passionate developer crafting innovative web solutions with creativity and code.
              </span>
              <span className="hidden md:block md:pt-2">
                I’m a web developer skilled in HTML, CSS, JavaScript, React, and Python, with a passion for building
                innovative applications. Currently, I'm working on an AI-powered animation creator app, merging creativity with technology. I thrive on solving complex problems and delivering seamless, user-friendly solutions.
              </span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="icons flex space-x-4 justify-center mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100032110369758&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-4xl transition-transform transform hover:scale-110 px-4 hover:shadow-lg hover:shadow-gray-900"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/amanpathak7018?t=5Wfr1NwkIRcXjbaIvt41Wg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-4xl transition-transform transform hover:scale-110 px-4 hover:shadow-lg hover:shadow-gray-900"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/pathak_aman_900?igsh=MWQ0bDVpaTRtdDc2cg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform transform hover:scale-110 px-2 hover:shadow-lg hover:shadow-gray-900"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com/@amanpathak-ik3vk?si=_u39Rz11CYXnR6E3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform transform px-2 hover:scale-110 hover:shadow-lg hover:shadow-gray-900"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aman-pathak-63bb152b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform transform px-2 hover:scale-110 hover:shadow-lg hover:shadow-gray-900"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
 </div>
    


  );



}


export default Home;
