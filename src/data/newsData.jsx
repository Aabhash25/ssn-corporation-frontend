export const newsData = [
  {
    id: 1,
    title:
      "SSN Corporation Expands: Moves to New Corporate Headquarters in Raleigh",
    date: "November 10, 2025",
    excerpt:
      "Major milestone achieved with new 2,000 sq. ft. corporate headquarters in Raleigh",
    images: [
      "./reception.jpg",
      "https://via.placeholder.com/800x400.png?text=Office+Interior",
      "https://via.placeholder.com/800x400.png?text=Team+Photo",
    ],
    content: [
      {
        text: `SSN Corporation is excited to announce our official move into a new
        2,000 sq. ft. corporate headquarter located in the heart of Raleigh,
        North Carolina. This transition reflects our continued growth as we
        take on more projects and expand our team. What began as a smaller home-office operation has now evolved into an
        organization of more than 30+ team members—both full-time and
        part-time—allowing us to manage a growing and diverse project
        portfolio with greater efficiency. Our new office provides a modern,
        collaborative workspace designed to enhance productivity, creativity,
        and overall client service.`,
        image: "./reception.jpg",
      },
      {
        image: "./room.jpg",
      },
      {
        text: (
          <div>
            This location now serves as the corporate headquarter for{" "}
            <a
              href="https://ssnbuilders.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              SSN Builders
            </a>{" "}
            (General Contractor),{" "}
            <a
              href="https://ssnengineers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              SSN Engineers
            </a>{" "}
            (Design Engineer), and{" "}
            <a
              href="https://ssnai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              SSN AI
            </a>{" "}
            (qtakeoff) with future expansion plans in place should additional
            space be required to support team growth.
          </div>
        ),
      },
      {
        text: `Our current project portfolio includes:`,
        list: [
          "General Construction: residential building construction projects in subdivisions, pre-construction services, land development construction management, restaurant and office upfit construction.",
          "Design and Engineering: residential and commercial building design, land planning and development engineering, permitting assistance, geotechnical investigation, foundation design, land development CMT services, and third-party inspection services for building projects.",
          "Research and Development: AI-enabled Quantity Takeoff (QTO) product automatically analyzes building plans to extract elements and generate accurate quantity takeoffs.",
        ],
        image: "./outer.jpg",
      },
      {
        text: `This move marks a major milestone for SSN Corporation. With expanded
        space, resources, and infrastructure, we are positioned better than
        ever to provide high-quality engineering and construction services. We
        look forward to welcoming our clients and partners to our new
        headquarters and continuing to build the future—together.`,
      },
    ],
    officeInfo: {
      location: "5540 Centerview Dr, Ste #304, Raleigh NC",
      email: "contact@ssncorporation.com",
      phone: "919-703-0222 (O)",
      hours: "8 AM to 5 PM (M-F)",
      parking: "Free parking within the property premises",
      mapLink:
        "https://www.google.com/maps/place/5540+Centerview+Dr,+Raleigh,+NC",
    },
  },
  {
    id: 2,
    title: "SSN AI Launches New Quantity Takeoff Tool",
    date: "February 28, 2024",
    excerpt: "Revolutionary AI tool transforms construction estimating process",
    images: [
      "https://via.placeholder.com/800x400.png?text=QTO+Dashboard",
      "https://via.placeholder.com/800x400.png?text=Plan+Analysis",
      "https://via.placeholder.com/800x400.png?text=Material+Estimation",
    ],
    content: [
      {
        text: `SSN AI has launched a cutting-edge AI-enabled Quantity Takeoff (QTO) tool
        that automatically analyzes building plans and extracts critical elements 
        to generate accurate material quantity estimates.`,
        image:
          "https://via.placeholder.com/800x400.png?text=QTO+Tool+Interface",
      },
      {
        text: `This revolutionary tool is designed to save engineers, contractors, and
        estimators significant time while increasing accuracy and reducing manual
        errors in the material estimation process. It leverages advanced machine
        learning algorithms to understand architectural and structural drawings 
        and calculate quantities for various construction materials.`,
      },
      {
        text: `Key Features of the QTO Tool include:`,
        list: [
          "Automated analysis of architectural, structural, and MEP plans.",
          "Generation of material quantity estimates for concrete, steel, wood, and more.",
          "Exportable reports in Excel, PDF, and BIM-compatible formats.",
          "Integration with project management tools for real-time updates.",
          "AI-powered suggestions for optimization and cost-saving opportunities.",
        ],
      },
      {
        text: `Since its launch, the QTO tool has been successfully implemented
        in several commercial and residential projects, improving estimation speed
        by up to 70% and reducing human error by over 50%.`,
      },
      {
        text: (
          <div>
            To learn more or request a demo, visit{" "}
            <a
              href="https://ssnai.com/qto-tool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              SSN AI QTO Tool
            </a>
            . Our team provides full onboarding support, training, and
            integration assistance for construction firms of all sizes.
          </div>
        ),
      },
    ],
    officeInfo: {
      location: "SSN AI Headquarters, 123 Innovation Way, Raleigh NC",
      email: "info@ssnai.com",
      phone: "919-555-1010",
      hours: "9 AM to 6 PM (M-F)",
      mapLink: "https://www.google.com/maps/place/Raleigh+NC",
    },
  },
];
