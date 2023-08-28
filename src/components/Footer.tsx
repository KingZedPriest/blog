export default function footer() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-no-repeat">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Want to be first in getting these inspiring stories and ideas?
        </h1>
        <p className="mt-4 text-xs sm:text-sm lg:text-base">
          Join our community for exclusive updates and insights!
        </p>
        <button className="mt-8 rounded-[2rem] border-2 px-4 py-1.5 duration-500 hover:border-black hover:bg-black">
          Subscribe
        </button>
        <div className="mt-20 flex w-full flex-col items-center md:flex-row md:justify-between">
          <div className="flex w-full justify-evenly  md:w-[40%] md:justify-between">
            <div className="w-[5rem]">
              <h1 className="font-semibold">COMPANY</h1>
              <a href="">
                <p className="mt-4 duration-500 hover:font-semibold hover:text-black">
                  About Us
                </p>
              </a>
              <a href="">
                <p className="mt-2 duration-500 hover:font-semibold hover:text-black">
                  Contact
                </p>
              </a>
              <a href="">
                <p className="mt-2 duration-500 hover:font-semibold hover:text-black">
                  Support
                </p>
              </a>
            </div>
            <div className="w-[5rem]">
              <h1 className="font-semibold">RESOURCES</h1>
              <a href="">
                <p className="mt-4 duration-500 hover:font-semibold hover:text-black">
                  Blog
                </p>
              </a>
              <a href="">
                <p className="mt-2 duration-500 hover:font-semibold hover:text-black">
                  Newsletter
                </p>
              </a>
              <a href="">
                <p className="mt-2 duration-500 hover:font-semibold hover:text-black">
                  Tutorial
                </p>
              </a>
            </div>
          </div>
          <div className="mt-8 flex w-full justify-evenly md:mt-0 md:w-[40%] md:justify-between">
            <div className="w-[5rem]">
              <h1 className="font-semibold">SOCIAL</h1>
              <a target="_blank" rel="noopener noreferrer" href="">
                <p className="mt-4 duration-500 hover:font-semibold hover:text-black">
                  Twitter
                </p>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="">
                <p className="mt-2 duration-500 hover:font-semibold hover:text-black">
                  Facebook
                </p>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="">
                <p className="mt-2 duration-500 hover:font-semibold hover:text-black">
                  Instagram
                </p>
              </a>
            </div>
            <div className="w-[5rem]">
              <h1 className="font-semibold">LEGAL</h1>
              <a href="">
                <p className="mt-4 duration-500 hover:font-semibold hover:text-black">
                  Terms
                </p>
              </a>
              <a href="">
                <p className="mt-2 duration-500 hover:font-semibold hover:text-black">
                  Privacy
                </p>
              </a>
              <a href="">
                <p className="mt-2 duration-500 hover:font-semibold hover:text-black">
                  Licenses
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="mt-4 text-base font-semibold sm:mt-0 sm:text-lg md:text-xl lg:text-2xl">
            Vbtechgist
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:mt-0 md:text-base">
            &#169; 2023 Vbtechgist Company. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
