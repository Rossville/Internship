const Button = ({ children, onclickgetdata, className, disabled,onhandlenext}) => {
  const onbuttonclick = (e) => {
    e.preventDefault();
    if(onhandlenext)
      onhandlenext();
    if(onclickgetdata)
      console.log(onclickgetdata);
  };

  return (
    <>
      <button 
        disabled={disabled}
        onClick={onbuttonclick}
        className={`${
          !disabled ? "opacity-1" : "opacity-10"
        } bg-pink-600 text-white px-6 py-2 rounded-md font-bold ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
