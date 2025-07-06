import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
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

      {/* Services Overview */}
      <section ref={servicesRef} className="w-full bg-[#020e2c]  py-12 h-screen snap-start" id="services">
       
        <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
        <div className="mx-auto px-6 py-18 h-screen">
          <div className="mb-10 pt-16 px-90">
          <h2 className="text-5xl font-thin font-[Poppins] text-center  mb-10 text-white">Explore our Core Services that Elevate Your Business to New Heights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 w-full mt-20 py-8">
            <div className="flex flex-col items-center text-center gap-8 text-white px-16">
              <div className="rounded-full p-4 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="42" viewBox="0 0 39 42" fill="none">
                  <path d="M20.3473 24.4417L14.6048 30.1837C14.9558 30.7424 15.171 31.2805 15.2503 31.7982C15.3296 32.3155 15.3693 32.8829 15.3693 33.5002C15.3693 35.6589 14.6471 37.4605 13.2028 38.9052C11.7585 40.3495 9.95713 41.0717 7.79879 41.0717C5.64079 41.0717 3.84113 40.3497 2.39979 38.9057C0.95846 37.4614 0.237793 35.66 0.237793 33.5017C0.237793 31.3434 0.958126 29.5415 2.39879 28.0962C3.83913 26.6512 5.63863 25.9287 7.79729 25.9287C8.38396 25.9287 8.96246 26.01 9.53279 26.1727C10.1028 26.3354 10.6965 26.5754 11.3138 26.8927L17.0063 21.2002L11.2138 15.4077C10.6551 15.6584 10.0921 15.8317 9.52479 15.9277C8.95713 16.0237 8.38129 16.0717 7.79729 16.0717C5.63863 16.0717 3.83913 15.3497 2.39879 13.9057C0.958126 12.4614 0.237793 10.66 0.237793 8.50171C0.237793 6.34338 0.95796 4.54154 2.39829 3.09621C3.83863 1.65121 5.63779 0.928711 7.79579 0.928711C9.95413 0.928711 11.756 1.65088 13.2013 3.09521C14.6466 4.53988 15.3693 6.34154 15.3693 8.50021C15.3693 9.11754 15.3316 9.70154 15.2563 10.2522C15.181 10.8032 15.0138 11.3247 14.7548 11.8167L38.1433 35.2047C38.9416 36.003 39.125 36.9072 38.6933 37.9172C38.2613 38.9269 37.4825 39.4317 36.3568 39.4317C36.0358 39.4317 35.7236 39.3692 35.4203 39.2442C35.1173 39.1189 34.8485 38.936 34.6138 38.6957L20.3473 24.4417ZM26.4508 18.6502L22.9473 15.1587L34.6138 3.50471C34.8485 3.26438 35.1173 3.08154 35.4203 2.95621C35.7236 2.83121 36.0358 2.76871 36.3568 2.76871C37.4821 2.76871 38.2461 3.27988 38.6488 4.30221C39.0515 5.32488 38.8663 6.22271 38.0933 6.99571L26.4508 18.6502ZM7.79979 12.9287C9.04113 12.9287 10.0911 12.5004 10.9498 11.6437C11.8085 10.7874 12.2378 9.73871 12.2378 8.49771C12.2378 7.25671 11.8088 6.20888 10.9508 5.35421C10.0925 4.49921 9.04163 4.07171 7.79829 4.07171C6.55496 4.07171 5.50596 4.50004 4.65129 5.35671C3.79663 6.21304 3.36929 7.26171 3.36929 8.50271C3.36929 9.74371 3.79746 10.7915 4.65379 11.6462C5.51013 12.5012 6.55879 12.9287 7.79979 12.9287ZM20.4473 22.3537C20.77 22.3537 21.0428 22.242 21.2658 22.0187C21.4891 21.7954 21.6008 21.5225 21.6008 21.2002C21.6008 20.8779 21.4891 20.605 21.2658 20.3817C21.0428 20.1584 20.77 20.0467 20.4473 20.0467C20.125 20.0467 19.8521 20.1584 19.6288 20.3817C19.4058 20.605 19.2943 20.8779 19.2943 21.2002C19.2943 21.5225 19.4058 21.7954 19.6288 22.0187C19.8521 22.242 20.125 22.3537 20.4473 22.3537ZM7.79979 37.9287C9.04113 37.9287 10.0911 37.5004 10.9498 36.6437C11.8085 35.7874 12.2378 34.7387 12.2378 33.4977C12.2378 32.2567 11.8088 31.2089 10.9508 30.3542C10.0925 29.4992 9.04163 29.0717 7.79829 29.0717C6.55496 29.0717 5.50596 29.5 4.65129 30.3567C3.79663 31.213 3.36929 32.2617 3.36929 33.5027C3.36929 34.7437 3.79746 35.7915 4.65379 36.6462C5.51013 37.5012 6.55879 37.9287 7.79979 37.9287Z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-2xl font-[Poppins] font-thin">Transform Your Vision into Reality with Our Expert Multimedia Production</h3>
              <p className="text-slate-200 font-[Lato] font-regular">We create stunning visual content that captivates and engages your audience.</p>
              <a href="#" className="text-white font-medium hover:underline">Discover →</a>
            </div>
            <div className="flex flex-col items-center text-center gap-8 text-white px-16">
              <div className=" rounded-full p-4 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="42" viewBox="0 0 38 42" fill="none">
                  <path d="M11.3602 23.024L15.3717 19.012C15.664 18.72 15.8122 18.3656 15.8162 17.949C15.8198 17.5323 15.6802 17.174 15.3972 16.874C15.0882 16.574 14.724 16.424 14.3047 16.424C13.885 16.424 13.524 16.574 13.2217 16.874L8.27717 21.8185C7.93751 22.1691 7.76767 22.5735 7.76767 23.0315C7.76767 23.4895 7.93751 23.8888 8.27717 24.2295L13.2217 29.174C13.5217 29.474 13.88 29.624 14.2967 29.624C14.7133 29.624 15.0783 29.474 15.3917 29.174C15.6783 28.874 15.8198 28.524 15.8162 28.124C15.8122 27.724 15.6602 27.374 15.3602 27.074L11.3602 23.024ZM26.6902 23.024L22.6287 27.086C22.3363 27.378 22.1882 27.724 22.1842 28.124C22.1805 28.524 22.3202 28.874 22.6032 29.174C22.9122 29.474 23.2763 29.624 23.6957 29.624C24.1153 29.624 24.4763 29.474 24.7787 29.174L29.7732 24.2295C30.1128 23.8858 30.2827 23.485 30.2827 23.027C30.2827 22.569 30.1128 22.1661 29.7732 21.8185L24.8287 16.874C24.5287 16.574 24.1787 16.424 23.7787 16.424C23.3787 16.424 23.022 16.574 22.7087 16.874C22.422 17.174 22.2805 17.5343 22.2842 17.955C22.2882 18.3756 22.4402 18.732 22.7402 19.024L26.6902 23.024ZM4.10767 41.299C3.17101 41.299 2.36901 40.9655 1.70167 40.2985C1.03467 39.6311 0.701172 38.8291 0.701172 37.8925V8.10746C0.701172 7.16746 1.03467 6.3628 1.70167 5.69346C2.36901 5.0238 3.17101 4.68896 4.10767 4.68896H14.0587C14.2733 3.5223 14.8427 2.56396 15.7667 1.81396C16.6903 1.06396 17.7682 0.688965 19.0002 0.688965C20.2322 0.688965 21.31 1.06396 22.2337 1.81396C23.1577 2.56396 23.727 3.5223 23.9417 4.68896H33.8927C34.8327 4.68896 35.6373 5.0238 36.3067 5.69346C36.9763 6.3628 37.3112 7.16746 37.3112 8.10746V37.8925C37.3112 38.8291 36.9763 39.6311 36.3067 40.2985C35.6373 40.9655 34.8327 41.299 33.8927 41.299H4.10767ZM4.10767 37.8925H33.8927V8.10746H4.10767V37.8925ZM19.0002 7.22146C19.4945 7.22146 19.9217 7.04146 20.2817 6.68146C20.6417 6.32146 20.8217 5.8943 20.8217 5.39996C20.8217 4.90563 20.6417 4.47846 20.2817 4.11846C19.9217 3.75846 19.4945 3.57846 19.0002 3.57846C18.5058 3.57846 18.0787 3.75846 17.7187 4.11846C17.3587 4.47846 17.1787 4.90563 17.1787 5.39996C17.1787 5.8943 17.3587 6.32146 17.7187 6.68146C18.0787 7.04146 18.5058 7.22146 19.0002 7.22146Z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-2xl font-[Poppins] font-thin">Seamless System Integration for Enhanced Operational Efficiency and Performance</h3>
              <p className="text-slate-200">Our solutions ensure that all your systems work together flawlessly.</p>
              <a href="#" className="text-white font-medium hover:underline">Discover →</a>
            </div>
            <div className="flex flex-col items-center text-center gap-8 text-white px-16">
              <div className=" rounded-full p-4 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                  <path d="M6.67816 18.562L1.22566 15.474C0.960997 15.3343 0.751831 15.1328 0.598164 14.8695C0.444831 14.6065 0.368164 14.3188 0.368164 14.0065V7.75446C0.368164 7.44213 0.444831 7.15446 0.598164 6.89146C0.751831 6.62813 0.960997 6.42663 1.22566 6.28696L6.67816 3.21096C6.9325 3.06163 7.21166 2.98696 7.51566 2.98696C7.81966 2.98696 8.10416 3.06163 8.36916 3.21096L13.8337 6.28696C14.0903 6.42663 14.2975 6.62813 14.4552 6.89146C14.6125 7.15446 14.6912 7.44213 14.6912 7.75446V14.0065C14.6912 14.3188 14.6125 14.6065 14.4552 14.8695C14.2975 15.1328 14.0903 15.3343 13.8337 15.474L8.36916 18.562C8.11483 18.7113 7.83566 18.786 7.53166 18.786C7.22766 18.786 6.94316 18.7113 6.67816 18.562ZM7.52366 15.239L11.3682 13.035V8.72596L7.52366 6.52146L3.69116 8.72596V13.035L7.52366 15.239ZM29.4782 19.4945V15.674L35.2747 19.0545C35.8137 19.3731 36.2323 19.7883 36.5307 20.3C36.829 20.8116 36.9782 21.366 36.9782 21.963V32.276C36.9782 32.8653 36.829 33.4176 36.5307 33.933C36.2323 34.4486 35.8137 34.862 35.2747 35.173L26.5257 40.2915C25.9843 40.5978 25.41 40.751 24.8027 40.751C24.195 40.751 23.626 40.5978 23.0957 40.2915L14.3467 35.173C13.8077 34.862 13.391 34.4486 13.0967 33.933C12.8023 33.4176 12.6552 32.8653 12.6552 32.276V21.963C12.6552 21.366 12.8023 20.8116 13.0967 20.3C13.391 19.7883 13.8077 19.3731 14.3467 19.0545L20.1552 15.674V19.4945L15.9782 21.9535V32.3115L24.8107 37.4285L33.6552 32.3115V21.9535L29.4782 19.4945ZM26.4782 12.012V22.3565C26.4782 22.8215 26.3157 23.2136 25.9907 23.533C25.6653 23.8523 25.269 24.012 24.8017 24.012C24.3343 24.012 23.9432 23.8523 23.6282 23.533C23.3128 23.2136 23.1552 22.8215 23.1552 22.3565V2.40446C23.1552 1.92346 23.3188 1.5173 23.6462 1.18596C23.9735 0.854629 24.3777 0.688965 24.8587 0.688965H37.8457C38.5087 0.688965 39.0058 0.993463 39.3372 1.60246C39.6688 2.2118 39.644 2.7983 39.2627 3.36196L37.8922 5.38696C37.7015 5.67363 37.6062 5.9938 37.6062 6.34746C37.6062 6.70146 37.7015 7.02763 37.8922 7.32596L39.2627 9.33896C39.644 9.91063 39.6688 10.4991 39.3372 11.1045C39.0058 11.7095 38.5087 12.012 37.8457 12.012H26.4782Z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-2xl font-[Poppins] font-thin">Innovative Digital Solutions Tailored to Meet Your Unique Business Needs</h3>
              <p className="text-slate-200">From strategy to execution, we provide comprehensive digital services for growth.</p>
              <a href="#" className="text-white font-medium hover:underline">Discover →</a>
            </div>
          </div>
        </div>
        </FadeContent>
      </section>

      {/* Services Detailed */}
      <section className="w-full bg-[#020e2c] py-16 h-screen snap-start">
        
        <div className=" mx-auto px-24 h-screen mt-20">
          <h2 className="text-xl text-white mb-5 font-thin font-[Poppins]">Services</h2>
          <h1 className="text-5xl font-thin font-[Poppins] text-white mb-8 max-w-1/2">Explore Our Comprehensive Service Offerings</h1>
          <p className="text-white font-[Lato] font-regular max-w-1/2 mb-24">At Eagleies Creative, we provide a range of services tailored to meet your multimedia needs. Our expertise ensures that every project is executed with precision and creativity.</p>
          {/* Services Detailed | Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="46" viewBox="0 0 42 46" fill="none">
                  <path d="M10.4787 15.1283C10.6627 15.3107 10.8638 15.4018 11.0822 15.4018C11.3008 15.4018 11.5013 15.3107 11.6837 15.1283L14.2287 12.6213C14.411 12.4497 14.5022 12.2452 14.5022 12.0078C14.5022 11.7705 14.411 11.5607 14.2287 11.3783L11.6837 8.87132C11.4997 8.68899 11.2985 8.59782 11.0802 8.59782C10.8615 8.59782 10.661 8.68899 10.4787 8.87132L7.93367 11.3783C7.75134 11.55 7.66017 11.7545 7.66017 11.9918C7.66017 12.2292 7.75134 12.439 7.93367 12.6213L10.4787 15.1283ZM4.10767 27.2628C3.18767 27.2628 2.39001 26.9238 1.71467 26.2458C1.03901 25.5682 0.701172 24.7677 0.701172 23.8443V4.05982C0.701172 3.13982 1.03901 2.34199 1.71467 1.66632C2.39001 0.990987 3.18767 0.65332 4.10767 0.65332H37.8927C38.816 0.65332 39.6165 0.990987 40.2942 1.66632C40.9722 2.34199 41.3112 3.13982 41.3112 4.05982V23.8443C41.3112 24.7677 40.9722 25.5682 40.2942 26.2458C39.6165 26.9238 38.816 27.2628 37.8927 27.2628H32.7112C32.2258 27.2628 31.827 27.0983 31.5147 26.7693C31.202 26.4403 31.0457 26.0322 31.0457 25.5448C31.0457 25.0575 31.2093 24.6523 31.5367 24.3293C31.864 24.006 32.2682 23.8443 32.7492 23.8443H37.8927V4.05982H4.10767V23.8443H9.25117C9.73217 23.8443 10.1363 24.0088 10.4637 24.3378C10.791 24.6668 10.9547 25.075 10.9547 25.5623C10.9547 26.0497 10.791 26.455 10.4637 26.7783C10.1363 27.1013 9.73217 27.2628 9.25117 27.2628H4.10767ZM30.0032 12.7018C30.7678 12.7018 31.4168 12.4342 31.9502 11.8988C32.4835 11.3638 32.7502 10.7138 32.7502 9.94882C32.7502 9.19215 32.4825 8.54515 31.9472 8.00782C31.4118 7.47049 30.7618 7.20182 29.9972 7.20182C29.2325 7.20182 28.5835 7.47149 28.0502 8.01082C27.5168 8.55015 27.2502 9.19815 27.2502 9.95482C27.2502 10.7195 27.5178 11.3685 28.0532 11.9018C28.5885 12.4352 29.2385 12.7018 30.0032 12.7018ZM8.54817 45.3583C8.06717 45.3583 7.66301 45.1947 7.33567 44.8673C7.00834 44.54 6.84467 44.136 6.84467 43.6553V40.9913C6.84467 39.7927 7.17667 38.6813 7.84067 37.6573C8.50467 36.6333 9.38401 35.8635 10.4787 35.3478C12.1243 34.5812 13.8347 34.0042 15.6097 33.6168C17.3847 33.2295 19.1815 33.0358 21.0002 33.0358C22.8188 33.0358 24.6157 33.2295 26.3907 33.6168C28.1657 34.0042 29.876 34.5812 31.5217 35.3478C32.6173 35.8605 33.4988 36.6295 34.1662 37.6548C34.8338 38.6805 35.1677 39.7927 35.1677 40.9913V43.6553C35.1677 44.136 35.0017 44.54 34.6697 44.8673C34.338 45.1947 33.9322 45.3583 33.4522 45.3583H8.54817ZM10.2152 42.0358H31.7852V40.8713C31.6975 40.308 31.461 39.7875 31.0757 39.3098C30.6907 38.8322 30.1988 38.464 29.6002 38.2053C28.2465 37.6023 26.8503 37.1438 25.4117 36.8298C23.973 36.5155 22.502 36.3583 20.9987 36.3583C19.4953 36.3583 18.0248 36.5155 16.5872 36.8298C15.1495 37.1438 13.7538 37.6023 12.4002 38.2053C11.8015 38.464 11.3097 38.8322 10.9247 39.3098C10.5393 39.7875 10.3028 40.308 10.2152 40.8713V42.0358ZM21.0032 31.0358C19.0202 31.0358 17.3313 30.3372 15.9367 28.9398C14.542 27.5428 13.8447 25.8523 13.8447 23.8683C13.8447 21.895 14.5422 20.2092 15.9372 18.8108C17.3322 17.4122 19.02 16.7128 21.0007 16.7128C22.9813 16.7128 24.671 17.4122 26.0697 18.8108C27.4683 20.2092 28.1677 21.897 28.1677 23.8743C28.1677 25.8513 27.4693 27.5392 26.0727 28.9378C24.676 30.3365 22.9862 31.0358 21.0032 31.0358ZM20.9882 27.7128C22.0602 27.7128 22.971 27.342 23.7207 26.6003C24.47 25.8587 24.8447 24.9538 24.8447 23.8858C24.8447 22.8178 24.4738 21.9092 23.7322 21.1598C22.9905 20.4105 22.0838 20.0358 21.0122 20.0358C19.9402 20.0358 19.0313 20.4073 18.2857 21.1503C17.5403 21.893 17.1677 22.795 17.1677 23.8563C17.1677 24.9283 17.5365 25.8392 18.2742 26.5888C19.0118 27.3382 19.9165 27.7128 20.9882 27.7128Z" fill="white"/>
                </svg>
              </div>
              <h1 className="text-white font-thin font-[Poppins] text-4xl my-6">Multimedia Systems for Engaging Experiences</h1>
              <p className="text-white font-[Lato] font-light">We create multimedia systems to deliver engaging and interactive experiences for your audience.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" viewBox="0 0 37 42" fill="none">
                  <path d="M24.5077 34C23.147 34 22 33.5303 21.0667 32.591C20.1333 31.6513 19.6667 30.5013 19.6667 29.141C19.6667 27.7803 20.1363 26.6333 21.0757 25.7C22.0153 24.7666 23.1653 24.3 24.5257 24.3C25.8863 24.3 27.0333 24.7696 27.9667 25.709C28.9 26.6486 29.3667 27.7986 29.3667 29.159C29.3667 30.5196 28.897 31.6666 27.9577 32.6C27.018 33.5333 25.868 34 24.5077 34ZM3.77418 41.299C2.85418 41.299 2.05651 40.9611 1.38118 40.2855C0.705509 39.6101 0.367676 38.8125 0.367676 37.8925V7.10746C0.367676 6.18413 0.705509 5.38363 1.38118 4.70596C2.05651 4.02796 2.85418 3.68896 3.77418 3.68896H6.91668V2.39646C6.91668 1.91813 7.08268 1.51396 7.41468 1.18396C7.74701 0.853963 8.15101 0.688965 8.62668 0.688965C9.11634 0.688965 9.52934 0.853963 9.86568 1.18396C10.202 1.51396 10.3702 1.91813 10.3702 2.39646V3.68896H26.9632V2.39646C26.9632 1.91813 27.1293 1.51396 27.4617 1.18396C27.7937 0.853963 28.1975 0.688965 28.6732 0.688965C29.1632 0.688965 29.5762 0.853963 29.9122 1.18396C30.2485 1.51396 30.4167 1.91813 30.4167 2.39646V3.68896H33.5592C34.4825 3.68896 35.283 4.02796 35.9607 4.70596C36.6387 5.38363 36.9777 6.18413 36.9777 7.10746V37.8925C36.9777 38.8125 36.6387 39.6101 35.9607 40.2855C35.283 40.9611 34.4825 41.299 33.5592 41.299H3.77418ZM3.77418 37.8925H33.5592V16.5H3.77418V37.8925ZM3.77418 13.5H33.5592V7.10746H3.77418V13.5Z" fill="white"/>
                </svg>
              </div>
              <h1 className="text-white font-thin font-[Poppins] text-4xl my-6">Unforgettable Events Tailored to Your Vision</h1>
              <p className="text-white font-[Lato] font-light">Our event production team ensures your message is delivered with impact and creativity.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="42" viewBox="0 0 39 42" fill="none">
                  <path d="M20.3473 24.4417L14.6048 30.1837C14.9558 30.7424 15.171 31.2805 15.2503 31.7982C15.3296 32.3155 15.3693 32.8829 15.3693 33.5002C15.3693 35.6589 14.6471 37.4605 13.2028 38.9052C11.7585 40.3495 9.95713 41.0717 7.79879 41.0717C5.64079 41.0717 3.84113 40.3497 2.39979 38.9057C0.95846 37.4614 0.237793 35.66 0.237793 33.5017C0.237793 31.3434 0.958126 29.5415 2.39879 28.0962C3.83913 26.6512 5.63863 25.9287 7.79729 25.9287C8.38396 25.9287 8.96246 26.01 9.53279 26.1727C10.1028 26.3354 10.6965 26.5754 11.3138 26.8927L17.0063 21.2002L11.2138 15.4077C10.6551 15.6584 10.0921 15.8317 9.52479 15.9277C8.95713 16.0237 8.38129 16.0717 7.79729 16.0717C5.63863 16.0717 3.83913 15.3497 2.39879 13.9057C0.958126 12.4614 0.237793 10.66 0.237793 8.50171C0.237793 6.34338 0.95796 4.54154 2.39829 3.09621C3.83863 1.65121 5.63779 0.928711 7.79579 0.928711C9.95413 0.928711 11.756 1.65088 13.2013 3.09521C14.6466 4.53988 15.3693 6.34154 15.3693 8.50021C15.3693 9.11754 15.3316 9.70154 15.2563 10.2522C15.181 10.8032 15.0138 11.3247 14.7548 11.8167L38.1433 35.2047C38.9416 36.003 39.125 36.9072 38.6933 37.9172C38.2613 38.9269 37.4825 39.4317 36.3568 39.4317C36.0358 39.4317 35.7236 39.3692 35.4203 39.2442C35.1173 39.1189 34.8485 38.936 34.6138 38.6957L20.3473 24.4417ZM26.4508 18.6502L22.9473 15.1587L34.6138 3.50471C34.8485 3.26438 35.1173 3.08154 35.4203 2.95621C35.7236 2.83121 36.0358 2.76871 36.3568 2.76871C37.4821 2.76871 38.2461 3.27988 38.6488 4.30221C39.0515 5.32488 38.8663 6.22271 38.0933 6.99571L26.4508 18.6502ZM7.79979 12.9287C9.04113 12.9287 10.0911 12.5004 10.9498 11.6437C11.8085 10.7874 12.2378 9.73871 12.2378 8.49771C12.2378 7.25671 11.8088 6.20888 10.9508 5.35421C10.0925 4.49921 9.04163 4.07171 7.79829 4.07171C6.55496 4.07171 5.50596 4.50004 4.65129 5.35671C3.79663 6.21304 3.36929 7.26171 3.36929 8.50271C3.36929 9.74371 3.79746 10.7915 4.65379 11.6462C5.51013 12.5012 6.55879 12.9287 7.79979 12.9287ZM20.4473 22.3537C20.77 22.3537 21.0428 22.242 21.2658 22.0187C21.4891 21.7954 21.6008 21.5225 21.6008 21.2002C21.6008 20.8779 21.4891 20.605 21.2658 20.3817C21.0428 20.1584 20.77 20.0467 20.4473 20.0467C20.125 20.0467 19.8521 20.1584 19.6288 20.3817C19.4058 20.605 19.2943 20.8779 19.2943 21.2002C19.2943 21.5225 19.4058 21.7954 19.6288 22.0187C19.8521 22.242 20.125 22.3537 20.4473 22.3537ZM7.79979 37.9287C9.04113 37.9287 10.0911 37.5004 10.9498 36.6437C11.8085 35.7874 12.2378 34.7387 12.2378 33.4977C12.2378 32.2567 11.8088 31.2089 10.9508 30.3542C10.0925 29.4992 9.04163 29.0717 7.79829 29.0717C6.55496 29.0717 5.50596 29.5 4.65129 30.3567C3.79663 31.213 3.36929 32.2617 3.36929 33.5027C3.36929 34.7437 3.79746 35.7915 4.65379 36.6462C5.51013 37.5012 6.55879 37.9287 7.79979 37.9287Z" fill="white"/>
                </svg>
              </div>
              <h1 className="text-white font-thin font-[Poppins] text-4xl my-6">Creative Content Creation That Resonates</h1>
              <p className="text-white font-[Lato] font-light">We craft content that resonates with your audience and strengthens your brand.</p>
            </div>
          </div>
          <button className="mt-24 px-7 py-2 h-14 rounded-xl border-2 border-white text-white bg-transparent font-medium hover:bg-white hover:text-[#020e2c] transition">Learn More</button>
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