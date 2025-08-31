import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCaretDown } from "react-icons/ai";
import useOnClickOutside from "../hooks/useOnclickOutSide";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/operations/authAPI";

const Profile = () => {
  const { user } = useSelector((state) => state.profile);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false) );

  return (
    <button onClick={() => setOpen(!open)} className="relative">
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[24px] sm:w-[30px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-xs sm:text-sm text-richblack-100" />
      </div>
      {open && (
        <div className="absolute top-[110%] sm:top-[118%] -right-[30%] sm:-right-[50%] z-[1000] divide-y divide-richblack-700 overflow-hidden rounded-md border border-richblack-700 bg-richblack-800 min-w-[120px] sm:min-w-[160px]">
          <Link to={"/dashboard/my-profile"} onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-2 sm:py-[10px] px-3 sm:px-[12px] text-xs sm:text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard />
              Dashboard
            </div>
          </Link>
          <div
            className="flex w-full items-center gap-x-1 py-2 sm:py-[10px] px-3 sm:px-[12px] text-xs sm:text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
          >
            <VscSignOut className="text-base sm:text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  );
};
export default Profile;
