import Image from "next/image";
import Link from "next/link";
import logo from "../img/dark.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between ">
      <Link href="/">
        <Image src={logo} alt="Brainergybyleo" width={40} />

        <Avatar>
          <AvatarImage src="https:github.com/shadcn.png" />
        </Avatar>
      </Link>
    </div>
  );
};

export default Navbar;
