import HomeHero from "../../../components/home/HomeHero";
import HomeAbout from "../../../components/home/HomeAbout";
import HomeServices from "../../../components/home/HomeServices";
import HomePortfolio from "../../../components/home/HomePortfolio";
import HomeContact from "../../../components/home/HomeContact";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomePortfolio/>
      <HomeContact />
    </>
  );
};

export default HomePage;