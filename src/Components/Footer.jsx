import img from "../assets/newslogo.png";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-10 items-center justify-between gap-6 sm:gap-16 py-10 bg-slate-950 text-white px-5 sm:px-20">
      <div className="flex flex-col items-center text-center sm:text-left">
        <img src={img} className="w-[50px] mb-2" alt="AS News Logo" />
        <h1 className="text-lg sm:text-xl font-bold">AS News</h1>
      </div>
      <div className="text-center sm:text-left">
        <p className="text-sm sm:text-base">Privacy Policy</p>
        <p className="text-sm sm:text-base">Do Not Sell My Personal Info</p>
        <p className="text-sm sm:text-base">Terms and Service</p>
        <p className="text-sm sm:text-base">www.asnews.com</p>
      </div>
      <div className="text-center text-red-500 text-sm sm:text-base mt-4 sm:mt-0">
        ©2024 AS NEWS (ABU SALMAN)
      </div>
    </div>
  );
};

export default Footer;
