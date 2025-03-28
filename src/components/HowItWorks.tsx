
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Create an Account",
    description: "Sign up in seconds using your email or social accounts.",
    image: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1lZGljaW5lfGVufDB8fDB8fHww",
  },
  {
    number: "02",
    title: "List Your Medicines",
    description: "Add details about your unused medicines, let our AI help price them appropriately.",
    image: "https://images.unsplash.com/photo-1576671414121-aa2d60f2e9af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGljaW5lfGVufDB8fDB8fHww",
  },
  {
    number: "03",
    title: "Verification & Safety",
    description: "We verify all medicines for compliance with regulations. Safety is our top priority.",
    image: "https://images.unsplash.com/photo-1587854680352-936b22b91030?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1lZGljaW5lfGVufDB8fDB8fHww",
  },
  {
    number: "04",
    title: "Connect & Transact",
    description: "Connect with buyers/sellers or donate directly to NGOs. Complete secure transactions.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZGljaW5lfGVufDB8fDB8fHww",
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-remedidarkgray mb-4">How ReMediUse Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process makes it easy to buy, sell, and donate unused medicines safely.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-remediteal text-white text-sm font-medium px-3 py-1 rounded mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-remedidarkgray mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 right-0 transform translate-x-1/2 translate-y-1/2 z-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-remediteal opacity-70">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-remediteal hover:bg-opacity-90 h-12 px-8 text-base">
            <Link to="/register">Join ReMediUse Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
