import Image from "next/image";
import Link from "next/link";
import HeadLogo from "../../assets/HeadLogo.png";
import UserImg from "../../assets/profile.png";
function Navbar() {
  return (
    <header className="flex items-center px-14 py-4 ">
      <div className="w-3/4">
        <Image src={HeadLogo} alt="logo" />
      </div>
      <div className="flex items-center justify-between  w-1/4">
        <Link href="/">Home</Link>
        <Link href="/">Creators</Link>
        <Link href="/" className="text-preprimary">
          My Campaign
        </Link>
        <Image src={UserImg} alt="user" />
      </div>
    </header>
  );
}

export default Navbar;
