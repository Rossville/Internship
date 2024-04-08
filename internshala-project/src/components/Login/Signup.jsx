import { useState } from "react";
import Button from "../Buttons/Button";
import showcaseImg from "../images/3d-showcase-image.jpg";
import Logo from "../Logo/Logo";

const Signup = ({onhandlenext}) => {
  const [usernameAndname, setUsernameAndName] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const ongetname = (val, status) => {
    if (status == "name") {
      setUsernameAndName(() => {
        return {
          ...usernameAndname,
          name: val,
        };
      });
    } else if (status === "username") {
      setUsernameAndName(() => {
        return {
          ...usernameAndname,
          username: val,
        };
      });
    } else if (status === "email") {
      setUsernameAndName(() => {
        return {
          ...usernameAndname,
          email: val,
        };
      });
    } else {
      setUsernameAndName(() => {
        return {
          ...usernameAndname,
          password: val,
        };
      });
    }
    setIsDisabled(false);
  };

  return (
    <>
      <div className="flex">
        <div
          style={{
            width: "40%",
            height: "100vh",
            backgroundImage: `url(${showcaseImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "bottom",
            backgroundColor: "rgb(244,210,136)",
          }}
          className="hidden pl-16 pt-4 space-y-6 md:block"
        >
          <div>
            <Logo color={"saddlebrown"} />
          </div>
          <div className="text-saddlebrown2 pl-6 font-bold text-4xl">
            <p>Discover the world's top Designers & Creatives</p>
          </div>
        </div>
        <div className="w-full md:w-3/5 md:px-4 md:py-2 min-h-screen">
          <div className="flex justify-end">
            {/* applying react router in Sign In */}
            <p className="text-sm font-semibold">
              Already a member? <span className="text-blue-700">Sign In</span>
            </p>
          </div>

          <div className="px-4 py-2 m-auto w-3/5">
            <div>
              <p className="text-3xl font-bold my-3">Sign up to Dribble</p>
            </div>

            <form className="space-y-10">
              <div className="md:flex space-y-4 md:space-y-0 space-x-2">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-bold">Name</p>
                    <input
                      className="bg-gray-100 w-full rounded-md p-2"
                      value={usernameAndname.name}
                      onChange={(e) => ongetname(e.target.value, "name")}
                      type="text"
                    />
                  </label>
                </div>
                <div className="md:w-1/2">
                  <label>
                    <span className="font-bold">Username</span>
                    <input
                      className="bg-gray-100 w-full rounded-md p-2"
                      value={usernameAndname.username}
                      onChange={(e) => ongetname(e.target.value, "username")}
                      type="text"
                    />
                  </label>
                </div>
              </div>

              <div>
                <p className="font-bold">Email</p>
                <label>
                  <input
                    type="email"
                    className="w-full bg-gray-100 rounded-md p-2"
                    placeholder="xyz@example.com"
                    onChange={(e) => ongetname(e.target.value, "email")}
                  />
                </label>
              </div>

              <div>
                <p className="font-bold">Password</p>
                <label>
                  <input
                    className="w-full bg-gray-100 rounded-md p-2"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => ongetname(e.target.value, "password")}
                  />
                </label>
              </div>

              <div className="flex space-x-2">
                <span>
                  <input type="checkbox" />
                </span>
                <span>
                  <p className="text-gray-400">
                    Create an account means you're okay with our{" "}
                    <span className="text-blue-700">
                      Terms of service. Privacy Policy
                    </span>
                    , and our default{" "}
                    <span className="text-blue-700">
                      Notification Settings.
                    </span>
                  </p>
                </span>
              </div>

              <Button onhandlenext={onhandlenext} disabled={isDisabled} onclickgetdata={usernameAndname}>
                Create Account
              </Button>

              <p className="text-gray-400">
                This Page is protected by reCAPTCHA and Google{" "}
                <span className="text-blue-700">Privacy Policy</span> and{" "}
                <span className="text-blue-700">Terms of Service</span> apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
