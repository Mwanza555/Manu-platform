import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

import { navigation } from "./navigation";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-50 flex size-11 items-center justify-center rounded-full border border-[#111111]/10 bg-white text-[#111111] transition-all duration-300 hover:bg-[#111111] hover:text-white"
      >
        {open ? (
          <X size={18} strokeWidth={1.7} />
        ) : (
          <Menu size={19} strokeWidth={1.7} />
        )}
      </button>

      {open && (
        <div className="fixed left-1/2 top-[72px] z-40 w-[calc(100vw-2rem)] max-w-[360px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#111111]/10 bg-[#f4f3ef]/95 shadow-[0_25px_70px_rgba(17,17,17,0.12)] backdrop-blur-xl">
          <div className="p-3">
            {/* <div className="border-b border-[#111111]/10 px-3 pb-4 pt-2">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#111111]/35">
                Navigation
              </span>
            </div> */}

            <ul className="py-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-xl px-3 py-3.5 text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-[#111111] text-white"
                          : "text-[#111111]/65 hover:bg-[#111111]/[0.05] hover:text-[#111111]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-3">

                          {item.label}
                        </span>

                        <span
                          className={`text-sm transition-transform duration-200 ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                          }`}
                        >
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#111111]/10 p-2 pt-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="group flex min-h-12 items-center justify-between rounded-xl bg-[#111111] px-4 text-sm font-semibold text-white"
              >
                <span>Parlons de votre projet</span>

                <span className="flex size-7 items-center justify-center rounded-full bg-white text-[#111111] transition-transform duration-300 group-hover:rotate-45">
                  <img src="/manu_sans_titre_N.png" alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;