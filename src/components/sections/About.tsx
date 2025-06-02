import React from 'react';
import { Code, Brain, Lightbulb, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="prose prose-invert max-w-none bg-black/80 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-white text-lg mb-6">
                I'm a Computer Science student at Mohan Babu University, specializing in full-stack development and AI solutions. With a strong foundation in modern web technologies, I focus on creating responsive and user-friendly applications.
              </p>
              <p className="text-white text-lg">
                I'm passionate about <span className="text-purple-400 font-semibold">solving real-world problems through code</span> and constantly exploring new technologies. Currently diving deep into <span className="text-purple-400 font-semibold">cloud computing</span>, <span className="text-purple-400 font-semibold">AI integration</span>, and <span className="text-purple-400 font-semibold">modern web frameworks</span>.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="card bg-black/80 backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <GraduationCap size={20} className="text-purple-500 mr-2" />
                  <h3 className="font-semibold text-white">Education</h3>
                </div>
                <p className="text-base text-gray-200">
                  B.Tech in Computer Science<br />
                  Mohan Babu University — 2025
                  CGPA-8.29
                </p>
              </div>
              
              <div className="card bg-black/80 backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <Lightbulb size={20} className="text-purple-500 mr-2" />
                  <h3 className="font-semibold text-white">Interests</h3>
                </div>
                <p className="text-base text-gray-200">
                  UI Design, Machine Learning, Cloud Computing
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-purple-500/30 mx-auto">
                <img 
                  src="/1000040829-01.jpeg"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 right-1/2 md:right-0 transform translate-x-1/2 md:translate-x-0 bg-black/80 backdrop-blur-md p-4 rounded-2xl">
                <div className="text-purple-500 font-bold">Computer Science (AIML&Frontend)Student</div>
                <div className="text-white text-sm">Mohan Babu University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;