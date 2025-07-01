export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-bold text-xl">Logo</div>
          <ul className="hidden md:flex gap-8 text-slate-700 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
          <button className="ml-6 px-6 py-2 h-11 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Get Started</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 py-16">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" alt="Hero" className="w-full md:w-1/2 rounded-2xl object-cover h-80 md:h-[400px]" />
          <div className="flex-1 flex flex-col items-start gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Transforming Ideas into Stunning Visual Experiences</h1>
            <p className="text-slate-600 max-w-lg">At Eagles Creative, we deliver multimedia solutions to achieve exceptional outcomes. Our team blends creativity, technology, and strategy to bring your vision to life.</p>
            <div className="flex gap-4">
              <button className="px-6 py-2 h-11 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Get Started</button>
              <button className="px-6 py-2 h-11 rounded-md border border-blue-600 text-blue-600 bg-white font-medium hover:bg-blue-50 transition">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">Explore Our Core Services That Elevate Your Business to New Heights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl">🎬</div>
              <h3 className="font-bold text-lg">Digital Multimedia Production</h3>
              <p className="text-slate-600">Transform your vision into reality with our digital multimedia production.</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Discover →</a>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl">🔗</div>
              <h3 className="font-bold text-lg">System Integration</h3>
              <p className="text-slate-600">Seamless system integration for enhanced operational efficiency and performance.</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Discover →</a>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl">💡</div>
              <h3 className="font-bold text-lg">Digital Solutions</h3>
              <p className="text-slate-600">Innovative digital solutions tailored to your business needs.</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Discover →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="w-full bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
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
      <section className="w-full bg-white py-16" id="portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">Our Recent Projects</h2>
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
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Discover the key advantages of partnering with Eagles Creative for your projects.</h2>
            <ul className="list-disc pl-5 text-slate-600">
              <li>Innovative Solutions</li>
              <li>Customer Focused</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Advantages" className="rounded-xl w-full max-w-xs object-cover" />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full bg-slate-800 py-16">
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
      <section className="w-full bg-gradient-to-b from-slate-800 to-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Let's Create Something Amazing</h2>
          <p className="mb-6">Contact us to discuss your project and discover how we can bring your ideas to life.</p>
          <button className="bg-white text-slate-900 font-bold px-6 py-2 h-11 rounded-md hover:bg-slate-100 transition">Get in Touch</button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white py-16" id="contact">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6 text-slate-600">We'd love to hear from you! Reach out for inquiries or collaborations.</p>
            <ul className="space-y-2 text-slate-700">
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
      <section className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-200 rounded-xl h-64 flex items-center justify-center">
            <span className="text-slate-400 text-4xl">📍</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-bold text-xl">Logo</div>
            <div className="text-slate-500 text-sm">© 2025 Eagles Creative. All rights reserved.</div>
            <div className="flex gap-2 text-slate-400 text-xl">
              <a href="#"><span></span></a>
              <a href="#"><span></span></a>
              <a href="#"><span></span></a>
              <a href="#"><span></span></a>
            </div>
          </div>
          <ul className="flex gap-6 text-slate-600 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="flex flex-col items-center md:items-end gap-2 text-slate-500 text-xs">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Contact Author</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
