import { useEffect, useRef } from "react";
import Footer from "./pages/Footer";
import FadeContent from "./components/FadeContent";


export default function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  

  useEffect(() => {
    const navbar = navbarRef.current;
    const heroSection = heroRef.current;
    if (!navbar || !heroSection) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navbar.classList.add('bg-transparent', 'border-transparent');
          navbar.classList.remove('bg-[#02172a]', 'border-[#02172a]');
        } else {
          navbar.classList.remove('bg-transparent', 'border-transparent');
          navbar.classList.add('bg-[#02172a]', 'border-[#02172a]');
        }
      },
      {
        threshold: 0.2
      }
    );
    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);  

  return (
    <div className="scroll-smooth bg-[#02172a] min-h-screen flex flex-col transition-all snap-y snap-mandatory overflow-y-auto h-screen relative">
      {/* Grainy SVG Texture Overlay (covers all sections) */}
      <svg className="pointer-events-none fixed inset-0 w-full h-full z-20" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
          <button className="font-[Poppins] ml-8 px-6 py-2 h-11 rounded-xl  text-amber-50 border-1 border-white font-medium  hover:border-white hover:text-[#02172a] hover:bg-white transition">Get Started</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="w-full bg-[#020e2c] h-screen transition-all snap-start flex flex-col justify-center items-center relative px-4 sm:px-6" id="home">
        {/* Radial Glow Section */}
        {/* Radial gradient backgrounds - hide or resize on mobile */}
        <div className="circlePosition bg-[#104370] rounded-full absolute left-[10vw] top-1/3 -translate-y-1/2 z-0 w-[60vw] max-w-[700px] h-[120px] sm:h-[300px] blur-[60px] sm:blur-[90px] pointer-events-none" />
        <div className="circlePosition bg-[#030b1a] rounded-full absolute left-0 top-[20px] -translate-y-1/2 z-0 w-[80vw] max-w-[800px] h-[100px] sm:h-[300px] blur-[60px] sm:blur-[90px] pointer-events-none" />
        <div className="circlePosition bg-[#104370] rounded-full absolute right-[-20vw] top-[60vh] -translate-y-1/2 z-0 w-[80vw] max-w-[800px] h-[150px] sm:h-[400px] blur-[60px] sm:blur-[90px] pointer-events-none" />
        <div className="circlePosition bg-[#0d3d52] rounded-full absolute right-[-40vw] top-[25vh] -translate-y-1/2 z-0 w-[80vw] max-w-[800px] h-[100px] sm:h-[300px] blur-[60px] sm:blur-[90px] pointer-events-none" />
        <div className="circlePosition bg-[#104370] rounded-full absolute left-[10vw] bottom-[-40vh] -translate-y-1/2 z-0 w-[50vw] max-w-[500px] h-[400px] sm:h-[300px] blur-[60px] sm:blur-[90px] rotate-45 pointer-events-none" />

        <div className="flex-2 flex flex-col items-center gap-4 sm:gap-0 mt-10 sm:mt-26 py-20 sm:py-36 h-full relative z-10 w-full">
          {/* Heading Section H1 */}
          <div className="flex flex-col sm:flex-row w-full  items-start">
            <div className="relative px-2 sm:px-16 py-6 sm:p-10 sm:ml-28 mt-3 mb-4 items-center w-full sm:max-w-2/3 z-0">
              <h1 className="text-3xl sm:text-7xl font-thin text-white font-[Poppins] text-center sm:text-left leading-tight sm:leading-[1.1]">Transforming Ideas into Stunning Visual Experiences.</h1>
            </div>
  
          </div>
          {/* Subheading and Button Section */}
          <div className="flex flex-col sm:flex-row w-full items-center sm:items-start">
            <div className="hidden sm:block w-2/3"></div>
            <div className="flex flex-col mt-3 sm:pr-60 sm:pl-30 pb-6 sm:pb-12 pt-2 items-center sm:items-start gap-6 sm:gap-12 w-full sm:max-w-1/2 z-10 ">
              <p className="text-[#cbd5e1] font-[Poppins] font-thin text-base sm:text-md text-center sm:text-left">At Eagleies Creative, we deliver multimedia solutions to achieve exceptional outcomes. Our team blends creativity, technology, and strategy to bring your vision to life.</p>
              <div className="flex gap-2 items-center sm:items-start justify-center sm:justify-start w-full">
                <button className="px-6 h-10 rounded-2xl border border-white text-white font-[Poppins] font-extralight transition w-full sm:w-auto">Get to know us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full bg-[#020e2c] py-16 h-screen snap-start" id="portfolio">
        <div className="max-w-7xl mx-auto px-6 h-screen mt-20">
          <h2 className="text-lg text-white mb-7 font-thin font-[Poppins] text-center">Portfolio</h2>
          <h1 className="text-5xl font-thin font-[Poppins] text-center mb-7 text-white">Our Recent Projects</h1>
          <p className="text-white font-[Lato] text-lg font-light text-center mb-10">Explore our innovative solutions and creative endeavors.</p>
          <div className="grid md:grid-cols-1 gap-8">
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
            <div className="bg-slate-100 rounded-xl overflow-visible">
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

      <Footer />

    </div>
  );
}