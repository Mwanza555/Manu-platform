import ContentCreation from "../../../components/services/ContentCreation";
import EventVisuals from "../../../components/services/EventVisuals";
import ServicesClosing from "../../../components/services/ServicesClosing";
import ServicesHero from "../../../components/services/ServicesHero";
import ServicesOverview from "../../../components/services/ServicesOverview";
import ServicesUnity from "../../../components/services/ServicesUnity";
import VisualIdentity from "../../../components/services/VisualIdentity";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <VisualIdentity />
      <EventVisuals />
      <ContentCreation />
      <ServicesUnity />
      <ServicesClosing />
    </>
  );
};

export default ServicesPage;
