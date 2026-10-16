import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

import useScroll from "../../../hooks/useScroll";

const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full px-3 pt-2 sm:px-4 sm:pt-3">
      <div className="mx-auto w-full max-w-7xl md:px-5 lg:px-7">
        <nav
          className={`pointer-events-auto relative mx-auto flex h-[64px] items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:h-[68px] sm:px-5 ${
            isScrolled
              ? "border border-white/75 bg-white/90 shadow-[0_18px_55px_rgba(17,17,17,0.12)] backdrop-blur-2xl"
              : "border border-white/70 bg-white/85 shadow-[0_10px_35px_rgba(17,17,17,0.08)] backdrop-blur-xl"
          }`}
        >
          <NavLogo />

          <div className="hidden items-center gap-8 lg:flex">
            <NavLinks />
            <NavActions />
          </div>

          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
