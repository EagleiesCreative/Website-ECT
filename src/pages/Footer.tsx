import React from 'react'

function Footer() {
  return (
    // Footer
    <footer className="w-full bg-[#020e2c] border-t border-slate-700 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-bold text-xl text-white">Logos</div>
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
  )
}

export default Footer