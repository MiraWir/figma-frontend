import callIcon from '../../assets/icons/Call.png';
import messageIcon from '../../assets/icons/Message.png';
import locationIcon from '../../assets/icons/Location.png';

const Footer = () => {
  return (
    <footer className="w-full h-[307px] bg-[#FFF1EF] opacity-90">
      <div className="max-w-[1200px] mx-auto h-full flex justify-between items-start py-8 px-4">
        {/* Left Block - Brand */}
        <div className="w-[443px]">
          <h3 className="font-semibold text-[24px] text-black mb-4">
            <span style={{ color: '#776BB3' }}>Bu</span>
            <span style={{ color: '#FF725E' }}>cheen</span>
          </h3>
          <p className="text-[16px] leading-[28px] text-[#727272]">
            The most accurate and simplest time tracking for all of you. and we have been serving for more than 4 years and have made you happy
          </p>
        </div>

        {/* Middle Block - Navigation Columns */}
        <div className="flex gap-8">
          {/* About Us Column */}
          <div>
            <h4 className="font-bold text-[18px] text-[#FF806E] mb-4">
              About Us
            </h4>
            <ul className="space-y-2">
              <li className="text-[16px] text-[#727272]">Our people</li>
              <li className="text-[16px] text-[#727272]">Our categories</li>
              <li className="text-[16px] text-[#727272]">Contact us</li>
              <li className="ftext-[16px] text-[#727272]">Testimonial</li>
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold text-[18px] text-[#FF806E] mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li className="text-[16px] text-[#727272]">Task Management</li>
              <li className="text-[16px] text-[#727272]">Service</li>
              <li className="text-[16px] text-[#727272]">Task Schedule</li>
            </ul>
          </div>
        </div>

        {/* Right Block - Contact */}
        <div className="w-[211px]">
          <h4 className="font-bold text-[18px] text-[#FF806E] mb-4">
            Contact us
          </h4>
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <img src={callIcon} alt="call" className="w-4 h-4" />
              <span className="text-[16px] text-[#727272]">(021) 3258 4930</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <img src={messageIcon} alt="message" className="w-4 h-4" />
              <span className="text-[16px] text-[#727272]">Pokan@Hola.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <img src={locationIcon} alt="location" className="w-4 h-4" />
              <div>
                <p className="text-[16px] text-[#727272]">Sukabumi, Jawa Barat</p>
                <p className="text-[16px] text-[#727272]">Indonesia, IDN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
