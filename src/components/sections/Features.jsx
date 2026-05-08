const Features = () => {
  return (
    <section className="w-full h-[420px] bg-white flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-6 flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - empty placeholder area */}
          <div className="hidden lg:block">
            {/* Empty for now */}
          </div>
          
          {/* Right side - content area */}
          <div className="space-y-6">
            {/* Heading */}
            <h1 className="font-semibold text-[#262626]" style={{ fontSize: '40px', lineHeight: '60px', fontFamily: 'Poppins' }}>
              Find Match Now<br />
              and Develop Your<br />
              Feelings
            </h1>
            
            {/* Paragraph */}
            <p className="text-[#727272]" style={{ fontSize: '16px', lineHeight: '24px', width: '527px', fontFamily: 'Poppins' }}>
              There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
            </p>
            
            {/* Button */}
            <button className="bg-[#FF725E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF834F] transition-colors" style={{ width: '127px', height: '48px', fontSize: '14px', fontWeight: '500', fontFamily: 'Poppins' }}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;