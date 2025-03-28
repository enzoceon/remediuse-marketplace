
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Heart, ShoppingCart, ArrowLeft, Shield, User, MapPin, Package, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Medicine, medicineData } from "@/data/medicineData";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MedicineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [medicine, setMedicine] = useState<Medicine | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you would fetch the medicine data from an API
    const fetchMedicine = () => {
      setLoading(true);
      try {
        const found = medicineData.find(med => med.id === id);
        if (found) {
          setMedicine(found);
          document.title = `${found.name} | ReMediUse`;
        }
      } catch (error) {
        console.error("Error fetching medicine:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMedicine();
    window.scrollTo(0, 0);
  }, [id]);

  // Calculate days until expiry
  const calculateDaysUntilExpiry = () => {
    if (!medicine) return 0;
    
    const today = new Date();
    const expiry = new Date(medicine.expiryDate);
    return Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  };
  
  const daysUntilExpiry = calculateDaysUntilExpiry();
  
  // Get expiry status color
  const getExpiryStatusColor = () => {
    if (daysUntilExpiry <= 30) return "bg-red-100 text-red-800";
    if (daysUntilExpiry <= 90) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  // Calculate discounted price
  const calculateDiscountedPrice = () => {
    if (!medicine) return 0;
    return medicine.price - (medicine.price * (medicine.discountPercentage / 100));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading medicine details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!medicine) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Medicine Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the medicine you're looking for.</p>
            <Button asChild>
              <Link to="/buy">Browse Medicines</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back navigation */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-remediteal">
              <Link to="/buy" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Medicines
              </Link>
            </Button>
          </div>
          
          {/* Medicine Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Medicine Image */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img 
                  src={medicine.imageUrl} 
                  alt={medicine.name} 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-remediteal text-white">
                  {medicine.category}
                </Badge>
              </div>
            </div>
            
            {/* Medicine Info */}
            <div>
              <h1 className="text-3xl font-bold text-remedidarkgray mb-2">{medicine.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{medicine.brand}</p>
              
              <div className="flex items-center space-x-3 mb-5">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className={`text-sm px-3 py-1 rounded-full ${getExpiryStatusColor()}`}>
                  {daysUntilExpiry > 0 
                    ? `Expires in ${daysUntilExpiry} days (${new Date(medicine.expiryDate).toLocaleDateString()})` 
                    : "Expired"}
                </span>
              </div>
              
              <div className="flex items-center mb-6">
                {medicine.discountPercentage > 0 && (
                  <span className="text-gray-500 line-through text-lg mr-3">${medicine.price.toFixed(2)}</span>
                )}
                <span className="text-3xl font-bold text-remediteal">
                  ${calculateDiscountedPrice().toFixed(2)}
                </span>
                {medicine.discountPercentage > 0 && (
                  <Badge className="ml-3 bg-remediorange text-white">
                    {medicine.discountPercentage}% OFF
                  </Badge>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">Quantity: <strong>{medicine.quantity} units</strong></span>
                </div>
                <div className="flex items-center">
                  <Info className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">Condition: <strong>{medicine.condition}</strong></span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">Listed on: <strong>{new Date(medicine.listingDate).toLocaleDateString()}</strong></span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">Prescription: <strong>{medicine.prescription ? "Required" : "Not Required"}</strong></span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-5 mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Seller: <strong>{medicine.sellerName}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Location: <strong>{medicine.location}</strong></span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-remediteal hover:bg-opacity-90 h-12 text-base flex-1">
                  Buy Now
                </Button>
                <Button variant="outline" className="border-remediteal text-remediteal hover:bg-remediteal hover:text-white h-12 text-base flex-1">
                  Contact Seller
                </Button>
                <Button variant="outline" size="icon" className="border-gray-300 text-gray-500 hover:bg-gray-100 h-12 w-12">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tabs for additional information */}
          <Tabs defaultValue="description" className="w-full mb-10">
            <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="dosage">Dosage</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-remedidarkgray">About this medicine</h3>
                  <p className="text-gray-700 leading-relaxed">{medicine.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="dosage" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-remedidarkgray">Dosage Information</h3>
                  <p className="text-gray-700 mb-4">This medicine comes in {medicine.dosage} form.</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-800 font-medium">Always follow your doctor's instructions for the correct dosage.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="safety" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-remedidarkgray">Verification & Safety</h3>
                  <div className="flex items-start mb-4">
                    <Shield className="h-6 w-6 text-remediteal mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">Verified by ReMediUse</p>
                      <p className="text-gray-600">This medicine has been verified for authenticity and compliance.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Safety Tips</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Always check expiry dates before purchase</li>
                      <li>Verify the medicine's packaging is intact</li>
                      <li>Consult with your doctor before using new medication</li>
                      <li>Report any suspicious listings to our support team</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Similar Medicines */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-remedidarkgray mb-6">Similar Medicines</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {medicineData
                .filter(med => med.category === medicine.category && med.id !== medicine.id)
                .slice(0, 4)
                .map(med => (
                  <Card key={med.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img
                        src={med.imageUrl}
                        alt={med.name}
                        className="h-48 w-full object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-remediteal text-white">
                        {med.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-4">
                      <Link to={`/medicine/${med.id}`} className="block">
                        <h3 className="font-medium text-lg hover:text-remediteal transition-colors mb-1">
                          {med.name}
                        </h3>
                      </Link>
                      <p className="text-gray-500 text-sm mb-2">{med.brand}</p>
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-remediteal">
                          ${(med.price - (med.price * med.discountPercentage / 100)).toFixed(2)}
                        </p>
                        <Button size="sm" variant="outline" className="border-remediteal text-remediteal hover:bg-remediteal hover:text-white">
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MedicineDetail;
