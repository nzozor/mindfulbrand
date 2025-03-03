import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sofia text-black bg-gradient-to-b from-gray-100 to-purple-200 flex items-center justify-center">
      <div className="w-full  text-center p-6 container">
        <div className="mt-[40px] flex justify-center items-center relative w-full h-[42px] sm:h-[62px] mb-[88px]">
          <Image fill src="/mindful_brand_logo.svg" alt="Mindful Brandta Logo"  />
        </div>
        <h1 className="font-bold text-black text-[65px]/[110px]  sm:text-[103px] weight-[700] mb-[40px] sm:mb-[60px] line-h">Launching Soon</h1>
        <p className="text-gray-700  mx-auto  text-[29px] weight-[500] max-w-5xl mb-[40px] sm:mb-[90px]">
          A brand consultancy helping purpose-driven female founders succeed with expertise in entrepreneurship, brand strategy, and visual identity using a holistic and founder-focused approach to brand creation.
        </p>
        <p className="text-black font-semibold mb-10 text-[26px]/[50px] sm:text-[34px] weight-[700] ">Want to build a trustworthy lifestyle brand?</p>
        <Link href="https://docs.google.com/forms/d/1kj-ahmi5jnrEnjYvM3QPLzvm_FhOh4ojp4D_pS6oNjY/edit"  target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold">Get in touch</Link>
        <div className="mt-6 flex justify-center">
          <Link href="https://www.linkedin.com/company/mindful-brand/" target="_blank" rel="noopener noreferrer" className="text-black text-2xl relative w-full h-[42px] mt-10" aria-label="LinkedIn">
            <Image fill src="/linkedin.svg" alt="LinkedIn Logo"  />
          </Link>
        </div>
      </div>
    </div>
  );
}
