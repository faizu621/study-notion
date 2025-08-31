import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { BsCart } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import Profile from "../Profile";

//const subLinks=[]
// const subLinks = [
//   {
//     title: "Python",
//     link: "/catalog/python",
//   },
//   {
//     title: "javascript",
//     link: "/catalog/javascript",
//   },
//   {
//     title: "web-development",
//     link: "/catalog/web-development",
//   },
//   {
//     title: "Android Development",
//     link: "/catalog/Android Development",
//   },
// ];
const Navbar = () => {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  //console.log(token);
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSubLinks = async () => {
    try {
      setLoading(true);
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("printing sublinks result : ", result);
      setSubLinks(result.data.data);
      console.log(subLinks);
      setLoading(false);
    } catch (error) {
      console.log("could not fetch category links");
    }
  };
  useEffect(() => {
    fetchSubLinks();
  }, []);
  // useEffect(() => {
  //     (async () => {
  //       setLoading(true)
  //       try {
  //         const res = await apiConnector("GET", categories.CATEGORIES_API)
  //         setSubLinks(res.data.data)
  //         console.log(subLinks);
  //       } catch (error) {
  //         console.log("Could not fetch Categories.", error)
  //       }
  //       setLoading(false)
  //     })()
  //   },[])
  const pathMatch = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  //console.log(subLinks[0]._id);

  // Responsive menu state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b border-b-richblack-700 w-full bg-richblue-900 sticky top-0 z-50">
      <div className="h-14 w-full max-w-screen-xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            width={"140"}
            height={"32"}
            className="h-fit object-cover my-auto w-auto max-h-10"
          />
        </div>

        {/* Hamburger for mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center ml-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-richblack-5 mb-1"></span>
          <span className="block w-6 h-0.5 bg-richblack-5 mb-1"></span>
          <span className="block w-6 h-0.5 bg-richblack-5"></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-col items-center">
          <ul className="flex text-richblack-5 items-center gap-8 xl:gap-10 text-base xl:text-lg">
            {NavbarLinks.map((element, index) => (
              <li key={index} className="relative">
                {element.title === "Catalog" ? (
                  <div className="flex gap-x-1 items-center group cursor-pointer">
                    <p>Catalog</p>
                    <RiArrowDropDownLine className="text-2xl" />
                    <div className="w-4 h-4 rotate-45 absolute top-full left-1/2 -translate-x-1/2 bg-richblack-5 invisible group-hover:visible transition-all duration-200"></div>
                    <div className="flex flex-col invisible absolute w-48 bg-richblack-5 top-[110%] left-1/2 -translate-x-1/2 z-10 group-hover:visible transition-all duration-200 text-black p-4 rounded-md shadow-lg">
                      {subLinks?.length ? (
                        subLinks.map((subLink, index) => (
                          <Link
                            to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                            className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50 w-full"
                            key={index}
                          >
                            <p className="text-black">{subLink.name}</p>
                          </Link>
                        ))
                      ) : (
                        <p className="text-black">No data found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={element?.path}>
                    <p
                      className={
                        pathMatch(element?.path)
                          ? "text-yellow-25"
                          : "text-richblack-5"
                      }
                    >
                      {element.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop login/signup/profile/cart */}
        <div className="hidden lg:flex gap-x-4 items-center">
          {user && user.accountType !== "instructor" && (
            <div className="text-richblack-5">
              <Link to={"/dashboard/cart"} className="relative">
                <BsCart size={25} />
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              </Link>
            </div>
          )}
          {token == null && (
            <Link to={"/login"}>
              <button className="px-3 py-2 bg-richblack-800 text-richblack-100 border border-richblack-700 rounded-md">Log In</button>
            </Link>
          )}
          {token == null && (
            <Link to={"/signup"}>
              <button className="px-3 py-2 bg-richblack-800 text-richblack-100 border border-richblack-600 rounded-md">Sign Up</button>
            </Link>
          )}
          {token != null && <Profile />}
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="absolute top-14 left-0 w-full bg-richblue-900 border-b border-richblack-700 flex flex-col items-center py-4 z-40 lg:hidden animate-fadeIn">
            <ul className="flex flex-col gap-4 w-full items-center">
              {NavbarLinks.map((element, index) => (
                <li key={index} className="w-full text-center">
                  {element.title === "Catalog" ? (
                    <div className="flex flex-col items-center group cursor-pointer relative">
                      <p>Catalog</p>
                      <RiArrowDropDownLine className="text-2xl" />
                      <div className="flex flex-col absolute w-40 bg-richblack-5 top-8 left-1/2 -translate-x-1/2 z-10 text-black p-2 rounded-md shadow-lg">
                        {subLinks?.length ? (
                          subLinks.map((subLink, index) => (
                            <Link
                              to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                              className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50 w-full"
                              key={index}
                              onClick={() => setMenuOpen(false)}
                            >
                              <p className="text-black">{subLink.name}</p>
                            </Link>
                          ))
                        ) : (
                          <p className="text-black">No data found</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={element?.path} onClick={() => setMenuOpen(false)}>
                      <p
                        className={
                          pathMatch(element?.path)
                            ? "text-yellow-25"
                            : "text-richblack-5"
                        }
                      >
                        {element.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 mt-4 w-full items-center">
              {user && user.accountType !== "instructor" && (
                <div className="text-richblack-5">
                  <Link to={"/dashboard/cart"} className="relative" onClick={() => setMenuOpen(false)}>
                    <BsCart size={25} />
                    <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                      {totalItems}
                    </span>
                  </Link>
                </div>
              )}
              {token == null && (
                <Link to={"/login"} onClick={() => setMenuOpen(false)}>
                  <button className="px-3 py-2 bg-richblack-800 text-richblack-100 border border-richblack-700 rounded-md w-32">Log In</button>
                </Link>
              )}
              {token == null && (
                <Link to={"/signup"} onClick={() => setMenuOpen(false)}>
                  <button className="px-3 py-2 bg-richblack-800 text-richblack-100 border border-richblack-600 rounded-md w-32">Sign Up</button>
                </Link>
              )}
              {token != null && <Profile />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
