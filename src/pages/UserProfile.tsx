
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Settings,
  LogOut,
  ShoppingCart,
  Package,
  Heart,
  Gift,
  Bell,
  FileText,
  ChevronRight,
  Edit,
  Upload,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { medicineData } from "@/data/medicineData";

// Mock user data
const userData = {
  id: "user-123",
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
  joinDate: "2023-05-12",
  location: "New York, NY",
  phone: "+1 (555) 123-4567",
  verified: true
};

const UserProfile = () => {
  const [activeMedicines, setActiveMedicines] = useState(medicineData.slice(0, 3));
  const [wishlistItems, setWishlistItems] = useState(medicineData.slice(3, 5));
  const [purchaseHistory, setPurchaseHistory] = useState(medicineData.slice(1, 4));
  
  useEffect(() => {
    document.title = "User Profile | ReMediUse";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
                {/* User info */}
                <div className="p-6 text-center border-b border-gray-100">
                  <div className="relative inline-block">
                    <Avatar className="h-24 w-24 mx-auto">
                      <AvatarImage src={userData.profileImage} alt={userData.name} />
                      <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-white border-gray-200"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <h2 className="text-xl font-semibold mt-4 mb-1">{userData.name}</h2>
                  <p className="text-gray-500 text-sm">{userData.email}</p>
                  {userData.verified && (
                    <Badge variant="outline" className="mt-2 text-remediteal border-remediteal">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verified User
                    </Badge>
                  )}
                </div>
                
                {/* Navigation */}
                <nav className="p-2">
                  <ul className="space-y-1">
                    <li>
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
                      >
                        <User className="h-5 w-5 mr-3 text-remediteal" />
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile/listings"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <Package className="h-5 w-5 mr-3 text-gray-500" />
                        <span>My Listings</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile/purchases"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <ShoppingCart className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Purchases</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile/wishlist"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <Heart className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Wishlist</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile/donations"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <Gift className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Donations</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile/notifications"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <Bell className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Notifications</span>
                        <Badge className="ml-auto bg-remediorange">3</Badge>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile/prescriptions"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <FileText className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Prescriptions</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile/settings"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <Settings className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Settings</span>
                      </Link>
                    </li>
                    <li>
                      <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                        <LogOut className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Sign Out</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Main content */}
            <div className="md:col-span-2 lg:col-span-3">
              <h1 className="text-2xl font-bold text-remedidarkgray mb-6">My Profile</h1>
              
              <Tabs defaultValue="dashboard">
                <TabsList className="mb-6">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="personal-info">Personal Info</TabsTrigger>
                  <TabsTrigger value="address">Address</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                
                {/* Dashboard Tab */}
                <TabsContent value="dashboard">
                  {/* Stats cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-remediteal bg-opacity-10 rounded-full flex items-center justify-center mb-3">
                          <Package className="h-6 w-6 text-remediteal" />
                        </div>
                        <p className="text-gray-500 text-sm">Active Listings</p>
                        <p className="text-2xl font-bold text-remedidarkgray">{activeMedicines.length}</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-remediblue bg-opacity-10 rounded-full flex items-center justify-center mb-3">
                          <ShoppingCart className="h-6 w-6 text-remediblue" />
                        </div>
                        <p className="text-gray-500 text-sm">Purchases</p>
                        <p className="text-2xl font-bold text-remedidarkgray">{purchaseHistory.length}</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-remediorange bg-opacity-10 rounded-full flex items-center justify-center mb-3">
                          <Heart className="h-6 w-6 text-remediorange" />
                        </div>
                        <p className="text-gray-500 text-sm">Wishlist</p>
                        <p className="text-2xl font-bold text-remedidarkgray">{wishlistItems.length}</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                          <Gift className="h-6 w-6 text-green-600" />
                        </div>
                        <p className="text-gray-500 text-sm">Donations</p>
                        <p className="text-2xl font-bold text-remedidarkgray">2</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Active Listings */}
                  <Card className="mb-8">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>Active Listings</CardTitle>
                        <Button variant="ghost" className="text-remediteal" asChild>
                          <Link to="/profile/listings">View All</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {activeMedicines.length > 0 ? (
                        <div className="space-y-4">
                          {activeMedicines.map((medicine) => (
                            <div 
                              key={medicine.id} 
                              className="flex items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                            >
                              <img 
                                src={medicine.imageUrl} 
                                alt={medicine.name}
                                className="w-16 h-16 object-cover rounded-md mr-4"
                              />
                              <div className="flex-1">
                                <Link to={`/medicine/${medicine.id}`} className="font-medium text-remedidarkgray hover:text-remediteal">
                                  {medicine.name}
                                </Link>
                                <p className="text-sm text-gray-500">{medicine.brand}</p>
                                <div className="flex items-center mt-1">
                                  <Badge className={`text-xs ${
                                    new Date(medicine.expiryDate) < new Date() 
                                      ? "bg-red-100 text-red-800" 
                                      : "bg-green-100 text-green-800"
                                  }`}>
                                    Expiry: {new Date(medicine.expiryDate).toLocaleDateString()}
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-remediteal">
                                  ${(medicine.price - (medicine.price * medicine.discountPercentage / 100)).toFixed(2)}
                                </p>
                                <Button size="sm" variant="outline" className="mt-2">
                                  Edit
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <p className="text-gray-500 mb-4">You don't have any active listings.</p>
                          <Button asChild className="bg-remediteal hover:bg-opacity-90">
                            <Link to="/sell">List a Medicine</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  {/* Recent Purchases */}
                  <Card className="mb-8">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>Recent Purchases</CardTitle>
                        <Button variant="ghost" className="text-remediteal" asChild>
                          <Link to="/profile/purchases">View All</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {purchaseHistory.length > 0 ? (
                        <div className="space-y-4">
                          {purchaseHistory.map((medicine) => (
                            <div 
                              key={medicine.id} 
                              className="flex items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                            >
                              <img 
                                src={medicine.imageUrl} 
                                alt={medicine.name}
                                className="w-16 h-16 object-cover rounded-md mr-4"
                              />
                              <div className="flex-1">
                                <Link to={`/medicine/${medicine.id}`} className="font-medium text-remedidarkgray hover:text-remediteal">
                                  {medicine.name}
                                </Link>
                                <p className="text-sm text-gray-500">{medicine.brand}</p>
                                <div className="flex items-center mt-1">
                                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                                    <Clock className="h-3 w-3 mr-1" /> Purchased on {new Date().toLocaleDateString()}
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-remediteal">
                                  ${(medicine.price - (medicine.price * medicine.discountPercentage / 100)).toFixed(2)}
                                </p>
                                <Button size="sm" variant="outline" className="mt-2" asChild>
                                  <Link to={`/medicine/${medicine.id}`}>View</Link>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <p className="text-gray-500 mb-4">You haven't made any purchases yet.</p>
                          <Button asChild className="bg-remediteal hover:bg-opacity-90">
                            <Link to="/buy">Browse Medicines</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  {/* Wishlist */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>Wishlist</CardTitle>
                        <Button variant="ghost" className="text-remediteal" asChild>
                          <Link to="/profile/wishlist">View All</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {wishlistItems.length > 0 ? (
                        <div className="space-y-4">
                          {wishlistItems.map((medicine) => (
                            <div 
                              key={medicine.id} 
                              className="flex items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                            >
                              <img 
                                src={medicine.imageUrl} 
                                alt={medicine.name}
                                className="w-16 h-16 object-cover rounded-md mr-4"
                              />
                              <div className="flex-1">
                                <Link to={`/medicine/${medicine.id}`} className="font-medium text-remedidarkgray hover:text-remediteal">
                                  {medicine.name}
                                </Link>
                                <p className="text-sm text-gray-500">{medicine.brand}</p>
                                <div className="flex items-center mt-1">
                                  <Badge className={`text-xs ${
                                    new Date(medicine.expiryDate) < new Date() 
                                      ? "bg-red-100 text-red-800" 
                                      : "bg-green-100 text-green-800"
                                  }`}>
                                    Expiry: {new Date(medicine.expiryDate).toLocaleDateString()}
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-remediteal">
                                  ${(medicine.price - (medicine.price * medicine.discountPercentage / 100)).toFixed(2)}
                                </p>
                                <Button size="sm" className="mt-2 bg-remediteal hover:bg-opacity-90">
                                  Buy Now
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
                          <Button asChild className="bg-remediteal hover:bg-opacity-90">
                            <Link to="/buy">Add Medicines</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Personal Info Tab */}
                <TabsContent value="personal-info">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Full Name</label>
                          <Input defaultValue={userData.name} className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Email Address</label>
                          <Input defaultValue={userData.email} className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Phone Number</label>
                          <Input defaultValue={userData.phone} className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                          <Input type="date" className="border-gray-300" />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="bg-remediteal hover:bg-opacity-90">Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Profile Photo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src={userData.profileImage} alt={userData.name} />
                          <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 mb-4">
                            Upload a new profile photo. JPG or PNG format, max 2MB.
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button variant="outline" className="flex items-center">
                              <Upload className="mr-2 h-4 w-4" />
                              Upload Photo
                            </Button>
                            <Button variant="outline" className="text-gray-500">
                              Remove Photo
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Verification Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        {userData.verified ? (
                          <>
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Your account is verified</h3>
                              <p className="text-sm text-gray-500">
                                You have full access to all features of ReMediUse.
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                              <AlertCircle className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">Verification required</h3>
                              <p className="text-sm text-gray-500 mb-3">
                                Verify your account to access all features of ReMediUse.
                              </p>
                              <Button className="bg-remediteal hover:bg-opacity-90">
                                Verify Account
                              </Button>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Address Tab */}
                <TabsContent value="address">
                  <Card>
                    <CardHeader>
                      <CardTitle>Address Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Street Address</label>
                          <Input placeholder="123 Main St" className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Apartment, Suite, etc.</label>
                          <Input placeholder="Apt #4B" className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">City</label>
                          <Input placeholder="New York" defaultValue="New York" className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">State</label>
                          <Input placeholder="NY" defaultValue="NY" className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">ZIP Code</label>
                          <Input placeholder="10001" className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Country</label>
                          <Input placeholder="United States" defaultValue="United States" className="border-gray-300" />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="bg-remediteal hover:bg-opacity-90">Save Address</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Security Tab */}
                <TabsContent value="security">
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Current Password</label>
                          <Input type="password" className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">New Password</label>
                          <Input type="password" className="border-gray-300" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                          <Input type="password" className="border-gray-300" />
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button className="bg-remediteal hover:bg-opacity-90">Update Password</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Two-Factor Authentication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <AlertCircle className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">Protect your account</h3>
                          <p className="text-sm text-gray-500 mb-4">
                            Add an extra layer of security to your account by enabling two-factor authentication.
                          </p>
                          <Button variant="outline" className="border-remediteal text-remediteal hover:bg-remediteal hover:text-white">
                            Enable Two-Factor Authentication
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
