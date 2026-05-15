import img111 from "../../assets/images/111.png";
import img222 from "../../assets/images/222.png";
import img333 from "../../assets/images/333.png";


const MostPopular = () => {
  return (
    <section className="relative w-full h-[990px] bg-[#FFF8F7]">
      <div className="relative w-full h-full">
        <div className="absolute top-[96px] left-1/2 -translate-x-1/2 w-full max-w-[527px] text-center">
          <h2 className="font-semibold text-[40px] leading-[60px] text-[#000026]">
            Most Popular In This Week
          </h2>
          <p className="mt-[16px] text-[16px] leading-[24px] text-[#727272]">
            There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
          </p>
        </div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1440px] h-full">
          <div className="absolute top-[320px] left-[180px] w-[328px] h-[521px] rounded-[20.87px] bg-white border border-[#E9E9E9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
            <div
              className="absolute top-0 left-0 w-[328px] h-[247px] rounded-t-[20.87px]"
              style={{ backgroundColor: '#FFAB9F', opacity: 0.9 }}
            >
              <div className="relative h-full w-full">
                <img
                  src={img111}
                  alt="Javar Saripun"
                  className="object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  style={{ width: '175px', height: '171px' }}
                />
              </div>
            </div>
            <div className="absolute top-[247px] left-0 w-full h-[209px] px-[32px] pt-[32px]">
              <h3 className="font-semibold text-[32px] leading-[40px] text-[#000026]">
                Javar Saripun
              </h3>
              <p className="mt-[16px] text-[16px] leading-[24px] text-[#727272]">
                A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.
              </p>
            </div>
          </div>

          <div className="absolute top-[340px] left-[556px] w-[328px] h-[521px] rounded-[20.87px] bg-white border border-[#E9E9E9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
            <div
              className="absolute top-0 left-0 w-[328px] h-[247px] rounded-t-[20.87px]"
              style={{ backgroundColor: '#B3A3FF', opacity: 0.9 }}
            >
              <div className="relative h-full w-full">
                <img
                  src={img222}
                  alt="Fausiah Fera"
                  className="object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  style={{ width: '159px', height: '184px' }}
                />
              </div>
            </div>
            <div className="absolute top-[247px] left-0 w-full h-[209px] px-[32px] pt-[32px]">
              <h3 className="font-semibold text-[32px] leading-[40px] text-[#000026]">
                Fausiah Fera
              </h3>
              <p className="mt-[16px] text-[16px] leading-[24px] text-[#727272]">
                Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.
              </p>
            </div>
          </div>

          <div className="absolute top-[360px] left-[932px] w-[328px] h-[521px] rounded-[20.87px] bg-white border border-[#E9E9E9] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
            <div
              className="absolute top-0 left-0 w-[328px] h-[247px] rounded-t-[20.87px]"
              style={{ backgroundColor: '#FFD492', opacity: 0.9 }}
            >
              <div className="relative h-full w-full">
                <img
                  src={img333}
                  alt="Shreryl Olap"
                  className="object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  style={{ width: '176px', height: '177px' }}
                />
              </div>
            </div>
            <div className="absolute top-[247px] left-0 w-full h-[209px] px-[32px] pt-[32px]">
              <h3 className="font-semibold text-[32px] leading-[40px] text-[#000026]">
                Shreryl Olap
              </h3>
              <p className="mt-[16px] text-[16px] leading-[24px] text-[#727272]">
                Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
