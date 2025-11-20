import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BusinessWithUs from "./components/BusinessWithUs";
import Statistics from "./components/Statistics";
import PortfolioPages from "./Pages/PortfolioPages"; // New page for portfolios
import JoinOurTeam from "./components/JoinOurTeam";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
// import Proposal from "./Pages/Proposal";
import PreLandingPage from "./Layout/PreLandingPage";
import OpenResources from "./FooterPages/OpenResources";
import ScrollToTop from "./components/ScrollToTop";
import News from "./FooterPages/News";
import Business from "./FooterPages/Business";
import ProposalPage from "./FooterPages/ProposalPage";
import EngineeringArchitecture from "./Pages/EngineeringArchitecture";
import Construction from "./Pages/Construction";
import ResearchAndDevelopment from "./Pages/ResearchAndDevelopment";
import Quote from "./components/Quote";
import Visitors from "./components/Visitors";
import Engineers from "./Pages/Engineers";
import Contractors from "./Pages/Contractors";
import JobDetail from "./Pages/JobDetail";
// import Topbar from "./components/TopBar";
import Licenses from "./components/Licenses";
import ConstructionMaterialTesting from "./Pages/ConstructionMaterialTesting";
import PortfolioDescription from "./Pages/ProjectDescription";
import AffiliationRibbon from "./components/AffiliationRibbon";
import DesignAndEngineering from "./Pages/ServicesDropdown/DesignAndEngineering";
import LandPlanningAndPermitting from "./Pages/ServicesDropdown/LandPlanningAndPermitting";
import ConstructionMaterialSurveyAndTesting from "./Pages/ServicesDropdown/ConstructionMaterialSurveyAndTesting";
import GeoTechnicalEngineering from "./Pages/ServicesDropdown/GeoTechnicalEngineering";
import ConstructioinEngineeringAndManagement from "./Pages/ServicesDropdown/ConstructionEngineeringAndManagement";
import GeneralConstruction from "./Pages/ServicesDropdown/GeneralConstruction";
import DesignPlusBuild from "./Pages/ServicesDropdown/DesignPlusBuild";
// import Portfolio3DPage from "./Pages/Portfoilio3DPage";
import SpecialtyEngineeringServices from "./Pages/ServicesDropdown/SpecialtyEngineeringServices";

function App() {
  const [showPreLandingPage, setShowPreLandingPage] = useState(true);

  const handlePreLandingFinish = () => {
    setShowPreLandingPage(false);
  };

  return (
    <Router>
      {showPreLandingPage ? (
        <PreLandingPage onFinish={handlePreLandingFinish} />
      ) : (
        <>
          {/* Remove the fixed wrapper - let Navbar handle its own positioning */}
          {/* <Topbar /> */}
          <Navbar />
          <ScrollToTop />
          <Routes>
            {/* Home page */}
            <Route
              path="/"
              element={
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
              }
            />

            {/* Portfolio page */}
            <Route path="/portfolio" element={<PortfolioPages />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/open-resources" element={<OpenResources />} />
            <Route path="/news" element={<News />} />
            <Route path="/business" element={<Business />} />
            <Route path="/request-proposal" element={<ProposalPage />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/engineers" element={<Engineers />} />
            <Route path="/contractors" element={<Contractors />} />
            {/* <Route path="/license" element={<License />} /> */}
            <Route
              path="/project-description/:id"
              element={<PortfolioDescription />}
            />
            {/* <Route path="/portfolio/3d/:id" element={<Portfolio3DPage />} /> */}

            <Route
              path="/engineering-architecture"
              element={<EngineeringArchitecture />}
            />
            <Route path="/construction" element={<Construction />} />
            <Route
              path="/research-and-development"
              element={<ResearchAndDevelopment />}
            />
            <Route
              path="/construction-material-testing"
              element={<ConstructionMaterialTesting />}
            />
            <Route
              path="/design-engineering"
              element={<DesignAndEngineering />}
            />
            <Route
              path="/land-planning"
              element={<LandPlanningAndPermitting />}
            />
            <Route
              path="material-testing"
              element={<ConstructionMaterialSurveyAndTesting />}
            />
            <Route
              path="geotechnical-engineering"
              element={<GeoTechnicalEngineering />}
            />
            <Route
              path="construction-management"
              element={<ConstructioinEngineeringAndManagement />}
            />
            <Route
              path="general-construction"
              element={<GeneralConstruction />}
            />
            <Route path="design-plus-build" element={<DesignPlusBuild />} />
            <Route
              path="specialty-services"
              element={<SpecialtyEngineeringServices />}
            />

            {/* Add Proposal page later when ready */}
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
