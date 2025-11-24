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
    <nav className="w-full fixed top-0 left-0 z-50 glass-nav">
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

        {/* Right Side (Avatar or Login/Register) */}
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
