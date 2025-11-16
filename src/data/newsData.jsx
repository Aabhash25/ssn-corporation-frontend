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
    images: [""],
    content: [
      {
        text: `SSN AI has launched a cutting-edge AI-enabled Quantity Takeoff tool
        that automatically analyzes building plans...`,
      },
      {
        text: `This innovation is designed to save engineers and contractors time
        while increasing accuracy in material estimation.`,
      },
    ],
  },
];
