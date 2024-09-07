"use client"
import logo from "@/assets/logo.png";
import Image from "next/image";
const Navbar = () => {
    return (
        <div className="bg-[#22313f] h-[120px] py-5 px-4">
            <div className="bg-white w-20 rounded-full">
                <Image src={logo} alt="logo" height={80} width={80}></Image>
            </div>
        </div>
    )
}

export default Navbar