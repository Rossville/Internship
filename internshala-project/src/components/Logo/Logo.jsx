const Logo = ({ paddingX = 6, color = null }) => {
  return (
    <>
      <div
        className={`dancing-script-dribbble-logo text-${
          color !== null ? color : "pink-600"
        } px-${paddingX} py-2`}
      >
        dribbble
      </div>
    </>
  );
};

export default Logo;
