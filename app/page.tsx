import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden  font-sofia text-black bg-gradient-to-b from-gray-100 to-purple-200 flex items-center justify-center min-h-screen">
      <div className="z-[1] w-full  text-center p-6 container">
        <div className="mt-[40px] flex justify-center items-center relative w-full h-[42px] sm:h-[62px] mb-[88px]">
          <Image fill src="/mindful_brand_logo.svg" alt="Mindful Brandta Logo"  />
        </div>
        <h1 className="font-bold text-black text-[65px] leading-none  sm:text-[103px] weight-[700] mb-[40px] sm:mb-[60px]">Launching Soon</h1>
        <p className="text-black  mx-auto  text-[29px] weight-[500] leading-tight  sm:leading-relaxed  max-w-5xl mb-[40px] sm:mb-[90px]">
          A brand consultancy helping early-stage B2C female founders
          grow their businesses using the transformative power of brand
          through strategy and design.
        </p>
        <p className="text-black font-semibold mb-10 text-[26px]/[40px] sm:text-[34px] weight-[700] ">Ready to build a trustworthy consumer brand?</p>
        <Link href="https://docs.google.com/forms/d/1kj-ahmi5jnrEnjYvM3QPLzvm_FhOh4ojp4D_pS6oNjY/edit"  target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold">Get in touch</Link>
        <div className="  mt-6 flex justify-center">
          <Link href="https://www.linkedin.com/company/mindful-brand/" target="_blank" rel="noopener noreferrer" className="text-black text-2xl relative w-full h-[42px] mt-10" aria-label="LinkedIn">
            <Image fill src="/linkedin.svg" alt="LinkedIn Logo"  />
          </Link>
        </div>

      </div>
      {/*<img className="z-[-0] absolute  max-w-xs xl:max-w-full -bottom-[50px] xl:bottom-0 -left-10 xl:left-0" src="/bg-motif-desktop-left.svg" alt="mindful brand motif" />*/}
      {/*<img className="z-[-0] hidden xl:block absolute max-w-xs xl:max-w-full top-0  xl:right-0" src="/bg-motif-desktop-right.svg" alt="mindful brand motif" />*/}
    </div>
  );
}
