import Logo from "../Logo/Logo";
import Button from "../Buttons/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between border-b-2 border-gray-100">
      <div className="flex">
        <Logo/>
        <div className="hidden md:flex space-x-3 leading-10">
          <div className={styles.pointer}>Inspiraton</div>
          <div className={styles.pointer}>Find Work</div>
          <div className={styles.pointer}>Learn Design</div>
          <div className={styles.pointer}>Go Pro</div>
          <div className={styles.pointer}>Hire Designers</div>
        </div>
      </div>
      <div className="flex space-x-3">
        <div className="hidden md:block">
          <input
            className="bg-gray-100 p-2 rounded-md"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="hidden md:block">
          <Button>Upload</Button>
        </div>        
      <div><i className="md:hidden fa-solid fa-bars text-2xl text-pink-600 leading-10 cursor p-2"></i></div>
      </div>
    </nav>
  );
};

export default Navbar;
