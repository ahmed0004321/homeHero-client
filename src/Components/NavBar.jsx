import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use, useState } from "react";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, setUser, logOut, loading } = use(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogOut = () => {
    logOut().then(() => setUser(null));
    Swal.fire({
      title: "Success",
      text: "Logout Successful",
      icon: "success",
      background: "rgba(255,255,255,0.08)",
      color: "white",
      backdrop: "rgba(0,0,0,0.3)",
    });
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 glass-nav ">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <Link to="/">
          <div className="text-xl font-semibold text-white nav-title">
            HomeHero
          </div>
        </Link>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* Middle: Navigation Links (Desktop Only) */}
        <ul className="hidden md:flex gap-10 text-white font-medium absolute left-1/2 -translate-x-1/2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-1 rounded-full transition ${
                isActive
                  ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-md text-white"
                  : "hover:text-purple-300"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-4 py-1 rounded-full transition ${
                isActive
                  ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-md text-white"
                  : "hover:text-purple-300"
              }`
            }
          >
            Services
          </NavLink>

          {user && (
            <>
              <NavLink
                to="/myServices"
                className={({ isActive }) =>
                  `px-4 py-1 rounded-full transition ${
                    isActive
                      ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-md text-white"
                      : "hover:text-purple-300"
                  }`
                }
              >
                My Services
              </NavLink>

              <NavLink
                to="/addServices"
                className={({ isActive }) =>
                  `px-4 py-1 rounded-full transition ${
                    isActive
                      ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-md text-white"
                      : "hover:text-purple-300"
                  }`
                }
              >
                Add Services
              </NavLink>

              <NavLink
                to="/myBookings"
                className={({ isActive }) =>
                  `px-4 py-1 rounded-full transition ${
                    isActive
                      ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-md text-white"
                      : "hover:text-purple-300"
                  }`
                }
              >
                My Bookings
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `px-4 py-1 rounded-full transition ${
                    isActive
                      ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-md text-white"
                      : "hover:text-purple-300"
                  }`
                }
              >
                Profile
              </NavLink>
            </>
          )}
        </ul>

        {/* Right Side: Theme Toggle + (Avatar or Login/Register) */}
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle Button */}
          <label className="swap swap-rotate text-white">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Auth Logic */}
          {loading ? (
            <div
              className="w-10 h-10 rounded-full animate-pulse"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            ></div>
          ) : user ? (
            <div className="relative inline-block">
              <div
                tabIndex={0}
                className="w-10 h-10 rounded-full border border-white/20 shadow-sm p-0 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(14px)",
                }}
                onClick={(e) => {
                  const menu = e.currentTarget.nextElementSibling;
                  menu.classList.toggle("hidden");
                }}
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={user?.photoURL || "https://placeholder.co/150"}
                  alt="User"
                />
              </div>

              <ul
                className="hidden absolute right-0 mt-2 w-40 p-2 rounded-2xl shadow-lg text-white text-sm"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <li>
                  <Link
                    to="/profile"
                    className="block px-2 py-1 hover:bg-white/10 rounded transition"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <a className="block px-2 py-1 hover:bg-white/10 rounded transition">
                    Settings
                  </a>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={handleLogOut}
                    className="block px-2 py-1 hover:bg-white/10 rounded transition"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className="px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden w-full px-6 py-4 text-white space-y-4"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(14px)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <NavLink to="/" className="block">
            Home
          </NavLink>
          <NavLink to="/services" className="block">
            Services
          </NavLink>
          <NavLink to="/myServices" className="block">
            My Services
          </NavLink>
          <NavLink to="/addServices" className="block">
            Add Services
          </NavLink>
          <NavLink to="/myBookings" className="block">
            My Bookings
          </NavLink>
          <NavLink to="/profile" className="block">
            Profile
          </NavLink>

          {!user && (
            <div className="flex gap-4 pt-4">
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;