const Hero = () => {
  return (
    <section className="w-full h-[859px] bg-[#FFB9AF] flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-6 flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - text area */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Find <span className="text-[#FF725E]">Match Now</span><br />
              and Grow Your<br />
              Feelings
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful.<br />
              and we have it all to get you to be successful
            </p>
            
            {/* Selection box */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6 max-w-md">
              <span className="text-gray-700 font-medium">Male</span>
              <div className="w-px h-6 bg-gray-300"></div>
              <span className="text-gray-700 font-medium">Female</span>
              <div className="ml-auto">
                <button className="bg-[#FF725E] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#FF834F] transition-colors">
                  Find Now
                </button>
              </div>
            </div>
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