import { useState, useEffect } from 'react';
import heroImage from "../../assets/images/hero-ui.png";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isNarrow = windowWidth < 992;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full bg-[#FFB9AF]/10 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-[1440px] w-full px-6 py-12 flex items-center">
        
        {isNarrow ? (
           <div className="flex flex-col items-center w-full max-w-[328px] mx-auto text-center">
            <img 
              src={heroImage} 
              alt="Hero UI" 
              style={{ 
                width: '328px', 
                height: '354px',
                objectFit: 'contain',
                marginBottom: '48px'
              }}
            />

            <h1 className={`font-semibold text-[40px] leading-[48px] text-[#262626] mb-6 ${isNarrow ? 'text-left' : ''}`}>
              Find <span className="text-[#FF725E]">Match Now</span><br />
              and Grow Your<br />
              Feelings
            </h1>

            <p className={`text-[#727272] text-[16px] leading-[30px] mb-10 ${isNarrow ? 'text-left' : ''}`} style={{ maxWidth: '327px' }}>
              There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful.<br />
              and we have it all to get you to be successful
            </p>

            <div className="bg-white shadow-lg rounded-2xl flex items-center px-6 w-full" 
                 style={{ height: '64px' }}>
              <div className="flex-1 flex justify-center items-center gap-2">
                <span className="text-gray-700 font-medium">Male</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M2 2L6 6L10 2" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="w-px h-8 bg-gray-300"></div>

              <div className="flex-1 flex justify-center items-center gap-2">
                <span className="text-gray-700 font-medium">Female</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M2 2L6 6L10 2" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <button 
              className="bg-[#FF725E] text-white hover:bg-[#FF834F] transition-colors mt-4"
              style={{ 
                width: '327px',
                height: '48px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Find Now
            </button>

          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left side - text area */}
            <div className="space-y-8">
              <h1 className="font-semibold text-[56px] leading-[84px] text-[#262626]">
                Find <span className="text-[#FF725E]">Match Now</span><br />
                and Grow Your<br />
                Feelings
              </h1>
              
              <p className="text-[#727272]" style={{ fontSize: '16px', lineHeight: '32px', width: '527px' }}>
                There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful.<br />
                and we have it all to get you to be successful
              </p>
              
              <div className="bg-white shadow-lg rounded-2xl flex items-center px-6" style={{ width: '427px', height: '64px' }}>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium">Male</span>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M2 2L6 6L10 2" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="w-px h-8 bg-gray-300 mx-6"></div>
                
                <div className="flex items-center gap-2"> 
                  <span className="text-gray-700 font-medium">Female</span>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M2 2L6 6L10 2" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="ml-auto">
                  <button 
                    className="bg-[#FF725E] text-white hover:bg-[#FF834F] transition-colors flex items-center justify-center"
                    style={{ 
                      width: '112px',
                      height: '48px',
                      fontSize: '14px',
                      borderRadius: '8px',
                      fontWeight: '500'
                    }}
                  >
                    Find Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src={heroImage} 
                alt="Hero UI" 
                className="w-full h-auto max-w-full object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Hero;