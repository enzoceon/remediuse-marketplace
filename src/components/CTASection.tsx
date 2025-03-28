
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-remediteal to-remediblue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the ReMediUse Community?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Start buying, selling, or donating medicines today. Join thousands of users making healthcare more accessible.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="secondary" className="h-12 px-8 text-base font-medium">
            <Link to="/register">Create an Account</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 px-8 text-base font-medium bg-transparent border-white text-white hover:bg-white hover:text-remediteal">
            <Link to="/learn-more">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
