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

const Star = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 0.5L9.557 5.408L14.828 6.232L10.914 9.535L11.814 14.78L7.5 12.042L3.186 14.78L4.086 9.535L0.172 6.232L5.443 5.408L7.5 0.5Z"
      fill="#FDC350"
    />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="relative w-full h-[582px] bg-white">
      <div className="absolute left-1/2 top-[48px] h-[486px] w-[1200px] -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 h-[112px]">
          <h2 className="mx-auto w-[428px] text-center font-semibold text-[40px] leading-[56px] text-[#262626]">
            What Our Customers Have To Say
          </h2>
          <p className="mt-[16px] mx-auto w-[504px] text-center font-normal text-[16px] leading-[32px] text-[#727272]">
            Here's what our customers say with Bucheen
          </p>
        </div>

        <div className="absolute top-[208px] left-0 right-0 flex justify-center gap-[32px]">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="w-[378px] h-[278px] rounded-[16px] bg-white border border-[#DDDDDD] shadow-[10px_24px_54px_rgba(0,0,0,0.06)]"
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
                  {[new Array(5)].map((_, index) => (
                    <div key={index} className="h-[20px] w-[20px] flex items-center justify-center">
                      <Star />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
