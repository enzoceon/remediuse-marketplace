
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, ArrowRight, ShoppingCart, Gift } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-remedilightgray to-blue-50 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-remedidarkgray mb-4">
              <span className="text-remediteal">Buy, Sell & Donate</span> Unused Medicines
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Find affordable medicines or list your own in seconds. Help reduce waste and save lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild className="bg-remediteal hover:bg-opacity-90 h-12 px-6 text-base">
                <Link to="/buy">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-remediteal text-remediteal hover:bg-remediteal hover:text-white h-12 px-6 text-base">
                <Link to="/learn-more">Learn More</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                <div className="px-4">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for medicines..." 
                  className="py-3 px-4 w-full focus:outline-none"
                />
                <Button className="bg-remediteal hover:bg-opacity-90 m-1 rounded-full">
                  Search
                </Button>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-sm font-medium text-gray-500">Popular searches:</span>
              <Link to="/search?q=paracetamol" className="text-sm text-remediteal hover:underline">Paracetamol</Link>
              <Link to="/search?q=antibiotic" className="text-sm text-remediteal hover:underline">Antibiotics</Link>
              <Link to="/search?q=vitamins" className="text-sm text-remediteal hover:underline">Vitamins</Link>
              <Link to="/search?q=blood-pressure" className="text-sm text-remediteal hover:underline">Blood Pressure</Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2940&auto=format&fit=crop" 
              alt="Medicine Donation" 
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-remediteal bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-remediteal" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-remedidarkgray">Find Medicines</h3>
            <p className="text-gray-600 mb-4">Search for quality, unused medicines at discounted prices.</p>
            <Link to="/buy" className="flex items-center text-remediteal hover:underline">
              <span>Browse Medicines</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-remediblue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="h-6 w-6 text-remediblue" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-remedidarkgray">Sell Medicines</h3>
            <p className="text-gray-600 mb-4">Got extra medicines? List them here and recover some of your costs.</p>
            <Link to="/sell" className="flex items-center text-remediteal hover:underline">
              <span>List a Medicine</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-remediorange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <Gift className="h-6 w-6 text-remediorange" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-remedidarkgray">Donate Medicines</h3>
            <p className="text-gray-600 mb-4">Help someone in need. Donate your unused medicines to verified NGOs.</p>
            <Link to="/donate" className="flex items-center text-remediteal hover:underline">
              <span>Donate Now</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
