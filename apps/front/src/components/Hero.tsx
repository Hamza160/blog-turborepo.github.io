import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-sky-500 to-indigo-500 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center flex-wrap">
        {/*Left Col*/}
        <div className="w-full flex flex-col items-center justify-center md:w-2/5 text-center md:text-left">
          <p className="capitalize tracking-wide w-full">
            Explore insights, tutorials, and stories for curious minds like
            yours
          </p>
          <h2 className="my-5 text-5xl font-bold leading-tight">
            Welcome To Hamza Dev Blog
          </h2>
          <p className="capitalize leading-normal text-xl">
            Join a community that thrives on learning, creating and growing
            together
          </p>
        </div>
        {/*Right Col*/}
        <div className="w-full text-center py-7 md:w-3/5">
          <Image
            src="/hero.png"
            alt="Hero Section"
            className="w-full md:w-4/5"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
