import img from "../assets/newslogo.png";

const Header = ({ setToggleLandingComponent, changeNews }) => {
  const toggel=()=>{
    document.getElementById("nav-menu").classList.toggle("hidden")
  }
  return (
    <div className="bg-white border-2 flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 md:py-5 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex flex-col items-center">
          <img src={img} className="w-[40px] md:w-[50px]" alt="News Logo" />
          <h1 className="text-lg md:text-xl font-bold">AS News</h1>
        </div>
        <button className="block md:hidden text-xl" onClick={() =>{toggel()}} > ☰ </button>
      </div>
      <nav id="nav-menu" className="hidden md:flex flex-col justify-start md:flex-row gap-4 md:gap-10 mt-4 md:mt-0">
        <div className="text-[#2a2a2a] text-lg cursor-pointer " onClick={() => { changeNews("business");toggel() }}>Business </div>
        <div className="text-[#2a2a2a] text-lg cursor-pointer " onClick={() => { changeNews("entertainment");toggel() }} >Entertainment </div>
        <div className="text-[#2a2a2a] text-lg cursor-pointer " onClick={() => { changeNews("general");toggel() }} > General </div>
        <div className="text-[#2a2a2a] text-lg cursor-pointer " onClick={() => {  changeNews("health");toggel() }} >Health </div>
        <div className="text-[#2a2a2a] text-lg cursor-pointer " onClick={() => {changeNews("science");toggel() }} >  Science  </div>
        <div className="text-[#2a2a2a] text-lg cursor-pointer " onClick={() => { changeNews("sports");toggel()  }}> Sports</div>
        <div className="text-[#2a2a2a] text-lg cursor-pointer " onClick={() => { changeNews("technology");toggel()  }}> Technology</div>
      </nav>
    </div>
  );
};  

export default Header;



//       