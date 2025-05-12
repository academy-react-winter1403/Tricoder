
import { useDispatch} from "react-redux";
import { OpenMenu } from "../../redux/Store/menuSlice";


const PanlsMenuButton = () => {
    const dispatch =useDispatch();

return(
  <>

    <button  className="md:hidden font-bold p-2  text-slate-500  text-xl"
    onClick={() => dispatch(OpenMenu())}>
    ☰
    </button>

  </>
)
}

export default PanlsMenuButton