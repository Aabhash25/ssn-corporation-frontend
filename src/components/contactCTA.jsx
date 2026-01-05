const ContactCTA = ({
  title = "Ready to Start Your Project?",
  description = "We are ready to assist you with reliable, data-driven, and optimized engineering solutions.",
  buttonText = "Contact Us",
  link = "/contact",
  image = "/geotech.webp"
}) => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto bg-blue-500 rounded-lg p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {title}
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl">
              {description}
            </p>
            <button
              onClick={() => (window.location.href = link)}
              className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {buttonText}
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-end -mt-4">
            <div className="relative w-full max-w-sm h-48 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={image}
                alt="Engineering team"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
