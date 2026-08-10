import { NavLink } from "react-router-dom";
import { navigation } from "./navigation";

const NavLinks = () => {
  return (
    <div className="flex items-center gap-7">
      {navigation.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.href === "/"}
          className={({ isActive }) =>
            `group relative py-2 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
              isActive
                ? "text-[#111111]"
                : "text-[#111111]/50 hover:text-[#111111]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span>{item.label}</span>

              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[#111111] transition-all duration-300 ${
                  isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

              {isActive && (
                <span className="absolute -right-1 -top-0.5 size-1 rounded-full bg-[#111111]" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;