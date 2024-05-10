import logo from "../../assets/internshala2-logo.png";

const NavDisp = ({ongetHamburgerVal}) => {
  return (
    <>
      <div className="md:w-4/5 m-auto flex justify-between">
        <div className="px-2 py-2">
          <img className="w-36" src={logo} />
        </div>
        <div className="hidden md:flex space-x-6 my-1">
          <div className="text-gray-500 my-1">Home</div>
          <div className="text-gray-500 my-1">Flashcard</div>
          <div className="text-gray-500 my-1">Contact</div>
          <div className="text-gray-500 my-1">FAQ</div>
          <div className="rounded-xl bg-blue-gradient font-semibold text-white w-20 h-8 px-5 py-1">
            Login
          </div>
        </div>
        <div className="block md:hidden">
          <button onClick={() => ongetHamburgerVal(false)}>
            <span className="material-symbols-outlined text-4xl font-semibold mx-2">
              menu
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavDisp;
