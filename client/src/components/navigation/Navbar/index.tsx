import Container from "../../ui/Container";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

import useScroll from "../../../hooks/useScroll";

const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <Container>
        <nav
          className={`pointer-events-auto relative mx-auto flex h-[64px] items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:h-[68px] sm:px-5 ${
            isScrolled
              ? "border border-[#111111]/10 bg-white/72 shadow-[0_18px_55px_rgba(17,17,17,0.12)] backdrop-blur-2xl"
              : "border border-[#111111]/[0.06] bg-white/55 shadow-[0_10px_35px_rgba(17,17,17,0.04)] backdrop-blur-xl"
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
      </Container>
    </header>
  );
};

export default Navbar;