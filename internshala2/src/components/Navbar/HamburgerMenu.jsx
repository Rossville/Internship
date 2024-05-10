const HamburgerMenu = ({onhandleclose}) => {
  return (
    <>
      <div className="space-y-6 text-center my-5">
        <div className="flex justify-end">
          <div className="px-4 py-2">
            <button onClick={() => onhandleclose(true)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <div className="text-gray-500 my-1 cursor-pointer border-b-2">Home</div>
        <div className="text-gray-500 my-1 cursor-pointer border-b-2">
          Flashcard
        </div>
        <div className="text-gray-500 my-1 cursor-pointer border-b-2">
          Contact
        </div>
        <div className="text-gray-500 my-1 cursor-pointer border-b-2">FAQ</div>
        <div className="rounded-xl bg-blue-gradient m-auto font-semibold cursor-pointer text-white w-20 h-8 px-5 py-1">
          Login
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
