import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="md:flex justify-between my-4 border-b-2 py-4 md:space-x-4">
        <div className="md:w-1/6 px-4">
          <div>
            <Logo paddingX={0} />
          </div>
          <div>
            Dribbble is the world's leading community for creatives to
            share,grow,and get hired.
          </div>
          <div className="flex space-x-2">
            <div>
              <i class="fa-brands text-lg text-gray-700 cursor-pointer fa-dribbble"></i>
            </div>
            <div>
              <i class="fa-brands text-lg text-gray-700 cursor-pointer fa-twitter"></i>
            </div>
            <div>
              <i class="fa-brands text-lg text-gray-700 cursor-pointer fa-facebook"></i>
            </div>
            <div>
              <i class="fa-brands text-lg text-gray-700 cursor-pointer fa-instagram"></i>
            </div>
            <div>
              <i class="fa-brands text-lg text-gray-700 cursor-pointer fa-pinterest"></i>
            </div>
          </div>
        </div>
        <div className="px-4 my-10 space-y-4">
          <div className="font-semibold">For designers</div>
          <div>Go Pro!</div>
          <div>Explore design work</div>
          <div>Design blog</div>
          <div>Overtime podcast</div>
          <div>Playoffs</div>
          <div>Weekly Warmup</div>
          <div>Refer a friend</div>
          <div>Code of conduct</div>
        </div>
        <div className="px-4 my-10 space-y-4">
          <div className="font-semibold">Hire designers</div>
          <div>Post a job opening</div>
          <div>Post a freelance project</div>
          <div>Search for designers</div>
          <div className="font-semibold">Brands</div>
          <div>Advertise with us</div>
        </div>
        <div className="px-4 my-10 space-y-4">
          <div className="font-semibold">Company</div>
          <div>About</div>
          <div>Careers</div>
          <div>Support</div>
          <div>Media kit</div>
          <div>Testimonials</div>
          <div>API</div>
          <div>Terms of service</div>
          <div>Privacy policy</div>
          <div>Cookie policy</div>
        </div>
        <div className="px-4 my-10 space-y-4">
          <div className="font-semibold">Directories</div>
          <div>Design jobs</div>
          <div>Designers for hire</div>
          <div>Freelance designers for hire</div>
          <div>Tags</div>
          <div>Places</div>
          <div className="font-semibold">Design assets</div>
          <div>Dribbble Marketplace</div>
          <div>Creative Market</div>
          <div>Fontspring</div>
          <div>Font Squirrel</div>
        </div>
      </div>
      <div className="flex justify-between text-gray-500 px-2">
        <div>&copy; 2023 Dribbble. All rights reserved.</div>
        <div>
          <span className="text-black">20,501,853</span> shots dribbbled{" "}
          <i className="fa-brands fa-dribbble font-semibold text-xl text-pink-700 rounded-full"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
