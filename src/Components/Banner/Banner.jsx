import bnarimg from "../../assets/img/images/user.png";

const Banner = () => {
  return (
    <div>
      <div className="hero py-20 bg-base-200">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse ">
          <img src={bnarimg} className=" lg:w-5/12  rounded-lg  shadow-2xl" />
          <div>
            <h1 className="text-6xl leading-tight font-bold">
              One Step <br /> Closer To Your <br /> <span>Dream Job</span>{" "}
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. <br /> Its your future. Come and You can find it. Manage
              all the information <br /> your job application from start to
              finish.
            </p>
            {/* <div className="flex items-center ">
            <input type="text" placeholder="Find Your Job ..." className="input input-bordered input-info w-full max-w-xs" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 -ml-12 border-l-2 pl-3" fill="none" viewBox="0 0 24 24" 
            stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>

            </div> */}

            <button className="btn btn-success text-white">Find Your Jobs</button>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
