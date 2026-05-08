const Hero = () => {
  return (
    <section className="w-full h-[859px] bg-[#FFB9AF] flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-6 flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - text area */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Find <span className="text-[#FF725E]">Match Now</span><br />
              and Grow Your<br />
              Feelings
            </h1>
          </div>
          
          {/* Right side - placeholder area */}
          <div className="hidden lg:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-full h-96"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;