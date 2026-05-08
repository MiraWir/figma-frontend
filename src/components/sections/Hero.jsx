import heroImage from "../../assets/images/hero-ui.png";

const Hero = () => {
  return (
    <section className="w-full h-[859px] bg-[#FFB9AF]/10 flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-6 flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - text area */}
          <div className="space-y-8">
            {}
            <h1 className="font-semibold text-[56px] leading-[84px] text-[#262626]">
              Find <span className="text-[#FF725E]">Match Now</span><br />
              and Grow Your<br />
              Feelings
            </h1>
            
            {}
            <p className="text-[#727272]" style={{ fontSize: '16px', lineHeight: '32px', width: '527px' }}>
              There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful.<br />
              and we have it all to get you to be successful
            </p>
            
            {}
            <div className="bg-white shadow-lg rounded-2xl flex items-center px-6" style={{ width: '427px', height: '64px', borderRadius: '16px' }}>
              {}
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium" style={{ fontFamily: 'Poppins' }}>Male</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M2 2L6 6L10 2" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {}
              <div className="w-px h-8 bg-gray-300 mx-6"></div>
              
              {/* bu boyle miydi (geri don) */}
              <div className="flex items-center gap-2"> 
                <span className="text-gray-700 font-medium" style={{ fontFamily: 'Poppins' }}>Female</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M2 2L6 6L10 2" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {}
              <div className="ml-auto">
                <button 
                  className="bg-[#FF725E] text-white hover:bg-[#FF834F] transition-colors flex items-center justify-center"
                  style={{ 
                    width: '112px',
                    height: '48px',
                    fontSize: '14px',
                    lineHeight: '100%',
                    borderRadius: '8px',
                    fontWeight: '500',
                    letterSpacing: '0%'
                  }}
                >
                  Find Now
                </button>
              </div>
            </div>
          </div>
          
          {/*image*/}
          <div className="hidden lg:block">
            <img 
              src={heroImage} 
              alt="Hero UI" 
              className="w-full h-auto max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;