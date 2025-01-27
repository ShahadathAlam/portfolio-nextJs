import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0 left-0 bg-black-900 pt-10 pb-5">
      {/* background grid */}
      <div className="absolute left-0 bottom-0 w-full min-h-96 opacity-30 pointer-events-none">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={128}
          height={128}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex mt-4 md:flex-row flex-col justify-between items-center w-full max-w-7xl px-5">
          <p className="md:text-base text-sm md:font-normal font-light mb-2 text-white">
            Copyright © {new Date().getFullYear()} Shahadath Alam
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <Link href={info.link} key={info.id} passHref target="_blank">
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <Image src={info.img} alt="icons" width={20} height={20} />
                </div>
              </Link>
            ))}

            <Link href="#hero">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image src="/uparrow.svg" alt="icons" width={20} height={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { FaLocationArrow } from "react-icons/fa6";

// import { socialMedia } from "@/data";
// import MagicButton from "./MagicButton";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="w-full pt-20 pb-10">
//       {/* background grid */}
//       <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <Image
//           src="/footer-grid.svg"
//           alt="grid"
//           width={128}
//           height={128}
//           className="w-full h-full opacity-50 "
//         />
//       </div>

//       {/* <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw]">
//           Ready to take <span className="text-purple">your</span> digital
//           presence to the next level?
//         </h1>
//         <p className="text-white-200 md:mt-10 my-5 text-center">
//           Reach out to me today and let&apos;s discuss how I can help you
//           achieve your goals.
//         </p>
//         <Link href="mailto:shahadathalam@ymail.com" target="_blank">
//           <MagicButton
//             title="Let's get in touch"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </Link>
//       </div>
//        */}
//       <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light mb-2">
//           Copyright © {new Date().getFullYear()} Shahadath Alam
//         </p>

//         <div className="flex items-center md:gap-3 gap-6">
//           {socialMedia.map((info) => (
//             <Link href={info.link} key={info.id} passHref target="_blank">
//               <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
//                 <Image src={info.img} alt="icons" width={20} height={20} />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
