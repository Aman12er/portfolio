import React, { useState, useEffect, useRef } from 'react'; // Corrected to include useRef


const Project = () => {
  const projects = [
    {
      title: 'Hospital Management System',
      description: 'A window application developed using Python (Tkinter module) and MySQL. It includes functionalities like patient entry, staff entry, admin management, patient OPD system, and billing system.',
      images: [ '/images/hospitalmanagement2.png', '/images/hospitalmanagement3.png','/images/hospitalmanagement4.png'],
    },
    {
      title: 'Twitter Clone',
      description: 'A project created using HTML, Tailwind CSS for the frontend. It replicates features of the popular social media app Instagram, allowing users to post photos, follow others, and interact with posts.',
      images: ['/images/t1.png', '/images/t2.png', '/images/t3.png'],
    },
    
    {
      title: 'Farmer Management System',
      description: 'An eCommerce system built with PHP, aimed at supporting farmers. The system lacks a payment system but includes functionalities for managing product listings and orders.',
      images: ['/images/f1.png', '/images/f2.png', '/images/f3.png'],
    }
  ];
  
  const options = {
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  // State to track visibility of each video
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  // Refs for the video elements
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const [currentIndices, setCurrentIndices] = useState(Array(projects.length).fill(0));

  // Auto slide after 5 seconds for each project
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prevIndices) =>
        prevIndices.map((index, projectIndex) =>
          (index + 1) % projects[projectIndex].images.length
        )
      );
    }, 5000);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set visibility state based on which video is visible
            if (entry.target === ref1.current) setIsVisible1(true);
            if (entry.target === ref2.current) setIsVisible2(true);
            if (entry.target === ref3.current) setIsVisible3(true);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      }, options);
  
      // Start observing the video refs
      if (ref1.current) observer.observe(ref1.current);
      if (ref2.current) observer.observe(ref2.current);
      if (ref3.current) observer.observe(ref3.current);
  

      return () => {
        clearInterval(interval); // Clear the interval
        if (ref1.current) observer.unobserve(ref1.current);
        if (ref2.current) observer.unobserve(ref2.current);
        if (ref3.current) observer.unobserve(ref3.current);
      };
    }, [options]);

  const handleNextSlide = (projectIndex) => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((index, i) =>
        i === projectIndex ? (index + 1) % projects[projectIndex].images.length : index 
    
      )
    );
  };

  const handlePrevSlide = (projectIndex) => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((index, i) =>
        i === projectIndex
          ? index === 0
            ? projects[projectIndex].images.length - 1
            : index - 1
          : index
      )
    );
  };

  return (
    <div className="space-y-8 bg-black p-6 text-white"><h1 className='font-bold text-center text-3xl text-green-500 underline'>PROJECTS</h1>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className="image w-full h-auto overflow-hidden shadow-[5px_10px_30px_rgba(49,41,59,1)] md:shadow-none md:flex md:justify-between ">
          {/* Slider Container */}
          <div className="relative flex items-center justify-center md:w-1/2 rounded-lg  ">
            <button
              onClick={() => handlePrevSlide(projectIndex)}
              className="relative left-0 p-2 text-white bg-black bg-opacity-50 rounded-full"
            >
              &#10094;
            </button>
            <div className="w-3/4 h-auto overflow-hidden md:w-3/4 p-4  ">
              <div
                className="flex transition-transform duration-500 "
                style={{
                  transform: `translateX(-${currentIndices[projectIndex] * 100}%)`,
                }}
              >
                {project.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${project.title} images ${imgIndex + 1}`}
                    className="w-full h-auto md:h-1/4 object-cover p-4 rounded-lg
                    "
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => handleNextSlide(projectIndex)}
              className="relative right-0 p-2 text-white bg-black bg-opacity-50 rounded-full"
            >
              &#10095;
            </button>
          </div>

          {/* Project Description */}
          <div className="text-center mt-4 md:flex md:justify-center md:items-center md:flex-col md:align-center md:w-1/2 md:text-4xl p-8">
            <h3 className="text-lg font-semibold md:text-2xl ">{project.title}</h3>
            <p className="text-sm text-gray-400 md:text-xl">{project.description}</p>
          </div>
        </div>
      ))}

<h1 className='text-3xl text-green-500 underline font-bold text-center'>Videos of Projects</h1>

<div className="videoes md:flex md:flex  md:justify-center md:items-center">

  {/* Video Cards */}
  <div className='md:w-1/2'>
    <div
      ref={ref1}
      className={`p-4  md:flex md:flex-col md:justify-center md:items-center  my-4 rounded-lg  ${isVisible1 ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UwbMB_CRup0" // Replace with actual YouTube video ID
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-auto rounded-lg  md:w-1/2
        shadow-[0_0_15px_rgba(128,128,128,0.5),_0_0_30px_rgba(128,128,128,0.3),_0_0_50px_rgba(128,128,128,0.1)]"
      ></iframe>
      <h2 className='text-lg text-white underline font-semibold text-center pt-8 md:text-2xl'>Hospital Management System</h2>
    </div>

    <div
      ref={ref2}
      className={`p-4 shadow-md my-4 md:flex md:flex-col md:justify-center md:items-center rounded-lg ${isVisible2 ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UwbMB_CRup0
" // Replace with actual YouTube video ID
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-auto rounded-lg  md:w-1/2
        shadow-[0_0_15px_rgba(128,128,128,0.5),_0_0_30px_rgba(128,128,128,0.3),_0_0_50px_rgba(128,128,128,0.1)]"
      ></iframe>
      <h2 className='text-lg  underline font-semibold text-center pt-8 md:text-xl'>Twitter clone</h2>
    </div>
  </div>

  <div className='md:w-1/2'>
    <div
      ref={ref3}
      className={`p-4 shadow-md my-4 rounded-lg ${isVisible3 ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_rz1Y7FDxns
" // Replace with actual YouTube video ID
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-auto rounded-lg   shadow-[0_0_15px_rgba(128,128,128,0.5),_0_0_30px_rgba(128,128,128,0.3),_0_0_50px_rgba(128,128,128,0.1)]"
      ></iframe>
      <h2 className='text-lg md:text-2xl  underline font-semibold text-center pt-8'>Farmer Management System</h2>
    </div>
  </div>

  <style jsx>{`
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-slide-in {
      animation: slideIn 1s forwards; /* Adjust duration as needed */
    }
  `}</style>
</div>
    </div>
  );
};

export default Project;
