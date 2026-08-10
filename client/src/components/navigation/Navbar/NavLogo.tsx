import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link
      to="/"
      aria-label="Manu — Accueil"
      className="group relative z-10 flex h-11 items-center"
    >
      <img
        src="/manu_complet_N.png"
        alt="Manu"
        className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-10"
      />
    </Link>
  );
};

export default NavLogo;