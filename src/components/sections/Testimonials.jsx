import { useState, useEffect } from 'react';
import starIcon from '../../assets/icons/star.png';

const testimonials = [
  {
    name: 'Tasha Wijayanti',
    location: 'Curug',
    message:
      "This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here",
  },
  {
    name: 'Sizuka engkol',
    location: 'Indonesia',
    message:
      "Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.",
  },
  {
    name: 'Gundam gandim',
    location: 'Bulgarian',
    message:
      "It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrow(window.innerWidth < 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="w-full min-h-[582px] bg-white pt-[48px] pb-[80px] overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1200px] px-4 md:px-0 flex flex-col items-center">
        
        <div className="w-full text-center mb-[48px]">
          <h2 className="mx-auto max-w-[428px] w-full font-semibold text-[40px] leading-[56px] text-[#262626]">
            What Our Customers Have To Say
          </h2>
          <p className="mt-[16px] mx-auto max-w-[504px] w-full font-normal text-[16px] leading-[32px] text-[#727272]">
            {isNarrow ? (
              <>
                Here's what our customers say with <br /> Bucheen
              </>
            ) : (
              "Here's what our customers say with Bucheen"
            )}
          </p>
        </div>

        {!isNarrow && (
          <div className="w-full flex justify-center gap-[32px]">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="w-[378px] h-[278px] rounded-[16px] bg-white border border-[#DDDDDD] shadow-[10px_24px_54px_rgba(0,0,0,0.06)] flex-shrink-0"
              >
                <div className="px-[24px] pt-[24px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="h-[32px] w-[32px] rounded-full bg-[#C4C4C4]" />
                    <div>
                      <p className="font-medium text-[14px] leading-[21px] tracking-[0.5px] text-[#232323]">
                        {item.name}
                      </p>
                      <p className="mt-[5px] font-normal text-[12px] leading-[18px] tracking-[0.5px] text-[#AAAAAA]">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-[18px] w-[330px] text-[16px] leading-[24px] text-[#727272]">
                    {item.message}
                  </p>

                  <div className="mt-[18px] flex items-center gap-[16px]">
                    {/*anlamiyorum, anlamam lazim. sonra anlarim*/}
                    {[...Array(5)].map((_, index) => (
                      <img key={index} src={starIcon} alt="star" className="h-[20px] w-[20px]" />
                                            
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isNarrow && (
          <div className="w-full flex flex-col items-center">
            {/*buna geri don olmazsa -> <div className="absolute top-[208px] left-0 right-0">*/}
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {testimonials.map((item) => (
                  <div key={item.name} className="min-w-full flex justify-center">
                    <div className="w-[90%] max-w-[378px] h-[278px] rounded-[16px] bg-white border border-[#DDDDDD] shadow-[10px_24px_54px_rgba(0,0,0,0.06)]">
                      <div className="px-[24px] pt-[24px]">
                        <div className="flex items-center gap-[16px]">
                          <div className="h-[32px] w-[32px] rounded-full bg-[#C4C4C4]" />
                          <div>
                            <p className="font-medium text-[14px] leading-[21px] tracking-[0.5px] text-[#232323]">
                              {item.name}
                            </p>
                            <p className="mt-[5px] font-normal text-[12px] leading-[18px] tracking-[0.5px] text-[#AAAAAA]">
                              {item.location}
                            </p>
                          </div>
                        </div>
                        <p className="mt-[18px] text-[16px] leading-[24px] text-[#727272] line-clamp-4">
                          {item.message}
                        </p>

                        <div className="mt-[18px] flex items-center gap-[16px]">
                          {[new Array(5)].map((_, index) => (
                            <img
                              key={index}
                              src={starIcon}
                              alt="star"
                              className="h-[20px] w-[20px]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

             <div className="flex justify-center gap-4 mt-8"> {/* hadi simdi dene de goriyim CIK*/}
              <button
                onClick={prevSlide}
                disabled={activeIndex === 0}
                className={`w-10 h-10 rounded-full border border-[#FF725E] bg-white font-bold transition-all flex items-center justify-center ${
                  activeIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'text-[#FF725E] hover:bg-orange-50'
                }`}
                aria-label="Previous Testimonial"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                disabled={activeIndex === testimonials.length - 1}
                className={`w-10 h-10 rounded-full bg-[#FF725E] font-bold transition-all flex items-center justify-center ${
                  activeIndex === testimonials.length - 1 ? 'opacity-40 cursor-not-allowed' : 'text-white hover:bg-[#e66350]'
                }`}
                aria-label="Next Testimonial"
              >
                →
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;