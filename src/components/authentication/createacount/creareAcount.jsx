import { Field, Formik } from "formik"
import { Form } from "react-router-dom"
import { Button } from "../../common/button/button"
import { AuthSuggestion } from "../../common/AuthSuggestion/AuthSuggestion"

const CreateAcount = ()=>{
    return(
        <div className="w-58 h-36 m-auto mb-4">
            <div>
                <Formik>
                    <Form>
                        <Field 
                        className="border-1 w-full h-9 rounded-2xl border-gray-300 my-2  font-yekan-400 text-[11px] text-right
                        pr-4 tracking-tight outline-none" 
                        placeHolder="شماره موبایل"/>
                    </Form>
                </Formik>
            </div>
            <Button text={"دریافت کد تایید"}/>
            <AuthSuggestion question={"حساب کاربری دارید؟ "} suggest={"وارد شوید  "}/>
        </div>
    )
}

export {CreateAcount}