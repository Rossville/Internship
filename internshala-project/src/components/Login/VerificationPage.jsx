import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const VerificationPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full md:w-1/2 m-auto my-20 text-center text-gray-400 space-y-2 px-12">
        <p className="text-3xl font-semibold text-black">
          Please verify the email...
        </p>
        <p>
          <i className="fa-solid text-5xl fa-envelope"></i>
        </p>
        <p>Please verify your email, we've sent a confirmation email to:</p>
        <p className="text-black">account@refero.design</p>
        <p>Click the confimation link in the mail to begin using Dribbble.</p>
        <p>
          Didn't receive the email?Check your Spam folder, it may have been
          caught by filter.If you still don't see it, you can
          <span className="text-pink-600 cursor-pointer">
            {" "}
            resend the confirmation email
          </span>
        </p>
        <p>
          Wrong email address?{" "}
          <span className="text-pink-600 cursor-pointer">Change it</span>
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default VerificationPage;
