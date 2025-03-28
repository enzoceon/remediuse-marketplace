
import { 
  Brain, 
  Calendar, 
  Heart, 
  ShieldCheck, 
  AlertCircle, 
  Bell
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-remediteal" />,
    title: "Smart AI Pricing",
    description: "Our AI automatically calculates the best price based on expiry date and demand."
  },
  {
    icon: <Calendar className="h-8 w-8 text-remediteal" />,
    title: "Expiry Tracking",
    description: "Never let medicines go to waste. Get reminders before they expire."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-remediteal" />,
    title: "Verification & Safety",
    description: "All medicines are checked for compliance. Buy and sell with confidence."
  },
  {
    icon: <Bell className="h-8 w-8 text-remediteal" />,
    title: "Wishlist & Alerts",
    description: "Save medicines for later and get alerts when they become available."
  },
  {
    icon: <AlertCircle className="h-8 w-8 text-remediteal" />,
    title: "Emergency Requests",
    description: "Need medicine urgently? Post a request and get fast responses."
  },
  {
    icon: <Heart className="h-8 w-8 text-remediteal" />,
    title: "NGO Partnerships",
    description: "We work with NGOs to distribute donated medicines to those in need."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-remedidarkgray mb-4">Why Choose ReMediUse?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform offers innovative features to make buying, selling, and donating medicines 
            simple, safe and beneficial for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-remedidarkgray mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
