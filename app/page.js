import { Fragment } from "react";
import Image from "next/image";
import SearchIcon from "../assets/search-icon.png";
import CardOne from "../assets/cardone.png";
import CardTwo from "../assets/cardtwo.png";
import DropIcon from "../assets/drop-icon.png";
function Home() {
  return (
    <Fragment>
      <section className=" mt-10 flex justify-center">
        <div className="w-9/12 ">
          <p
            className="font-bold text-3xl flex justify-center tracking-wide w-full"
            style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <span className="text-preprimary mr-1">Free</span>Instagram
            Engagement Rate Calculator
          </p>
          <p className="flex justify-center text-grey text-lg font-semibold w-full">
            Try our free engagement Rate Calculator to find out the engagement
            of any Instagram account
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex my-2 bg-white w-1/2">
          <div className="flex border-2 border-preprimary rounded-l-lg w-10/12">
            <Image src={SearchIcon} alt="search" className="mx-10 my-4" />
            <input type="text" className="w-full border-0 outline-none" />
            <Image src={DropIcon} alt="search" className="mx-5 my-6" />
          </div>
          <button className="bg-preprimary text-white border-3 border-preprimary w-2/12 rounded-r-lg">
            Check
          </button>
        </div>
      </section>
      <section>
        <div className="flex flex-row justify-center">
          <Image src={CardOne} alt="card" />
          <Image src={CardTwo} alt="card" />
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
