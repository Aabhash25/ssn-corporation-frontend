const loaders = {
  "/about": () => import("./Pages/AboutUs"),
  "/portfolio": () => import("./Pages/PortfolioPages"),
  "/contact": () => import("./Pages/Contact"),
  "/career": () => import("./Pages/Career"),
  "/news": () => import("./FooterPages/News"),
  "/gallery": () => import("./FooterPages/Gallery"),
  "/business": () => import("./FooterPages/Business"),
  "/request-proposal": () => import("./FooterPages/ProposalPage"),
  "/open-resources": () => import("./FooterPages/OpenResources"),
  "/building-service-design": () =>
    import("./Pages/ServicesDropdown/BuildingServiceDesign/BuildingServiceDesign"),
  "/land-planning": () =>
    import("./Pages/ServicesDropdown/LandPlanningAndPermitting/LandPlanningAndPermitting"),
  "/structural-engineering": () =>
    import("./Pages/ServicesDropdown/StructuralEngineering/StructuralEngineering"),
  "/construction-administration": () =>
    import("./Pages/ServicesDropdown/ConstructionAdministration/ConstructionAdministration"),
  "/material-testing": () =>
    import("./Pages/ServicesDropdown/ConstructionMaterialSurveyAndTesting/ConstructionMaterialSurveyAndTesting"),
  "/geotechnical-engineering": () =>
    import("./Pages/ServicesDropdown/GeotechnicalEngineering/GeoTechnicalEngineering"),
  "/stormwater-management-drainage-engineering": () =>
    import("./Pages/ServicesDropdown/WaterResources"),
  "/tenant-fit-outs": () =>
    import("./Pages/ServicesDropdown/TenantFitOuts/TenantFitOuts"),
  "/specialty-services": () =>
    import("./Pages/ServicesDropdown/SpecialtyEngineeringServices/SpecialtyEngineeringServices"),
  "/pre-construction": () => import("./Pages/ServicesDropdown/PreConstruction"),
  "/general-construction": () => import("./Pages/ServicesDropdown/GeneralConstruction"),
  "/design-plus-build": () => import("./Pages/ServicesDropdown/DesignPlusBuild"),
  "/construction-management": () =>
    import("./Pages/ServicesDropdown/ConstructionManagement"),
};

export const preloadRoute = (to) => {
  const path = String(to).split("#")[0].split("?")[0];
  loaders[path]?.().catch(() => {});
};