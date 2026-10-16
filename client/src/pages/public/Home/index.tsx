import HomeHero from "../../../components/home/HomeHero";
import HomeAbout from "../../../components/home/HomeAbout";
import HomeServices from "../../../components/home/HomeServices";
import HomePortfolio from "../../../components/home/HomePortfolio";
import HomeProcess from "../../../components/home/HomeProcess";
import HomeContact from "../../../components/home/HomeContact";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomePortfolio />
      <HomeServices />
      <HomeProcess />
      <HomeAbout />
      <HomeContact />
    </>
  );
};

export default HomePage;
