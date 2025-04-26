import { Link } from "react-router-dom";
import http from "../../../core/services/interceptor/index";
import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import axios from "axios";



const DashboardPage = () => {

    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const panelRes = await axios.get("https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo");
                console.log(panelRes);
                setStudentData(panelRes?.data)
            } catch (error) {
                console.error("error")
            }
        };

        fetchData();
    }, []);



    return (
        <div className="  h-[590px]">

            <div className="border-3 mx-[25px] h-[160px] mt-[40px] rounded-[16px] border-[#ccc] overflow-hidden" >

                <div className=" flex justify-around mt-[20px]">
                    <div className=" ">
                        <span className="text-[20px] font-yekan-500 text-[#8f979a]"> شماره همراه: </span>
                        <span className="text-[20px] font-yekan-500 text-[#3939b3] mr-[5px] tracking-[5px]">09010114397</span>
                    </div>
                    <div className=" ">
                        <span className="text-[20px] font-yekan-500 text-[#8f979a]"> تاریخ تولد: </span>
                        <span className="text-[20px] font-yekan-500 text-[#3939b3] mr-[5px] tracking-[5px]"> 1404/01/21 </span>
                    </div>

                    <div className=" ">
                        <span className="text-[20px] font-yekan-500 text-[#8f979a]"> نام و نام خانوادگی: </span>
                        <span className="text-[20px] font-yekan-500 text-[#3939b3] mr-[5px]"> بیتا قنبری </span>
                    </div>


                </div>
                <div className=" flex mt-[40px] justify-end mr-[65px] gap-[130px]">

                    <div className="flex flex-row-reverse " >
                        <span className="text-[20px] font-yekan-500 text-[#8f979a]"> :ایمیل</span>
                        <span className="text-[20px] font-yekan-500 text-[#3939b3] mr-[5px] tracking-[3px]"> bitaqanbari@gmail.com</span>
                    </div>
                    <div className=" ">
                        <span className="text-[20px] font-yekan-500 text-[#8f979a]"> شماره ملی: </span>
                        <span className="text-[20px] font-yekan-500 text-[#3939b3] mr-[5px]"> 1234567890 </span>
                    </div>

                </div>
                <Link to="/Studentpanel/editprofile">
                    <div
                        className="border-3 w-[120px] text-[#3939b3] border-[#ccc] h-[50px] pt-[10px] text-center
                    rounded-tr-lg text-[15px] font-yekan-500">  ویرایش
                    </div>
                </Link>


            </div>

            <div className=" mx-[25px] h-[250px] mt-[70px]  border-[#ccc] flex justify-center gap-[40px]" >

                <div className=" w-[470px]">
                    <div className=" text-right ">دوره های پیشنهادی </div>

                    <div className=" w-full h-[80px] mt-[40px] rounded-[16px] shadow-[0px_0px_7px_0px_#ddd] flex justify-center gap-[10px] items-center">
                        <div className=" w-[350px] h-[60px] text-right">
                            <div className=" text-[17px] font-yekan-500  tracking-[1px]"> html اموزش رایگان  </div>
                            <div className=" mt-[10px] flex justify-between h-[20px]">
                                <div className="  text-[15px] font-yekan-500 flex gap-[5px]">
                                    <span className="block"> تومان </span>
                                    <span className="block text-[#6d0092] text-[17px]"> 500,000</span>

                                </div>
                                <div className=" text-[12px] text-[#7a7a7a] font-yekan-500"> دکتر بحرالعلوم</div>

                            </div>
                        </div>

                        <div className="border-1 w-[80px] h-[60px] rounded-[12px]"></div>
                    </div>

                    <div className=" w-full h-[80px] mt-[15px] rounded-[16px]  shadow-[0px_0px_7px_0px_#ddd] flex justify-center gap-[10px] items-center">
                        <div className=" w-[350px] h-[60px] text-right">
                            <div className=" text-[17px] font-yekan-500  tracking-[1px]"> html اموزش رایگان  </div>
                            <div className=" mt-[10px] flex justify-between h-[20px]">
                                <div className="  text-[15px] font-yekan-500 flex gap-[5px]">
                                    <span className="block"> تومان </span>
                                    <span className="block text-[#6d0092] text-[17px]"> 500,000</span>

                                </div>
                                <div className=" text-[12px] text-[#7a7a7a] font-yekan-500"> دکتر بحرالعلوم</div>

                            </div>
                        </div>

                        <div className="border-1 w-[80px] h-[60px] rounded-[12px]"></div>
                    </div>
                </div>

                <div className=" w-[470px]">
                    <div className=" text-right  text-[23px] font-yekan-700"> آخرین دوره ثبت شده  </div>
                    <div className=" w-full h-[80px] mt-[40px] rounded-[16px] shadow-[0px_0px_7px_0px_#ddd] flex justify-center gap-[10px] items-center">
                        <div className=" w-[350px] h-[60px] text-right">
                            <div className=" text-[17px] font-yekan-500  tracking-[1px]"> html اموزش رایگان  </div>
                            <div className=" mt-[10px] flex justify-between h-[20px]">
                                <div className="  text-[15px] font-yekan-500 flex gap-[5px]">
                                    <span className="block"> تومان </span>
                                    <span className="block text-[#6d0092] text-[17px]"> 500,000</span>

                                </div>
                                <div className=" text-[12px] text-[#7a7a7a] font-yekan-500"> دکتر بحرالعلوم</div>

                            </div>
                        </div>

                        <div className="border-1 w-[80px] h-[60px] rounded-[12px]"></div>
                    </div>
                    <div className=" w-full h-[80px] mt-[15px] rounded-[16px]  shadow-[0px_0px_7px_0px_#ddd]  flex justify-center gap-[10px] items-center">
                        <div className=" w-[350px] h-[60px] text-right">
                            <div className=" text-[17px] font-yekan-500  tracking-[1px]"> html اموزش رایگان  </div>
                            <div className=" mt-[10px] flex justify-between h-[20px]">
                                <div className="  text-[15px] font-yekan-500 flex gap-[5px]">
                                    <span className="block"> تومان </span>
                                    <span className="block text-[#6d0092] text-[17px]"> 500,000</span>

                                </div>
                                <div className=" text-[12px] text-[#7a7a7a] font-yekan-500"> دکتر بحرالعلوم</div>

                            </div>
                        </div>

                        <div className="border-1 w-[80px] h-[60px] rounded-[12px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}






export default DashboardPage;

