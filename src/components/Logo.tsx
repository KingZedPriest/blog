import Image from "next/image"; 
import Link from "next/link";
import logo from "../../public/logo.png";
export default function Logo(props: any) {
    const {renderDefault, title} = props;
    return(
        <div className="flex items-center space-x-4">
           <Link href="/"> <div className="rounded-[50%] w-10 h-10 md:w-16 md:h-16 bg-[#f4b400] p-2">
                <Image src={logo} alt="VBTechGist Logo" className="rounded-[50%]"/>
            </div> </Link>
           <h1 className="text-sm font-semibold sm:text-base md:text-lg lg:text-xl text-[#f4b400]">Welcome</h1> 
        </div>
    )
}