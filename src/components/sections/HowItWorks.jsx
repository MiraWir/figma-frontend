const HowItWorks = () => {
  return (
    <section className="w-full h-[670px] bg-white flex items-center justify-center relative border border-black">
      <div className="max-w-[1440px] w-full px-6 flex items-center h-full">
        {/*Left*/}
        <div className="w-[457px] space-y-8">
          {}
          <h2 className="font-semibold text-[40px] leading-[60px] text-[#262626]">
            How It Works To Find Your Relationship
          </h2>
          
          {/*1*/}
          <div className="flex items-start gap-4">
            {/*yuvarlaklar*/}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#FF834F', opacity: 0.3 }}
            >
              <span className="text-[#262626] font-semibold text-xl">1</span>
            </div>
            {/*txt*/}
            <div>
              <p 
                className="text-[#727272]"
                style={{ 
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                Find your dating relationship in app and waiting until you get a notification. have a good relationship its started
              </p>
            </div>
          </div>
          
          {/*2*/}
          <div className="flex items-start gap-4">
            {/*yuvarlaklar*/}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#FF834F', opacity: 0.3 }}
            >
              <span className="text-[#262626] font-semibold text-xl">2</span>
            </div>
            <div>
              <p 
                className="text-[#727272]"
                style={{ 
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                Dating with benefits and you redefine expectations of a perfect relationship with your partner
              </p>
            </div>
          </div>
          
          {/*3*/}
          <div className="flex items-start gap-4">
            {/*yuvarlaklar -> ikonları napıcam?? BEN NE BILIYIM*/}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#FF834F', opacity: 0.3 }}
            >
              <span className="text-[#262626] font-semibold text-xl">3</span>
            </div>
            {/*txt*/}
            <div>
              <p 
                className="text-[#727272]"
                style={{ 
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                Ideal relationship makes your online dating relationship run more smoothly using this app
              </p>
            </div>
          </div>
        </div>
        
        {/*R-emptyy*/}
        <div className="flex-1 hidden lg:block">
          {}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
