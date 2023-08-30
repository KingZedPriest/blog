import { HiLocationMarker } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { ImMail3 } from "react-icons/im";
import { BsPersonCircle } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { BsPhone } from "react-icons/bs";
export default function contact() {
  return (

    <div className=" bg-black text-white">
      <main className="mx-auto max-w-7xl px-4 py-[10rem] text-center sm:px-6 lg:px-8">
        <div>
          <h1 className="mt-2 text-xl font-bold sm:text-2xl md:text-3xl lg:mt-4 lg:text-4xl">
            Contact Us
          </h1>
          <p className="mt-2 text-xs font-semibold sm:text-sm lg:mt-4 lg:text-base">
            Our friendly team would love to hear from you!
          </p>
        </div>
        <div className="mx-auto mt-8 flex w-full flex-wrap items-center justify-between md:w-[60%]">
          <div className="mx-auto mt-2 flex w-1/3 min-w-[10rem] flex-col items-center rounded-2xl p-2 duration-500 hover:bg-white hover:text-black">
            <HiLocationMarker size={20} />
            <p className="mt-2 text-xs font-semibold lg:text-sm">
              123 John Road Lagos.
            </p>
          </div>
          <div className="mx-auto mt-2 flex w-1/3 min-w-[10rem] flex-col items-center rounded-2xl p-2 duration-500 hover:bg-white hover:text-black">
            <IoMdCall size={24} />
            <p className="mt-2 text-xs font-semibold lg:text-sm">
              +234 907 780 0445
            </p>
          </div>
          <div className="mx-auto mt-2 flex w-1/3 min-w-[10rem] flex-col items-center rounded-2xl p-2 duration-500 hover:bg-white hover:text-black">
            <ImMail3 size={20} />
            <p className="mt-2 text-xs font-semibold lg:text-sm">
              hello@Vbtechgist.com
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 rounded-2xl bg-white p-8 text-black md:w-[60%]">
          <p className="text-left text-base font-bold lg:text-lg">
            Contact Form
          </p>
          <div className="mt-8 flex flex-col text-left md:flex-row md:justify-between">
            <div className="w-full md:w-[48%]">
              <p className="hover:pointer-cursor font-semibold">
                <label htmlFor="name">Your Name</label>
              </p>
              <div className="mt-2 flex items-center">
                <span className="relative z-10 -mr-8">
                  <BsPersonCircle size={20} />
                </span>
                <input
                  className="w-full rounded-xl bg-gray-100 p-2 text-center placeholder:text-xs focus:bg-white focus:outline-black lg:placeholder:text-sm"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <p className="hover:pointer-cursor mt-4 font-semibold">
                <label htmlFor="email">Your Email</label>
              </p>
              <div className="mt-2 flex items-center">
                <span className="relative z-10 -mr-8">
                  <LuMail size={20} />
                </span>
                <input
                  className="w-full rounded-xl bg-gray-100 p-2 text-center placeholder:text-xs focus:bg-white focus:outline-black lg:placeholder:text-sm"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                />
              </div>
              <p className="hover:pointer-cursor mt-4 font-semibold">
                <label htmlFor="phoneNumber">Your Phone Number</label>
              </p>
              <div className="mt-2 flex items-center">
                <span className="relative z-10 -mr-8">
                  <BsPhone size={20} />
                </span>
                <input
                  className="w-full rounded-xl bg-gray-100 p-2 text-center placeholder:text-xs focus:bg-white focus:outline-black lg:placeholder:text-sm"
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>
            <div className="mt-4 w-full md:mt-0 md:w-[48%]">
              <p className="hover:pointer-cursor font-semibold">
                <label htmlFor="message">Message</label>
              </p>
              <textarea
                className="-ml-2 mt-2 h-[13.5rem] w-full resize-none rounded-xl bg-gray-100 p-4 placeholder:text-xs focus:bg-white focus:outline-black md:-ml-0 lg:placeholder:text-sm"
                name="message"
                id="message"
                placeholder="Your Message"
              />
            </div>
          </div>
          <p className="hover:pointer-cursor mt-4 text-left font-semibold">
            <label>Subject Matter</label>
            <div className="mt-4 flex flex-wrap gap-5">
              <input
                className="w-[7rem] cursor-pointer rounded-xl border-2 border-gray-400 px-3 py-2 text-center text-gray-600 hover:border-black hover:text-black focus:text-black"
                readOnly
                type="text"
                name="News"
                id="News"
                value={"News"}
              />
              <input
                className="w-[7rem] cursor-pointer rounded-xl border-2 border-gray-400 px-3 py-2 text-center text-gray-600 hover:border-black hover:text-black focus:text-black"
                readOnly
                type="text"
                name="Privacy"
                id="Privacy"
                value={"Privacy"}
              />
              <input
                className="w-[7rem] cursor-pointer rounded-xl border-2 border-gray-400 px-3 py-2 text-center text-gray-600 hover:border-black hover:text-black focus:text-black"
                readOnly
                type="Others"
                name="Others"
                id="Others"
                value={"Others"}
              />
            </div>
          </p>
          <button
            className="mt-8 w-[10rem] hover:font-semibold rounded-xl border-2 border-black bg-black p-2 text-center text-white duration-500 hover:bg-white hover:text-black"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </main>
    </div>
  );
}
