
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MedicineCard from "@/components/MedicineCard";
import { Medicine, medicineData } from "@/data/medicineData";

const categories = [
  "All Categories",
  "Pain Relief",
  "Antibiotics",
  "Blood Pressure",
  "Allergy",
  "Digestive Health",
  "Vitamins"
];

const BuyMedicines = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [showPrescriptionOnly, setShowPrescriptionOnly] = useState(false);
  const [showNonPrescriptionOnly, setShowNonPrescriptionOnly] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>(medicineData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter medicines based on criteria
  useEffect(() => {
    let result = [...medicineData];
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        med => med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
               med.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "All Categories") {
      result = result.filter(med => med.category === selectedCategory);
    }
    
    // Filter by price range
    result = result.filter(
      med => {
        const discountedPrice = med.price - (med.price * (med.discountPercentage / 100));
        return discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1];
      }
    );
    
    // Filter by prescription requirement
    if (showPrescriptionOnly) {
      result = result.filter(med => med.prescription);
    } else if (showNonPrescriptionOnly) {
      result = result.filter(med => !med.prescription);
    }
    
    // Sort results
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => {
          const aPrice = a.price - (a.price * (a.discountPercentage / 100));
          const bPrice = b.price - (b.price * (b.discountPercentage / 100));
          return aPrice - bPrice;
        });
        break;
      case "price-high":
        result.sort((a, b) => {
          const aPrice = a.price - (a.price * (a.discountPercentage / 100));
          const bPrice = b.price - (b.price * (b.discountPercentage / 100));
          return bPrice - aPrice;
        });
        break;
      case "expiry":
        result.sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime());
        break;
      case "newest":
        result.sort((a, b) => new Date(b.listingDate).getTime() - new Date(a.listingDate).getTime());
        break;
      default:
        // Relevance - no specific sorting
        break;
    }
    
    setFilteredMedicines(result);
  }, [searchTerm, selectedCategory, priceRange, showPrescriptionOnly, showNonPrescriptionOnly, sortBy]);
  
  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setPriceRange([0, 20]);
    setShowPrescriptionOnly(false);
    setShowNonPrescriptionOnly(false);
    setSortBy("relevance");
  };
  
  // Toggle filter panel on mobile
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  useEffect(() => {
    document.title = "Buy Medicines | ReMediUse";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-remedidarkgray mb-2">Buy Medicines</h1>
            <p className="text-gray-600">
              Search for quality, unused medicines at discounted prices. 
              Filter by category, brand, and expiry date.
            </p>
          </div>
          
          {/* Main search bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search for medicines..."
                className="pl-10 py-6 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-remediteal hover:bg-opacity-90"
              >
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters - desktop */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-5 sticky top-24">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <Button 
                    variant="ghost" 
                    className="h-8 px-2 text-sm text-gray-500 hover:text-remediteal"
                    onClick={resetFilters}
                  >
                    Reset
                  </Button>
                </div>
                
                {/* Category filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div 
                        key={category} 
                        className={`px-3 py-2 rounded-md cursor-pointer transition-colors ${
                          selectedCategory === category 
                            ? "bg-remediteal bg-opacity-10 text-remediteal" 
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price range filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 20]}
                      max={20}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Prescription filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Prescription</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="prescription-req" 
                        checked={showPrescriptionOnly}
                        onCheckedChange={(checked) => {
                          setShowPrescriptionOnly(checked as boolean);
                          if (checked) setShowNonPrescriptionOnly(false);
                        }}
                      />
                      <label htmlFor="prescription-req" className="text-sm cursor-pointer">
                        Prescription Required
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="no-prescription" 
                        checked={showNonPrescriptionOnly}
                        onCheckedChange={(checked) => {
                          setShowNonPrescriptionOnly(checked as boolean);
                          if (checked) setShowPrescriptionOnly(false);
                        }}
                      />
                      <label htmlFor="no-prescription" className="text-sm cursor-pointer">
                        No Prescription Needed
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4 flex justify-between items-center">
              <Button 
                variant="outline" 
                className="flex items-center border-gray-300" 
                onClick={toggleFilter}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="expiry">Expiry Date</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Mobile filter panel */}
            {isFilterOpen && (
              <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
                <div className="bg-white w-4/5 max-w-md h-full overflow-y-auto">
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Filters</h3>
                    <Button variant="ghost" size="icon" onClick={toggleFilter}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="p-4 space-y-6">
                    {/* Category filter */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Category</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div 
                            key={category} 
                            className={`px-3 py-2 rounded-md cursor-pointer transition-colors ${
                              selectedCategory === category 
                                ? "bg-remediteal bg-opacity-10 text-remediteal" 
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price range filter */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                      <div className="px-2">
                        <Slider
                          defaultValue={[0, 20]}
                          max={20}
                          step={1}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="mb-4"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Prescription filter */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Prescription</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="prescription-req-mobile" 
                            checked={showPrescriptionOnly}
                            onCheckedChange={(checked) => {
                              setShowPrescriptionOnly(checked as boolean);
                              if (checked) setShowNonPrescriptionOnly(false);
                            }}
                          />
                          <label htmlFor="prescription-req-mobile" className="text-sm cursor-pointer">
                            Prescription Required
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="no-prescription-mobile" 
                            checked={showNonPrescriptionOnly}
                            onCheckedChange={(checked) => {
                              setShowNonPrescriptionOnly(checked as boolean);
                              if (checked) setShowPrescriptionOnly(false);
                            }}
                          />
                          <label htmlFor="no-prescription-mobile" className="text-sm cursor-pointer">
                            No Prescription Needed
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-gray-200 flex space-x-3">
                    <Button 
                      variant="outline" 
                      className="flex-1" 
                      onClick={resetFilters}
                    >
                      Reset
                    </Button>
                    <Button 
                      className="flex-1 bg-remediteal hover:bg-opacity-90" 
                      onClick={toggleFilter}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Product listing */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-gray-600">
                    Showing <span className="font-medium">{filteredMedicines.length}</span> medicines
                  </span>
                </div>
                
                {/* Desktop sort */}
                <div className="hidden lg:block">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="expiry">Expiry Date</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Active filter badges */}
              {(selectedCategory !== "All Categories" || 
                searchTerm || 
                priceRange[0] > 0 || 
                priceRange[1] < 20 || 
                showPrescriptionOnly || 
                showNonPrescriptionOnly) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCategory !== "All Categories" && (
                    <Badge 
                      className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200"
                      onClick={() => setSelectedCategory("All Categories")}
                    >
                      {selectedCategory} <X className="ml-1 h-3 w-3" />
                    </Badge>
                  )}
                  
                  {searchTerm && (
                    <Badge 
                      className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200"
                      onClick={() => setSearchTerm("")}
                    >
                      Search: {searchTerm} <X className="ml-1 h-3 w-3" />
                    </Badge>
                  )}
                  
                  {(priceRange[0] > 0 || priceRange[1] < 20) && (
                    <Badge 
                      className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200"
                      onClick={() => setPriceRange([0, 20])}
                    >
                      Price: ${priceRange[0]} - ${priceRange[1]} <X className="ml-1 h-3 w-3" />
                    </Badge>
                  )}
                  
                  {showPrescriptionOnly && (
                    <Badge 
                      className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200"
                      onClick={() => setShowPrescriptionOnly(false)}
                    >
                      Prescription Required <X className="ml-1 h-3 w-3" />
                    </Badge>
                  )}
                  
                  {showNonPrescriptionOnly && (
                    <Badge 
                      className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200"
                      onClick={() => setShowNonPrescriptionOnly(false)}
                    >
                      No Prescription <X className="ml-1 h-3 w-3" />
                    </Badge>
                  )}
                  
                  <Button 
                    variant="link" 
                    className="text-sm h-7 text-gray-600 hover:text-remediteal"
                    onClick={resetFilters}
                  >
                    Clear All
                  </Button>
                </div>
              )}
              
              {/* Medicine cards grid */}
              {filteredMedicines.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMedicines.map((medicine) => (
                    <MedicineCard
                      key={medicine.id}
                      id={medicine.id}
                      name={medicine.name}
                      brand={medicine.brand}
                      price={medicine.price}
                      discountPercentage={medicine.discountPercentage}
                      expiryDate={medicine.expiryDate}
                      imageUrl={medicine.imageUrl}
                      category={medicine.category}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <Search className="h-12 w-12 text-gray-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No medicines found</h3>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any medicines matching your criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-remediteal text-remediteal hover:bg-remediteal hover:text-white"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BuyMedicines;
