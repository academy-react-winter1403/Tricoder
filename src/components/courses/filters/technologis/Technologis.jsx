import React, { useEffect, useState } from "react";
import http from "../../../../core/services/interceptor";
import { Field, Form, Formik } from "formik";

const TechnologisList = ({ techName, id }) => {
  return (
    <div className=" flex flex-row-reverse justify-end gap-[8px] mb-[8px] mt-[12px]">
      <label className="font-yekan-500 text-[#455A64] text-[14px] block ">
        <Field
          type="checkbox"
          name="lslmdlasm"
          value={id}
          className={`border-1 w-[20px] h-[20px] block rounded-[8px]  peer-checked:bg-[#2196F3] border-[#CFD8DC] bg-[#ECEFF1]`}
        />

        {techName}
      </label>
    </div>
  );
};

const Technologis = () => {
  const [techs, setTechs] = useState([]);
  const [value, setValue] = useState(undefined);

  const getTechnologisData = async () => {
    try {
      const result = await http.get("/Home/GetTechnologies");

      setTechs(result);
    } catch (error) {
      console.log(error);
      setTechs([]);
    }
  };
  useEffect(() => {
    console.log("Calling API...");
    getTechnologisData();
  }, []);

  return (
    <div className=" h-[200px] overflow-auto">
      <Formik
        initialValues={{ lslmdlasm: [] }}
        // onSubmit={async (values) => {
        //   await sleep(500);
        //   alert(JSON.stringify(values, null, 2));
        // }}
        onSubmit={(value) => console.log(value)}
      >
        <Form>
          <button type="submit">dasdasd</button>
          <div role="group" aria-labelledby="checkbox-group">
            {techs?.map((item, index) => (
              <TechnologisList
                key={index}
                techName={item.techName}
                id={item.id}
              />
            ))}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { Technologis };
