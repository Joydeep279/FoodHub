import { useContext } from "react";
import UserContext from "../utils/useContext";
import emailLogo from "../assets/img/Email.png";
import phoneicon from "../assets/img/icon.png";
const Footer = () => {
  const childTailwindConfig = "flex flex-col gap-5";
  const { email } = useContext(UserContext);
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between ml-28 mr-60 mt-10 mb-10 p-5 border-b">
        <div className="flex flex-col gap-10">
          <h1 className="text-[#3A86FF] text-4xl font-sans">.Food Hub</h1>
          <span className="text-wrap">
            Funding freemium long tail hypotheses<br></br> first mover advantage
            assets ownership
          </span>
          <div className="flex gap-4">
            <img src={emailLogo} className="w-5 h-5" />
            <span>{email}</span>
          </div>
          <div className="flex gap-4 items-center">
            <img src={phoneicon} className="w-5 h-5" />
            <span>+91 6001515279</span>
          </div>
        </div>
        <div className={childTailwindConfig}>
          <span className="font-bold text-[#92989F]">Services</span>
          <span>Web Hosting</span>
          <span>Domains</span>
          <span>Premium Hosting</span>
          <span>Private Server</span>
          <span>E-mail Hosting</span>
        </div>
        <div className={childTailwindConfig}>
          <span className="font-bold text-[#92989F]">Support</span>
          <span>Pricing Plan</span>
          <span>Documentation</span>
          <span>Guide</span>
          <span>Tutorial</span>
        </div>
        <div className={childTailwindConfig}>
          <span className="font-bold text-[#92989F]">Company</span>
          <span>About</span>
          <span>BLog</span>
          <span>Join Us</span>
          <span>Press</span>
          <span>Partners</span>
        </div>
        <div className={childTailwindConfig}>
          <span className="font-bold text-[#92989F]">Legal</span>
          <span>Claim</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
      <span className="m-auto">
        Design with love © Joydeep 2024. All right reserved
      </span>
    </div>
  );
};
export default Footer;
