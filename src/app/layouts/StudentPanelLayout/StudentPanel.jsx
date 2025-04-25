import Sidebar from "./sidbar/sidbar";
import PanlsMenuButton from "../panelsMenuButton";
import Basket from "../../../assets/icons/Basket.png";
import notification from "../../../assets/icons/notification.png";

const StudentPanel = ({ children }) => {
  return (
    <>
      <div className="  border  w-[100%]     h-auto   lg:h-[110vh]  bg-[#EEF2FF]   flex  p-7 gap-7 "   style={{direction:"ltr"}}>
        <div className="md:w-[80%]  w-[99%]  h-[98%]    ">
          <div className="w-[100%]   h-[100%]   rounded-2xl bg-white  ">
            <header className="w[98%]  h-[4rem] flex  items-center  justify-between   p-6 ">
              <div className=" w-[4rem]    h-[2rem]     flex  justify-between">
                <img className="w-[25px]     h-[25px]   " src={Basket} alt="" />
                <img
                  className="w-[25px]   h-[25px] "
                  src={notification}
                  alt=""
                />
              </div>

              <div className="flex   items-center  text-slate-500  ">
                <h1 className="  font-bold    ">حساب کاربری</h1>
                <PanlsMenuButton />
              </div>
            </header>
            <hr className="w-[98%]   mx-auto   border-slate-500" />

            {children}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default StudentPanel;
