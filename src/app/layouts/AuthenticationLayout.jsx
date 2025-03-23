import { Outlet, useLocation } from "react-router-dom"
// import image from "../../assets/icons'/close-circle.png"

const AuthenticationLayout = ()=>{
    const location = useLocation();
    const getTitle = () => {
        switch (location.pathname) {
            case "/authentication/login":
                return "ورود به حساب";
            case "/authentication/code":
                return " کد تاییدیه ";
            case "/authentication/CreateAcount":
                return " ساخت حساب کابری ";
            default:
                return "ورود به حساب";
        }
    };


    return(
        <div className="flex fixed top-0 left-0 justify-center items-center w-screen h-screen border-1 ">
            
            <div className=" w-67  bg-white rounded-2xl relative z-500">
                <div className=" w-65 h-20 flex justify-between items-center px-4">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 "> 
                        {/* <img src={image} className="w-50/100 m-auto mt-2" alt="" /> */}
                    </div>
                    <h1 className="font-yekan-600 text-lg"> {getTitle()}</h1>
                </div>

                <div>
                    <Outlet/>
                </div>
            </div>
            <div className="bg-overlay  fixed top-0 left-0 w-1440 h-900 backdrop-blur-lg z-300 "></div>
        </div>
    )
}


export {AuthenticationLayout} 

