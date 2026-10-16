import { Link } from "react-router-dom";

import ResponsiveImage from "../../ui/ResponsiveImage";

const NavLogo = () => {
  return (
    <Link
      to="/"
      aria-label="Manu — Accueil"
      className="group relative z-10 flex h-12 items-center"
    >
      <ResponsiveImage
        basePath="/media/brand/manu-complet-n"
        widths={[320, 960, 1600]}
        sizes="165px"
        alt="Manu"
        width={320}
        height={187}
        loading="eager"
        pictureClassName="block h-11 w-auto max-w-[150px] sm:h-12 sm:max-w-[165px]"
        className="h-11 w-auto max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-12 sm:max-w-[165px]"
      />
    </Link>
  );
};

export default NavLogo;
