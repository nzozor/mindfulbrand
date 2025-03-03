import Image from "next/image";

export default function Home() {
  return (
    <div className="text-black bg-gradient-to-b from-gray-100 to-purple-200 flex items-center justify-center h-[100%] font-sofia">
      <div className="w-full  text-center p-6 container">
        <div className="mt-[40px] flex justify-center items-center relative w-full h-[42px] sm:h-[62px] mb-[88px]">
          <Image fill src="/mindful_brand_logo.svg" alt="Mindful Brandta Logo"  />
        </div>
        <h1 className="font-bold text-black text-[65px] sm:text-[103px] weight-[700] mb-[40px] sm:mb-[60px] line-h">Launching Soon</h1>
        <p className="text-gray-700  mx-auto  text-[29px] weight-[500] max-w-5xl mb-[40px] sm:mb-[90px]">
          A brand consultancy helping purpose-driven female founders succeed with expertise in entrepreneurship, brand strategy, and visual identity using a holistic and founder-focused approach to brand creation.
        </p>
        <p className="text-black font-semibold text-lg mb-10 text-[26px] sm:text-[34px] weight-[700] ">Want to build a trustworthy lifestyle brand?</p>
        <a href="#" className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold">Get in touch</a>
        <div className="mt-6 flex justify-center">
          <a href="#" className="text-black text-2xl relative w-full h-[42px] mt-10" aria-label="LinkedIn">
            <Image fill src="/linkedin.svg" alt="LinkedIn Logo"  />
          </a>
        </div>
      </div>
    </div>
  );
}
