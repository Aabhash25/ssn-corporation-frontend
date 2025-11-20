import React, { useState } from "react";

const newsData = [
  {
    id: 1,
    title:
      "SSN Corporation Expands: Moves to New Corporate Headquarters in Raleigh",
    date: "November 18, 2025",
    imageUrls: ["/office1.jpg", "/office2.jpg", "/office4.jpg"],
    content: [
      "SSN Corporation is excited to announce our official move into a new 2,000 sq. ft. corporate headquarter located in the heart of Raleigh, North Carolina. This transition reflects our continued growth as we take on more projects and expand our team. What began as a smaller home-office operation has now evolved into an organization of more than 30+ team members—both full-time and part-time—allowing us to manage a growing and diverse project portfolio with greater efficiency. Our new office provides a modern, collaborative workspace designed to enhance productivity, creativity, and overall client service. This location now serves as the corporate headquarter for SSN Builders (General Contractor), SSN Engineers (Design Engineer), and SSN AI (qtakeoff) with future expansion plans in place should additional space be required to support team growth.",
      "Our current project portfolio includes a wide range of services. In General Construction, we handle residential building construction projects in subdivisions, pre-construction services, land development construction management, and restaurant/office upfits. Our Design and Engineering division covers residential and commercial building design, land planning, permitting assistance, geotechnical investigation, foundation design, land development CMT services, and third-party inspections. Finally, our Research and Development team is focused on an AI-enabled Quantity Takeoff (QTO) product that automatically analyzes building plans to extract elements and generate accurate quantity takeoffs.",
      "This move marks a major milestone for SSN Corporation. With expanded space, resources, and infrastructure, we are positioned better than ever to provide high-quality engineering and construction services. We look forward to welcoming our clients and partners to our new headquarters and continuing to build the future—together. Our office is located at 5540 Centerview Dr, Ste #304, Raleigh NC. Contact us at contact@ssncorporation.com or 919-703-0222 (O). Visiting hours are 8 AM to 5 PM (M-F) with free parking available.",
    ],
  },
  {
    id: 2,
    title: "SSN AI Launches New QTO Beta",
    date: "November 1, 2025",
    imageUrls: [
      "https://placehold.co/1000x750/FFF9E6/D69E2E?text=QTO+Beta+Launch",
      "https://placehold.co/1000x750/FFF9E6/D69E2E?text=QTO+Screenshot",
      "https://placehold.co/1000x750/FFF9E6/D69E2E?text=QTO+Team",
    ],
    content: [
      "SSN AI is proud to announce the beta launch of its revolutionary AI-enabled Quantity Takeoff (QTO) product. This advanced tool is designed to streamline the pre-construction process for general contractors, design engineers, and project managers, providing faster and more accurate quantity takeoffs directly from building plans.",
      "The QTO Beta leverages cutting-edge AI algorithms to automatically detect and quantify structural elements, materials, and fixtures from both 2D construction plans. By eliminating manual calculations, the tool drastically reduces human error and improves the efficiency of project cost estimation, scheduling, and procurement.",
      "Our Research and Development team has rigorously tested the QTO system on various project types, from residential buildings to large-scale commercial complexes. The beta version includes user-friendly features such as detailed reports, material breakdowns, and real-time data visualization to help teams make better-informed decisions.",
      "With the launch of the QTO Beta, SSN AI aims to empower construction teams to save time, reduce costs, and focus on strategic planning rather than repetitive manual work. We are excited to gather user feedback during this beta phase to refine and expand the product’s capabilities for future releases.",
      "SSN AI is committed to revolutionizing the construction industry through AI-driven solutions, and this beta launch marks a significant step towards smarter, faster, and more accurate project planning. For more information or to request a demo, please contact our team at takeoff@ssncorporation.com.",
    ],
  },
  {
    id: 3,
    title: "SSN Corporation Opens New Office in Nepal",
    date: "November 20, 2025",
    imageUrls: [
      "https://placehold.co/1000x750/DEF3FF/2E83D6?text=Nepal+Office+Exterior",
      "https://placehold.co/1000x750/DEF3FF/2E83D6?text=Nepal+Team+Working",
      "https://placehold.co/1000x750/DEF3FF/2E83D6?text=Design+Consultation+Support",
    ],
    content: [
      "SSN Corporation is proud to announce the grand opening of our new office in Nepal. This expansion marks a major milestone in our growth strategy and strengthens our global presence. The Nepal office will serve as a dedicated hub for design and consultation support, providing efficient engineering solutions for projects both locally and internationally.",
      "The new office is staffed by over 12 highly skilled engineers, covering all engineering disciplines, including civil, structural, electrical, and mechanical. This diverse team allows us to provide comprehensive services that range from conceptual design and project planning to detailed technical support and consultation for ongoing projects.",
      "By establishing a presence in Nepal, SSN Corporation aims to better support our international projects, offering faster turnaround times and localized insights. The office is equipped with modern workspaces and collaborative tools to ensure seamless integration with our headquarters and other global teams.",
      "Our engineers in Nepal will work closely with clients and project teams to deliver high-quality design, planning, and consultation services. This initiative reflects SSN Corporation's commitment to leveraging global talent and providing exceptional service across all regions.",
      "We are excited about this new chapter in Nepal and look forward to delivering innovative engineering solutions with the support of our dedicated local team. For more information or to connect with our Nepal office, please contact us at contact@ssncorporation.com.",
    ],
  },
];

export default function App() {
  const [selectedNewsId, setSelectedNewsId] = useState(newsData[0].id);
  const selectedNews = newsData.find((news) => news.id === selectedNewsId);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");
        .font-inter {
          font-family: "Inter", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row pt-20 font-inter">
        {/* Sidebar */}
        <aside className="w-full lg:w-96 bg-white shadow-lg flex-shrink-0">
          <div className="p-6 lg:p-10 sticky top-0">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 lg:mb-10 font-playfair">
              All News
            </h2>
            <nav className="space-y-3 lg:space-y-4">
              {newsData.map((news) => (
                <button
                  key={news.id}
                  onClick={() => setSelectedNewsId(news.id)}
                  className={`w-full text-left p-4 lg:p-6 rounded-xl lg:rounded-2xl transition-all duration-300 text-base lg:text-lg border-2 ${
                    selectedNewsId === news.id
                      ? "bg-blue-50 border-blue-300 shadow-lg text-blue-900 font-semibold"
                      : "border-transparent hover:bg-gray-50 hover:border-gray-200 text-gray-700"
                  }`}
                >
                  <div className="text-sm text-gray-500 mb-1">{news.date}</div>
                  <div className="leading-tight">{news.title}</div>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* News Content */}
        <main className="flex-1">
          {selectedNews && (
            <article className="bg-white w-full min-h-screen">
              <div className="px-4 sm:px-8 lg:px-20 py-12 lg:py-24">
                <header className="max-w-5xl mb-10 lg:mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-playfair mb-4 text-left">
                    {selectedNews.title}
                  </h2>
                  <time className="text-base sm:text-xl text-gray-500 block text-left">
                    {selectedNews.date}
                  </time>
                </header>

                {/* Desktop images floated right */}
                <div className="hidden lg:block float-right ml-6 xl:ml-12 mb-6 xl:mb-12 w-full max-w-[420px] xl:max-w-[480px] space-y-4 xl:space-y-8">
                  {selectedNews.imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`${selectedNews.title} - Image ${index + 1}`}
                      className="w-full h-48 sm:h-56 xl:h-72 object-cover rounded-2xl shadow-md border border-gray-100"
                    />
                  ))}
                </div>

                {/* Text content */}
                <div className="max-w-prose space-y-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mr-0 lg:mr-6">
                  {selectedNews.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="clear-both" />

                {/* Mobile images */}
                <div className="lg:hidden mt-8 sm:mt-12 space-y-4 sm:space-y-6">
                  {selectedNews.imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`${selectedNews.title} - Image ${index + 1}`}
                      className="w-full h-48 sm:h-56 object-cover rounded-2xl"
                    />
                  ))}
                </div>

                <footer className="mt-16 sm:mt-24 pt-8 border-t border-gray-200 text-center text-gray-500 max-w-4xl mx-auto">
                  SSN Corporation © 2025 • Raleigh, North Carolina
                </footer>
              </div>
            </article>
          )}
        </main>
      </div>
    </>
  );
}
