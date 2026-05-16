import { useState, useEffect } from "react";
import img111 from "../../assets/images/111.png";
import img222 from "../../assets/images/222.png";
import img333 from "../../assets/images/333.png";

const MostPopular = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNarrow = windowWidth < 992;

  return (
    <section className="relative w-full bg-[#FFF8F7] py-12 md:py-24">
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Header - Common for both layouts */}
        <div className="text-center px-6 mb-12">
          <h2 className="font-semibold text-[40px] leading-[60px] text-[#000026]">
            Most Popular In This Week
          </h2>
          <p className="mt-4 text-[16px] leading-[24px] text-[#727272] max-w-[527px] mx-auto">
            There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
          </p>
        </div>

        {/* DESKTOP LAYOUT */}
        {!isNarrow && (
          <div className="hidden md:flex justify-center items-start gap-6 mt-[64px]">
            <div className="mt-0 w-[328px] h-[521px] rounded-[20.87px] bg-white border border-[#E9E9E9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden relative">
              <div
                className="absolute top-0 left-0 w-full h-[247px] rounded-t-[20.87px]"
                style={{ backgroundColor: '#FFAB9F', opacity: 0.9 }}
              >
                <div className="relative h-full w-full">
                  <img
                    src={img111}
                    alt="Javar Saripun"
                    className="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
                    style={{ width: '175px', height: '171px' }}
                  />
                </div>
              </div>
              <div className="absolute top-[247px] left-0 w-full h-[209px] px-8 pt-8">
                <h3 className="font-semibold text-[32px] leading-[40px] text-[#000026]">
                  Javar Saripun
                </h3>
                <p className="mt-4 text-[16px] leading-[24px] text-[#727272]">
                  A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.
                </p>
              </div>
            </div>

            <div className="mt-[40px] w-[328px] h-[521px] rounded-[20.87px] bg-white border border-[#E9E9E9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden relative">
              <div
                className="absolute top-0 left-0 w-full h-[247px] rounded-t-[20.87px]"
                style={{ backgroundColor: '#B3A3FF', opacity: 0.9 }}
              >
                <div className="relative h-full w-full">
                  <img
                    src={img222}
                    alt="Fausiah Fera"
                    className="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
                    style={{ width: '159px', height: '184px' }}
                  />
                </div>
              </div>
              <div className="absolute top-[247px] left-0 w-full h-[209px] px-8 pt-8">
                <h3 className="font-semibold text-[32px] leading-[40px] text-[#000026]">
                  Fausiah Fera
                </h3>
                <p className="mt-4 text-[16px] leading-[24px] text-[#727272]">
                  Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.
                </p>
              </div>
            </div>

            <div className="mt-[80px] w-[328px] h-[521px] rounded-[20.87px] bg-white border border-[#E9E9E9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden relative">
              <div
                className="absolute top-0 left-0 w-full h-[247px] rounded-t-[20.87px]"
                style={{ backgroundColor: '#FFD492', opacity: 0.9 }}
              >
                <div className="relative h-full w-full">
                  <img
                    src={img333}
                    alt="Shreryl Olap"
                    className="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
                    style={{ width: '176px', height: '177px' }}
                  />
                </div>
              </div>
              <div className="absolute top-[247px] left-0 w-full h-[209px] px-8 pt-8">
                <h3 className="font-semibold text-[32px] leading-[40px] text-[#000026]">
                  Shreryl Olap
                </h3>
                <p className="mt-4 text-[16px] leading-[24px] text-[#727272]">
                  Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* NARROW LAYOUT - Carousel */}
        {isNarrow && (
          <div className="px-6">
            <div className="overflow-x-auto flex gap-6 snap-x snap-mandatory pb-8 scrollbar-hide">
              {/* Card 1 */}
              <div className="min-w-[328px] snap-start">
                <div className="w-[328px] h-[521px] rounded-[20.87px] bg-white border border-[#E9E9E9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                  <div
                    className="w-full h-[247px] rounded-t-[20.87px]"
                    style={{ backgroundColor: '#FFAB9F', opacity: 0.9 }}
                  >
                    <div className="relative h-full w-full">
                      <img
                        src={img111}
                        alt="Javar Saripun"
                        className="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
                        style={{ width: '175px', height: '171px' }}
                      />
                    </div>
                  </div>
                  <div className="h-[209px] px-8 pt-8">
                    <h3 className="font-semibold text-[32px] leading-[40px] text-[#000026]">
                      Javar Saripun
                    </h3>
                    <p className="mt-4 text-[16px] leading-[24px] text-[#727272]">
                      A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="min-w-[328px] snap-start">
                <div className="w-[328px] h-[521px] rounded-[20.87px] bg-white border border-[#E9E9E9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                  <div
                    className="w-full h-[247px] rounded-t-[20.87px]"
                    style={{ backgroundColor: '#B3A3FF', opacity: 0.9 }}
                  >
                    <div className="relative h-full w-full">
                      <img
                        src={img222}
                        alt="Fausiah Fera"
                        className="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
                        style={{ width: '159px', height: '184px' }}
                      />
                    </div>
                  </div>
                  <div className="h-[209px] px-8 pt-8">
                    <h3 className="font-semibold text-[32px] leading-[40px] text-[#000026]">
                      Fausiah Fera
                    </h3>
                    <p className="mt-4 text-[16px] leading-[24px] text-[#727272]">
                      Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="min-w-[328px] snap-start">
                <div className="w-[328px] h-[521px] rounded-[20.87px] bg-white border border-[#E9E9E9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                  <div
                    className="w-full h-[247px] rounded-t-[20.87px]"
                    style={{ backgroundColor: '#FFD492', opacity: 0.9 }}
                  >
                    <div className="relative h-full w-full">
                      <img
                        src={img333}
                        alt="Shreryl Olap"
                        className="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
                        style={{ width: '176px', height: '177px' }}
                      />
                    </div>
                  </div>
                  <div className="h-[209px] px-8 pt-8">
                    <h3 className="font-semibold text-[32px] leading-[40px] text-[#000026]">
                      Shreryl Olap
                    </h3>
                    <p className="mt-4 text-[16px] leading-[24px] text-[#727272]">
                      Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-6">
              <div className="w-3 h-3 rounded-full bg-[#FF6B5E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#E0E0E0]"></div>
              <div className="w-3 h-3 rounded-full bg-[#E0E0E0]"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MostPopular;