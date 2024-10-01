import React, { useEffect, useState, useRef } from 'react';

const skills = [
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 85 },
  { name: 'JavaScript', value: 80 },
  { name: 'React', value: 75 },
  { name: 'Python', value: 70 },
  { name: 'Django', value: 65 },
  { name: 'PHP', value: 60 },
  { name: 'communication', value: 85 },
  { name: 'problem solving', value: 75 },
];

function About() {
  const [intro, setintro]=useState(false)
  const [inView, setInView] = useState(false)
  const [skill, setskill] = useState(false)
  const sectionRef = useRef(null);

  // Function to handle percentage increase and circular progress bar
  useEffect(() => {
     setTimeout(() => {
      setintro(true);
    }, 10);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setInView(true);
        setTimeout(() => {
          setskill(true);
        }, 0);
      }
    }, { threshold: 0.1});

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-full w-full bg-black text-white px-4 ">
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="/images/aman..png"
          alt="Profile"
          className="w-32 h-32 rounded-full mt-4  shadow-[0_4px_30px_rgba(30,41,59,0.9)] md:w-52 md:h-52"
        />
        <div>
          <div className="text-2xl md:mt-4">
            Hi, I am 
            <span className="relative w-full text-3xl font-bold text-green-400 pl-4 md:mt-4">
              Aman Pathak
            </span>
          </div>
          <p className="text-gray-300 text-lg mt-2">
            Full-Stack Developer passionate about creating innovative web solutions.
          </p>
        </div>

       
          <section className={`flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-md mt-8 transition-all duration-1000 ease-in-out
           ${intro ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            About Me
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-full md:text-xl">
            <p className="text-2xl text-gray-300 mb-4">
              Hi, I'm <span className="font-semibold text-green-400">Aman Pathak</span>!
            </p>
            <p className="text-gray-300 mb-4">
              I am a passionate Full-Stack Developer with a strong educational background in engineering and technology. 
              My academic journey began at <strong className="text-white">Daya Shankar Senior Secondary School</strong>, where I completed my 
              <strong className="text-white"> 10th grade in 2018</strong> with an impressive <strong className="text-green-400">91% marks</strong>.
            </p>
            <p className="text-gray-300 mb-4">
              I pursued my <strong className="text-white">12th grade</strong>, achieving <strong className="text-green-400">89%</strong> in <strong className="text-white">2020</strong>.
            </p>
            <p className="text-gray-300 mb-4">
              I completed my <strong className="text-white">diploma in 2024</strong> from <strong className="text-white">Maharana Pratap Polytechnic</strong>, and I am currently pursuing my 
              <strong className="text-white"> B.Tech</strong> at <strong className="text-white">Government College Basti</strong>.
            </p>
          </div>
        </section>

        {/* Skills Section */}

        <section ref={sectionRef}>
        <div  className={`skills flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-md my-8 transition-all duration-1000 ease-in-out w-full max-w-lg md:max-w-full 
         ${skill ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-full'}`} >
          <h2 className="text-3xl font-bold text-center text-white mb-4">My Skills</h2>
          <div className="flex flex-col md:justify-center md:items-center  ">
            <div className="bg-slate-900 p-8 rounded-lg w-full md:w-full ">
              <h3 className="text-xl text-green-400 font-bold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-7 md:gap-20 md:text-xl md:font-bold">
                {skills.slice(0, 7).map((skill, index) => (
                  <Skill key={index} name={skill.name} value={inView ? skill.value : 0} />
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-8 mt-4 rounded-lg w-full md:w-1/2  ">
              <h3 className="text-xl text-green-400 font-bold mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-8 md:flex md:justify-center md:items-center ">
                {skills.slice(7).map((skill, index) => (
                  <Skill key={index} name={skill.name} value={inView ? skill.value : 0} />
                ))}
              </div>
            </div>
            </div>
          </div>
          </section>
      </div>
      
    </div>
  );
}

// Skill component to render the circular progress bar
function Skill({ name, value }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (value > 0) {
      let currentProgress = 0;
      const increment = setInterval(() => {
        currentProgress += 1;
        if (currentProgress >= value) {
          clearInterval(increment);
        }
        setProgress(currentProgress);
      }, 30);
    }
  }, [value]);

  const circleStyle = {
    strokeDasharray: `${2 * Math.PI * 50}`,
    strokeDashoffset: `${(1 - progress / 100) * 2 * Math.PI * 50}`,
  };

  return (
    <div className="text-center">
      <svg className="w-24 h-24" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#374151"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="green"
          strokeWidth="10"
          style={circleStyle}
          className="transition-all duration-500"
        />
      </svg>
      <div className="mt-2 text-green-400 text-2xl font-bold">{progress}%</div>
      <p className="text-gray-300">{name}</p>
    </div>
  );
}

export default About;
