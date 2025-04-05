import React, { useState, useEffect } from 'react';
import { Hexagon, Code, Users, Zap, Shield, Database, Layout, Cpu } from 'lucide-react';

const BeeAnimation = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveInPattern = () => {
      const time = Date.now() / 1000;
      const newX = 50 + Math.sin(time) * 30;
      const newY = 50 + Math.cos(time * 0.5) * 20;
      setPosition({ x: newX, y: newY });
      setRotation(Math.sin(time) * 15);
    };

    const interval = setInterval(moveInPattern, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="fixed z-50 pointer-events-none"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`, 
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <svg width="40" height="40" viewBox="0 0 100 100" className={`transform ${hovering ? 'scale-110' : 'scale-100'}`}>
        {/* Body */}
        <ellipse cx="50" cy="50" rx="30" ry="20" fill="#FFD700" />
        <ellipse cx="50" cy="50" rx="20" ry="15" fill="#000000" opacity="0.2" />
        
        {/* Stripes */}
        <path d="M40 40 Q50 50 40 60" stroke="black" strokeWidth="4" fill="none" />
        <path d="M50 35 Q60 50 50 65" stroke="black" strokeWidth="4" fill="none" />
        
        {/* Wings */}
        <g className="animate-pulse">
          <ellipse cx="30" cy="40" rx="15" ry="10" fill="rgba(255,255,255,0.8)" transform="rotate(-30 30 40)" />
          <ellipse cx="30" cy="60" rx="15" ry="10" fill="rgba(255,255,255,0.8)" transform="rotate(30 30 60)" />
        </g>
        
        {/* Eyes */}
        <circle cx="65" cy="45" r="3" fill="black" />
        <circle cx="65" cy="55" r="3" fill="black" />
        
        {/* Smile */}
        <path d="M70 50 Q72 52 70 54" stroke="black" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

const AuraWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [beeMessage, setBeeMessage] = useState('');
  
  const teams = [
    { name: "Unity Builders", role: "Collaboration", icon: <Users className="w-6 h-6" />, 
      description: "Fostering seamless teamwork and cross-functional collaboration across all projects" },
    { name: "Knowledge Sharers", role: "Learning", icon: <Code className="w-6 h-6" />,
      description: "Promoting continuous learning and open knowledge sharing within the team" },
    { name: "Quality Champions", role: "Excellence", icon: <Shield className="w-6 h-6" />,
      description: "Maintaining high standards through code reviews and best practices" },
    { name: "Innovation Catalysts", role: "Growth", icon: <Cpu className="w-6 h-6" />,
      description: "Exploring new technologies and encouraging creative solutions" },
    { name: "Agile Adventurers", role: "Adaptability", icon: <Zap className="w-6 h-6" />,
      description: "Embracing change and iterating rapidly to deliver value" },
    { name: "Support Pillars", role: "Mentorship", icon: <Layout className="w-6 h-6" />,
      description: "Supporting team growth through mentorship and guidance" },
    { name: "Impact Drivers", role: "Purpose", icon: <Database className="w-6 h-6" />,
      description: "Creating meaningful solutions that make a difference" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <BeeAnimation />
      
      {beeMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full z-50 animate-bounce">
          {beeMessage}
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm fixed w-full z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Hexagon className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-500">
                Aura-7F
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Principles', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setBeeMessage(`Buzzing to ${item}!`);
                    setTimeout(() => setBeeMessage(''), 2000);
                  }}
                  className={`text-sm uppercase tracking-wider hover:text-yellow-400 transition-colors
                    ${activeSection === item.toLowerCase() ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
              <Hexagon className="w-24 h-24 text-black/30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-full blur-xl" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-500">
            Together We Build Tomorrow's Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            United by passion, driven by purpose. We're a team of developers committed to crafting exceptional software through collaboration and innovation.
          </p>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-yellow-400/50 transition-colors"
                onMouseEnter={() => setBeeMessage(`Buzz! ${team.name} is essential!`)}
                onMouseLeave={() => setBeeMessage('')}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-yellow-400/10 rounded-lg">
                    {team.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{team.name}</h3>
                    <p className="text-sm text-gray-400">{team.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Team Dynamics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "Collaboration" },
              { value: "24/7", label: "Support" },
              { value: "90+", label: "Projects Delivered" },
              { value: "∞", label: "Learning & Growth" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
                onMouseEnter={() => setBeeMessage(`Amazing ${stat.label}!`)}
                onMouseLeave={() => setBeeMessage('')}
              >
                <div className="text-2xl font-bold mb-2 text-yellow-400">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Hexagon className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold">Aura-7F</span>
          </div>
          <p className="text-gray-400">© 2024 Aura-7F. Stronger Together.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuraWebsite;
