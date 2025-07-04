import { useEffect, useRef } from "react";

export default function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null); // Use a ref for the navbar too

  useEffect(() => {
    const navbar = navbarRef.current; // Get the navbar from its ref
    const heroSection = heroRef.current; // Get the hero section from its ref

    const handleScroll = () => {
      if (!navbar || !heroSection) return;

      // Calculate the point where the navbar should change.
      // This is the bottom of the hero section relative to the top of the document.
      // We add a small offset (e.g., 20px) to make the transition feel smoother
      // or to ensure it changes right after the hero section is left.
      const heroBottomOffset = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollThreshold = heroBottomOffset - navbar.offsetHeight - 1; // Adjust based on navbar height, and slightly before it leaves the screen

      // When the user has scrolled past the bottom of the hero section
      if (window.scrollY > scrollThreshold) {
        navbar.classList.remove('bg-transparent', 'border-transparent');
        navbar.classList.add('!bg-[#020e2c]', '!border-[#020e2c]');
      } else {
        // When the user is at the top or still within the hero section
        navbar.classList.add('bg-transparent', 'border-transparent');
        navbar.classList.remove('!bg-[#020e2c]', '!border-[#020e2c]');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ensure correct state on mount (e.g., if page loads scrolled)

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="bg-[#02172a] min-h-screen flex flex-col transition-all snap-y snap-mandatory overflow-y-auto h-screen relative">
      {/* Grainy SVG Texture Overlay */}
      <svg className="pointer-events-none fixed inset-0 w-full h-full z-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15"/>
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" fill="#000" fillOpacity="0.08"/>
      </svg>

      {/* Navbar - Pass the ref here */}
      <header id="navbar" ref={navbarRef} className="w-full bg-transparent border-b border-transparent sticky top-0 z-30 transition-colors duration-300">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-bold text-white text-xl">Logo</div>
          <ul className="hidden md:flex gap-8 text-white font-[Poppins] font-medium">
            <li><a href="#home" className="hover:text-slate-400">Home</a></li>
            <li><a href="#about" className="hover:text-slate-400">About Us</a></li>
            <li><a href="#services" className="hover:text-slate-400">Services</a></li>
            <li><a href="#portfolio" className="hover:text-slate-400">Portfolio</a></li>
          </ul>
          <button className="font-[Poppins] ml-8 px-6 py-2 h-11 rounded-xl bg-white text-black font-medium hover:border-1 hover:border-white hover:text-white hover:bg-black transition">Get Started</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="w-full bg-[#020e2c] h-screen transition-all snap-start" id="home">
        {/* Radial Glow Section */}
        {/* Radial gradient background behind h1 */}
        <div className="circlePosition bg-[#104370] rounded-[100%] absolute left-[100px] top-1/2 -translate-y-1/2 z-0 w-[700px] h-[300px] blur-[90px] pointer-events-none">
        </div>
        {/* Radial gradient background behind nav */}
        <div className="circlePosition bg-[#030b1a] rounded-[100%] absolute left-[0px] top-[20px] -translate-y-1/2 z-0 w-[800px] h-[300px] blur-[90px] pointer-events-none">
        </div>
        {/* Radial gradient background behind nav */}
        <div className="circlePosition bg-[#104370] rounded-[100%] absolute right-[-200px] top-[800px] -translate-y-1/2 z-0 w-[800px] h-[400px] blur-[90px] pointer-events-none">
        </div>
        {/* Radial gradient background behind nav */}
        <div className="circlePosition bg-[#0d3d52] rounded-[100%] absolute right-[-400px] top-[200px] -translate-y-1/2 z-0 w-[800px] h-[300px] blur-[90px] pointer-events-none">
        </div>

      
        <div className="flex-2 flex flex-nowrap flex-col items-center gap-0 mt-26 py-36 h-screen relative">
          {/* Heading Section H1 */}
          <div className="flex flex-row flex-nowrap ">
          <div className="relative px-16 p-10 ml-28 mt-3 mb-4 items-center max-w-2/3 z-10 ">
            <h1 className="text-7xl font-thin text-white font-[Poppins]">Transforming Ideas into Stunning Visual Experiences.</h1>
          </div>
          </div>
          {/* Heading Section H1 */}
          <div className="flex flex-row flex-nowrap">
            <div className="w-2/3"></div>
          <div className="flex flex-col mt-3 pr-60 pl-30 pb-12 pt-2 items-start gap-12 max-w-1/2 z-10 ">
            <p className="text-[#cbd5e1] font-[Poppins] font-thin text-md">At Eagleies Creative, we deliver multimedia solutions to achieve exceptional outcomes. Our team blends creativity, technology, and strategy to bring your vision to life.</p>
            <div className="flex gap-2 items-start">
              <button className="px-6   h-10 rounded-2xl border-1 border-white  text-white font-[Poppins] font-extralight transition">Get to know us</button>
            </div>
            </div>
          </div>
          
        </div>
        
      </section>

      {/* Services Overview */}
      <section className="w-full bg-[#020e2c] border-b border-slate-200 py-12 h-screen snap-start" id="services">
        <div className="max-w-7xl mx-auto px-6 h-screen">
          <h2 className="text-2xl font-semibold text-center mb-10 text-white">Explore Our Core Services That Elevate Your Business to New Heights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-4 text-white">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl">🎬</div>
              <h3 className="font-bold text-lg">Digital Multimedia Production</h3>
              <p className="text-slate-200">Transform your vision into reality with our digital multimedia production.</p>
              <a href="#" className="text-blue-400 font-medium hover:underline">Discover →</a>
            </div>
            <div className="flex flex-col items-center text-center gap-4 text-white">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl">🔗</div>
              <h3 className="font-bold text-lg">System Integration</h3>
              <p className="text-slate-200">Seamless system integration for enhanced operational efficiency and performance.</p>
              <a href="#" className="text-blue-400 font-medium hover:underline">Discover →</a>
            </div>
            <div className="flex flex-col items-center text-center gap-4 text-white">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl">💡</div>
              <h3 className="font-bold text-lg">Digital Solutions</h3>
              <p className="text-slate-200">Innovative digital solutions tailored to your business needs.</p>
              <a href="#" className="text-blue-400 font-medium hover:underline">Discover →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="w-full bg-[#020e2c] py-16 h-screen snap-start">
        <div className=" mx-auto px-6">
          <h2 className="text-2xl font-semibold text-white mb-10">Explore Our Comprehensive Service Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-white font-bold text-lg">Multimedia Systems for Engaging Experiences</div>
              <p className="text-slate-300">We create multimedia systems to deliver engaging and interactive experiences for your audience.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white font-bold text-lg">Unforgettable Events Tailored to Your Vision</div>
              <p className="text-slate-300">Our event production team ensures your message is delivered with impact and creativity.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white font-bold text-lg">Creative Content Creation That Resonates</div>
              <p className="text-slate-300">We craft content that resonates with your audience and strengthens your brand.</p>
            </div>
          </div>
          <button className="mt-8 px-6 py-2 h-11 rounded-md border border-white text-white bg-transparent font-medium hover:bg-white hover:text-slate-900 transition">Learn More</button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full bg-[#020e2c] py-16 h-screen snap-start" id="portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10 text-white">Our Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-100 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Project 1" className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="font-bold text-lg mb-2">Digital Transformation</div>
                <div className="flex gap-2 mb-2">
                  <span className="bg-slate-200 rounded px-2 py-1 text-xs">Digital</span>
                  <span className="bg-slate-200 rounded px-2 py-1 text-xs">Creative</span>
                  <span className="bg-slate-200 rounded px-2 py-1 text-xs">Event</span>
                </div>
                <p className="text-slate-600 text-sm">This project showcases our expertise in multimedia integration. Discover how we transformed client experiences.</p>
                <button className="mt-4 px-6 py-2 h-11 rounded-md bg-transparent text-blue-600 font-medium hover:bg-blue-50 transition">View</button>
              </div>
            </div>
            <div className="bg-slate-100 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Project 2" className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="font-bold text-lg mb-2">Event Production</div>
                <div className="flex gap-2 mb-2">
                  <span className="bg-slate-200 rounded px-2 py-1 text-xs">Event</span>
                  <span className="bg-slate-200 rounded px-2 py-1 text-xs">Production</span>
                  <span className="bg-slate-200 rounded px-2 py-1 text-xs">Creative</span>
                </div>
                <p className="text-slate-600 text-sm">Our event production services bring ideas to life, delivering unique solutions and memorable experiences.</p>
                <button className="mt-4 px-6 py-2 h-11 rounded-md bg-transparent text-blue-600 font-medium hover:bg-blue-50 transition">View</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="w-full bg-[#020e2c] py-16 h-screen snap-start">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-white">Discover the key advantages of partnering with Eagles Creative for your projects.</h2>
            <ul className="list-disc pl-5 text-slate-300">
              <li>Innovative Solutions</li>
              <li>Customer Focused</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Advantages" className="rounded-xl w-full max-w-xs object-cover" />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full bg-[#020e2c] py-16 h-screen snap-start">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <div className="text-3xl mb-4">★★★★★</div>
          <blockquote className="italic mb-4">Taglines Creative transformed our vision into reality. Their attention to detail and knowledge surpasses our expectations!</blockquote>
          <div className="flex flex-col items-center gap-2">
            <div className="font-bold">A. Person</div>
            <div className="text-slate-300 text-sm">Webinar</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#020e2c] from-slate-800 to-slate-400 py-16 h-screen snap-start">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Let's Create Something Amazing</h2>
          <p className="mb-6">Contact us to discuss your project and discover how we can bring your ideas to life.</p>
          <button className="bg-white text-slate-900 font-bold px-6 py-2 h-11 rounded-md hover:bg-slate-100 transition">Get in Touch</button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-[#020e2c] py-16 h-screen snap-start" id="contact">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
            <p className="mb-6 text-slate-300">We'd love to hear from you! Reach out for inquiries or collaborations.</p>
            <ul className="space-y-2 text-slate-300">
              <li><span className="font-medium">Email:</span> info@eaglescreative.com</li>
              <li><span className="font-medium">Phone:</span> (021) 1234 5678</li>
              <li><span className="font-medium">Office:</span> Jl. Creative Lane, Jakarta, Indonesia</li>
            </ul>
          </div>
          <form className="bg-slate-100 rounded-xl p-8 flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-3 rounded border border-slate-300" />
            <input type="email" placeholder="Email" className="p-3 rounded border border-slate-300" />
            <textarea placeholder="Message" className="p-3 rounded border border-slate-300 min-h-[100px]" />
            <label className="flex items-center gap-2 text-slate-600 text-sm">
              <input type="checkbox" className="accent-blue-600" />
              Subscribe to our newsletter
            </label>
            <button type="submit" className="px-6 py-2 h-11 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Submit</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-[#020e2c] py-8 h-screen snap-start">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-200 rounded-xl h-64 flex items-center justify-center">
            <span className="text-slate-400 text-4xl">📍</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#020e2c] border-t border-slate-700 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-bold text-xl text-white">Logo</div>
            <div className="text-slate-400 text-sm">© 2025 Eagles Creative. All rights reserved.</div>
            <div className="flex gap-2 text-slate-400 text-xl">
              <a href="#" className="hover:text-white"><span></span></a> {/* Assuming these are icon placeholders */}
              <a href="#" className="hover:text-white"><span></span></a>
              <a href="#" className="hover:text-white"><span></span></a>
              <a href="#" className="hover:text-white"><span></span></a>
            </div>
          </div>
          <ul className="flex gap-6 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Portfolio</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
          <div className="flex flex-col items-center md:items-end gap-2 text-slate-400 text-xs">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Contact Author</div>
          </div>
        </div>
      </footer>
    </div>
  );
}