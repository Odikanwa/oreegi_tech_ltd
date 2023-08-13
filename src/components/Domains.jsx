import { Link } from "react-router-dom";
import { domains_photo } from "../assets";
import RoundedButton from "./RoundedButton";
import GoToTop from "./GoToTop";

const Domains = () => {
  return (
    <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pb-[10vh] text-[14px] py-[3vh]">
      <h1 className="font-bold text-[20px] lg:text-[25px] py-[5%] lg:py-[3%]">
        Domain Name & Hosting
      </h1>
      <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#F8F8FF] text-black">
        <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
          <p className="mb-[2vh]">
            Welcome to the world of seamless digital presence and reliable
            online infrastructure. We are a leading provider of domain name and
            hosting solutions, offering businesses, individuals, and
            organizations the tools they need to establish a strong online
            identity and maintain a robust web presence. Our comprehensive range
            of services ensures that your digital journey is smooth, secure, and
            optimized for success.
          </p>
          <p>
            We are committed to offering user-friendly, innovative, and
            value-driven solutions to help our clients thrive in the digital
            age.
          </p>

          <Link to="/domainhosting" onClick={() => GoToTop()}>
            <RoundedButton>Learn more</RoundedButton>
          </Link>
        </div>
        <div className="w-[100%] lg:w-[50%] lg:pr-[10%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
          <img
            src={domains_photo}
            alt="domains photo"
            height={350}
            width={450}
            className="object-contain rounded-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Domains;
