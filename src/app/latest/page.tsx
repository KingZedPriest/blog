import Image from "next/image";
import Link from "next/link";
import comingSoonImg from "../../../public/comingSoonCopy.png";
export default function about() {
  return (
    <div className="bg-black text-center text-white">
      <main className="flex h-screen flex-col items-center justify-center">
        <Image
          src={comingSoonImg}
          alt="Picture of the author"
          placeholder="blur"
        />
        <p className="mt-10 text-xs sm:text-sm lg:text-base font-semibold w-[90%] lg:w-[60%]">
        <p className="uppercase my-2">Latest News </p>
          Exploring New Horizons: From Streamlining Processes to Cultivating
          Engaged Culture. <br /> We journey through innovation – harnessing automation
          for efficiency and nurturing a culture where passion thrives.
        </p>
        <Link href="/">
          <button className="mt-10 w-[10rem] rounded-[2rem] border-2 border-white bg-white py-2 font-semibold text-black duration-500 hover:bg-black hover:text-white">
            Go Home
          </button>
        </Link>
      </main>
    </div>
  );
}
