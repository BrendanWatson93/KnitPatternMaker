import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[90vh]  bg-black">
      <h1 className="text-white text-5xl text-center pt-16 ">
        Learn, Develop, Design, Create.
      </h1>
      <div className="flex justify-center">
      <p className="text-white py-6 text-center text-opacity-70 max-w-[70%]">
        Some sort of writing to explain what services are on offer. Write about
        the software available to help people design their own knitting
        patterns. Also, tell them about being able to use the site to learn all
        sorts of techniques, from basic to advanced. They can also sign up for
        the blog or newsletter (TBC) and get updates, as well as support on
        socials and patreon.
      </p>
      </div>
      <div className="text-center pb-8">
        <button className="text-center bg-gradient-to-br from-blue-600 to-violet-800  px-3 py-1 text-white font-semibold rounded-md hover:text-[#1f1137] hover:bg-white hover:font-semibold">
          GET STARTED
        </button>
      </div>

      <div className="flex pt-8 justify-items-center gap-8 px-8">
        <div className="max-w-[70%] grow text-center p-6 border bg-black rounded-3xl">
          {" "}
          <p className="text-white text-3xl font-light">HEADINGS</p>
          <p className="text-white py-2 text-opacity-70">
            TESTING TEXT COLOURS
          </p>
          <button className="bg-gradient-to-br from-blue-600 to-violet-800  px-3 py-1 text-white font-semibold rounded-md hover:text-[#1f1137] hover:bg-white hover:font-semibold">
            TEST BUTTON
          </button>
        </div>

        <div className="w-auto text-center p-6 bg-gradient-to-br from-blue-800 to-violet-700 rounded-3xl">
          {" "}
          <Image
            width={350}
            height={200}
            src="/DesignerKnit2.jpeg"
            alt={"DesignerImage2"}
            className="rounded-2xl"
          ></Image>
        </div>
      </div>
    </div>
  );
}

// bg-white rounded-lg p-8 bg-opacity-30 backdrop-filter backdrop-blur-lg
// bg-gradient-to-br from-[#5d34a5] to-[#482980]
