"use client";

function Banner() {
  return (
    <>
      <div className="mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
        <div>
          <h1 className=" bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-8xl font-extrabold text-transparent">
            BLOG TITRE
          </h1>

          <h2 className="mt-5 text-gray-500 md:mt-0">
            welcome to every developers favourite blog in the devosphere
          </h2>
        </div>

        {/* <p className="mt-5 max-w-sm text-gray-400 md:mt-2">
        fdsdjqfdjsdfhjfjdqdsjj kjdfngnfdsgnsfdkgnjd fdnjkn
      </p> */}
      </div>
    </>
  );
}

export default Banner;
