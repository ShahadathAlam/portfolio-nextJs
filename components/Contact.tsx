import Image from "next/image";
import Link from "next/link";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={128}
          height={128}
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        {/* <Link href="mailto:shahadathalam@ymail.com" target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link> */}

        <ContactForm />
      </div>
    </section>
  );
}
