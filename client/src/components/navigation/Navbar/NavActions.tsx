import { Link } from "react-router-dom";

const NavActions = () => {
  return (
    <Link
      to="/contact"
      className="group inline-flex h-11 items-center gap-3 rounded-full bg-[#111111] pl-5 pr-2 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(17,17,17,0.18)]"
    >
      <span>Parlons de votre projet</span>

      <span className="flex size-7 items-center justify-center rounded-full bg-white text-[#111111] transition-transform duration-300 group-hover:rotate-45">
        <img src="/manu_sans_titre_N.png" alt="" />
      </span>
    </Link>
  );
};

export default NavActions;