import Hero from "../components/Hero";
import Visitors from "../components/Visitors";
import Services from "../components/Services";
import Licenses from "../components/Licenses";
import BusinessWithUs from "../components/BusinessWithUs";
import Statistics from "../components/Statistics";
import JoinOurTeam from "../components/JoinOurTeam";
import Testimonials from "../components/Testimonials";
import AffiliationRibbon from "../components/AffiliationRibbon";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Visitors />
      <Services />
      <Licenses />
      <BusinessWithUs />
      <Statistics />
      <JoinOurTeam />
      <Testimonials />
      <AffiliationRibbon />
    </>
  );
}
