import logo1 from "../../assets/img/icons/accounts.png";
import logo2 from "../../assets/img/icons/chip.png";
import logo3 from "../../assets/img/icons/creative.png";
import logo4 from "../../assets/img/icons/marketing.png";

const CategoryList = () => {
  return (
    <div className="my-20">
      <div>
        <h2 className="text-4xl font-bold text-center my-4">
          Job Category List
        </h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className=" grid lg:grid-cols-4 grid-cols-1 justify-center  gap-8 px-28 mt-12">
        <div className="border-2 px-12 py-8  rounded-lg ">
          <div className="items-center ">
            {" "}
            <img className="w-16  " src={logo2} alt="" />
          </div>

          <h4 className="text-xl font-bold mt-6">Account & Finance</h4>
          <p>300 Jobs Available</p>
        </div>

        <div className="border-2 px-12 py-8  rounded-lg">
          <img className="w-16" src={logo3} alt="" />
          <h4 className="text-xl font-bold mt-6">Creative Design</h4>
          <p>100+ Jobs Available </p>
        </div>
        <div className="border-2 px-12 py-8  rounded-lg">
          <img className="w-16" src={logo1} alt="" />
          <h4 className="text-xl font-bold mt-6">Marketing & Sales</h4>
          <p>150 Jobs Available</p>
        </div>
        <div className="border-2 px-12 py-8  rounded-lg">
          <img className="w-16" src={logo4} alt="" />
          <h4 className="text-xl font-bold mt-6">Engineering Job</h4>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
