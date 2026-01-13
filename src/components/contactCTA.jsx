const ContactCTA = ({
  title = "Ready to Start Your Project?",
  description = "We are ready to assist you with reliable, data-driven, and optimized engineering solutions. Our team of experts is dedicated to providing you with the best possible service and support. We are here to help you with your project from start to finish. We are here to help you with your project from start to finish.",
  buttonText = "Contact Us",
  link = "/contact",
}) => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-screen-xl mx-auto bg-yellow-400 rounded-lg p-10">
        <div className="text-center">
          {/* Text Content */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#242687] font-playfair">
                {title}
              </h3>
              <button
                onClick={() => (window.location.href = link)}
                className="px-10 py-3 bg-[#242687] text-white font-semibold rounded-lg hover:bg-blue-800 hover:shadow-lg transition-all duration-300 whitespace-nowrap transform hover:scale-105"
              >
                {buttonText}
              </button>
            </div>
            <p className="text-[#242687] text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
