import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import React from "react";

const RequirementsField = ({
  name,
  label,
  register,
  setValue,
  errors,
  getValues,
}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementsList, setRequirementsList] = useState([]);
  const { editCourse, course } = useSelector((state) => state.course);

  //   useEffect(()=>{
  //     setValue(name,requirementsList);
  //   },[requirementsList])

  useEffect(() => {
    if (editCourse) {
      console.log("courseDe",course)
      setRequirementsList(course?.instructions);
      console.log("courseRe",course?.instructions);
    }
    register(name, { required: true, validate: (value) => value.length > 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValue(name, requirementsList);
    console.log("req",requirementsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requirementsList]);

  const handleOnAdd = () => {
    console.log("first", requirement);
    if (requirement) {
      setRequirementsList([...requirementsList, requirement])
      console.log(requirementsList);
      setRequirement("");
    }
  };

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementsList([...requirementsList, requirement])
      setRequirement("")
    }
  }

  const handleOnClear = (index) => {
    const updateReuirement = [...requirementsList];
    updateReuirement.splice(index, 1);
    setRequirementsList(updateReuirement);
  };
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label className="text-richblack-5 text-sm sm:text-base">{label}</label>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="text"
          id={name}
          value={requirement}
          placeholder=""
          onChange={(e) => setRequirement(e.target.value)}
          className="form-style py-2 sm:py-3 px-3 sm:px-4 bg-richblack-700 rounded-md w-full text-richblack-300 text-xs sm:text-base"
        />
        <button
          type="button"
          onClick={handleOnAdd}
          className="font-semibold text-yellow-50 text-xs sm:text-base px-3 py-2"
        >
          Add
        </button>
      </div>

      {requirementsList.length > 0 && (
        <ul className="mt-2 list-inside list-disc text-xs sm:text-base">
          {requirementsList.map((item, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <span>{item}</span>
              <button
                type="button"
                onClick={() => handleOnClear(idx)}
                className="ml-2 text-pink-200 text-xs sm:text-base"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  );
};

export default RequirementsField;
