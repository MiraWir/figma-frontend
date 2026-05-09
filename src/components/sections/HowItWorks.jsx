import searchIcon from "../../assets/icons/search.png";
import heartIcon from "../../assets/icons/heart.png";
import userIcon from "../../assets/icons/user.png";

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
              className="relative flex-shrink-0"
              style={{ 
                width: '64px',
                height: '64px',
                minWidth: '64px',
                minHeight: '64px'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  backgroundColor: '#FF834F',
                  opacity: 0.3
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
                <img src={searchIcon} alt="Search" style={{ width: '24px', height: '24px' }} />
              </div>
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
              className="relative flex-shrink-0"
              style={{ 
                width: '64px',
                height: '64px',
                minWidth: '64px',
                minHeight: '64px'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  backgroundColor: '#FF834F',
                  opacity: 0.3
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
                <img src={heartIcon} className="w-[24px] h-[24px]" alt="Heart" />
              </div>
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
            {/*yuvarlaklar*/}
            <div 
              className="relative flex-shrink-0"
              style={{ 
                width: '64px',
                height: '64px',
                minWidth: '64px',
                minHeight: '64px'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  backgroundColor: '#FF834F',
                  opacity: 0.3
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
                <img src={userIcon} className="w-[24px] h-[24px]" alt="User" />
              </div>
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
