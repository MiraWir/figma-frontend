const Features = () => {
  return (
    <section className="w-full h-[420px] bg-white flex items-center justify-center relative overflow-hidden">
      {/*CircleSSSS*/}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
        {/*C L*/}
        <div 
          className="rounded-full border-[4px] border-[#FEEEDB] opacity-70 absolute"
          style={{
            width: '409px',
            height: '409px',
            left: '-120px',
            top: '-50px',
            zIndex: 1
          }}
        />
        {/*C M*/}
        <div 
          className="rounded-full border-[4px] border-[#FEEEDB] opacity-70 absolute"
          style={{
            width: '361px',
            height: '361px',
            left: '-20px',
            top: '20px',
            zIndex: 1
          }}
        />
        {/*C S*/}
        <div 
          className="rounded-full border-[4px] border-[#FEEEDB] opacity-70 absolute"
          style={{
            width: '225px',
            height: '225px',
            left: '30px',
            top: '100px',
            zIndex: 1
          }}
        />
      </div>
      
      <div className="max-w-[1440px] w-full px-6 flex items-center h-full relative" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {}
          <div className="hidden lg:block">
            {}
          </div>
          

          <div className="space-y-6">
            {/*Heading*/}
            <h1 className="font-semibold text-[40px] leading-[60px] text-[#262626] max-w-[457px]">
              Find Match Now and<br />
              Develop Your Feelings
            </h1>
            
            {/*Paragraph*/}
            <p className="text-[#727272]" style={{ fontSize: '16px', lineHeight: '24px', width: '527px' }}>
              There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
            </p>
            
            {/*Button*/}
            <button className="bg-[#FF725E] text-white px-6 py-3 rounded-lg font-medium text-[14px] leading-[21px] hover:bg-[#FF834F] transition-colors" style={{ width: '127px', height: '48px', fontWeight: '500' }}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;