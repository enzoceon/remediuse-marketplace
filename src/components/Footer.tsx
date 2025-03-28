
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-remediteal font-bold text-2xl">ReMedi</span>
              <span className="text-remediblue font-bold text-2xl">Use</span>
            </div>
            <p className="text-gray-600 mb-4">
              Buy, sell, and donate unused medicines to help those in need.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-remediteal">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-remediteal">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-remediteal">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-remedidarkgray">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/buy" className="text-gray-600 hover:text-remediteal">
                  Buy Medicines
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-600 hover:text-remediteal">
                  Sell Medicines
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-600 hover:text-remediteal">
                  Donate Medicines
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-gray-600 hover:text-remediteal">
                  Emergency Requests
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-600 hover:text-remediteal">
                  NGO Partners
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-remedidarkgray">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-remediteal">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/verification" className="text-gray-600 hover:text-remediteal">
                  Verification Process
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-remediteal">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-remediteal">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-remediteal">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-remedidarkgray">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-600" />
                <a href="mailto:info@remediuse.com" className="text-gray-600 hover:text-remediteal">
                  info@remediuse.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-600" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-remediteal">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium text-gray-700 mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-remediteal focus:border-transparent w-full"
                />
                <button className="bg-remediteal hover:bg-opacity-90 text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ReMediUse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
