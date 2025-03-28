
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Menu, 
  X,
  PlusCircle,
  Gift,
  LogIn,
  LogOut
} from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user, isAuthenticated, login, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = async () => {
    await login("google");
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-remediteal font-bold text-2xl">ReMedi</span>
            <span className="text-remediblue font-bold text-2xl">Use</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex space-x-6 items-center">
              <Link to="/buy" className="text-remedidarkgray hover:text-remediteal transition-colors">
                Buy
              </Link>
              <Link to="/sell" className="text-remedidarkgray hover:text-remediteal transition-colors">
                Sell
              </Link>
              <Link to="/donate" className="text-remedidarkgray hover:text-remediteal transition-colors">
                Donate
              </Link>
              <Link to="/verification" className="text-remedidarkgray hover:text-remediteal transition-colors">
                Verification
              </Link>
              <Link to="/help" className="text-remedidarkgray hover:text-remediteal transition-colors">
                Help
              </Link>
            </div>
          )}

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="w-5 h-5 text-remedidarkgray" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Wishlist">
              <Heart className="w-5 h-5 text-remedidarkgray" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="w-5 h-5 text-remedidarkgray" />
            </Button>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full" aria-label="Profile">
                    <Avatar>
                      <AvatarImage src={user?.photoURL} />
                      <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile/listings" className="cursor-pointer w-full">My Listings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile/donations" className="cursor-pointer w-full">My Donations</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button className="bg-remediteal hover:bg-opacity-90 text-white rounded-md" onClick={handleLogin}>
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Menu" 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-remedidarkgray" />
            ) : (
              <Menu className="w-6 h-6 text-remedidarkgray" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden mt-3 pb-3 space-y-2">
            <Link to="/buy" className="block py-2 px-4 text-remedidarkgray hover:bg-gray-50 rounded-md">
              Buy
            </Link>
            <Link to="/sell" className="block py-2 px-4 text-remedidarkgray hover:bg-gray-50 rounded-md">
              Sell
            </Link>
            <Link to="/donate" className="block py-2 px-4 text-remedidarkgray hover:bg-gray-50 rounded-md">
              Donate
            </Link>
            <Link to="/verification" className="block py-2 px-4 text-remedidarkgray hover:bg-gray-50 rounded-md">
              Verification
            </Link>
            <Link to="/help" className="block py-2 px-4 text-remedidarkgray hover:bg-gray-50 rounded-md">
              Help
            </Link>
            <div className="flex space-x-4 px-4 pt-2">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="w-5 h-5 text-remedidarkgray" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Wishlist">
                <Heart className="w-5 h-5 text-remedidarkgray" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Cart">
                <ShoppingCart className="w-5 h-5 text-remedidarkgray" />
              </Button>
              {isAuthenticated ? (
                <Link to="/profile">
                  <Button variant="ghost" size="icon" aria-label="Profile">
                    <Avatar>
                      <AvatarImage src={user?.photoURL} />
                      <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </Link>
              ) : null}
            </div>
            <div className="px-4 pt-2">
              {isAuthenticated ? (
                <Button className="w-full bg-remediteal hover:bg-opacity-90 text-white rounded-md" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Sign Out
                </Button>
              ) : (
                <Button className="w-full bg-remediteal hover:bg-opacity-90 text-white rounded-md" onClick={handleLogin}>
                  <LogIn className="mr-2 h-4 w-4" /> Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
