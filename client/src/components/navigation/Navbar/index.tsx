import Container from "../../ui/Container";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

import useScroll from "../../../hooks/useScroll";

const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-3 pt-3 transition-all duration-500 sm:px-4 sm:pt-4 ${
        isScrolled ? "pt-2 sm:pt-3" : ""
      }`}
    >
      <Container>
        <nav
          className={`relative mx-auto flex h-[68px] items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:h-[72px] sm:px-5 ${
            isScrolled
              ? "border border-[#111111]/10 bg-white/75 shadow-[0_16px_50px_rgba(17,17,17,0.08)] backdrop-blur-xl"
              : "border border-transparent bg-white/90 backdrop-blur-sm"
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