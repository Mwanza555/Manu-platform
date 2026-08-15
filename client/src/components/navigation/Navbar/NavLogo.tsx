import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link
      to="/"
      aria-label="Manu — Accueil"
      className="group relative z-10 flex h-12 items-center"
    >
      <img
        src="/manu_complet_N.png"
        alt="Manu"
        className="h-11 w-auto max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-12 sm:max-w-[165px]"
      />
    </Link>
  );
};

export default NavLogo;