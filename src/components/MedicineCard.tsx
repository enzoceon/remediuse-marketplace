
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface MedicineCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  discountPercentage: number;
  expiryDate: string;
  imageUrl: string;
  category: string;
}

const MedicineCard = ({
  id,
  name,
  brand,
  price,
  discountPercentage,
  expiryDate,
  imageUrl,
  category,
}: MedicineCardProps) => {
  // Calculate days until expiry
  const today = new Date();
  const expiry = new Date(expiryDate);
  const daysUntilExpiry = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  // Get expiry status color
  const getExpiryStatusColor = () => {
    if (daysUntilExpiry <= 30) return "bg-red-100 text-red-800";
    if (daysUntilExpiry <= 90) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  // Calculate discounted price
  const discountedPrice = price - (price * (discountPercentage / 100));

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-48 w-full object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-remediteal text-white">
          {category}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link to={`/medicine/${id}`}>
              <h3 className="font-medium text-lg hover:text-remediteal transition-colors">
                {name}
              </h3>
            </Link>
            <p className="text-gray-500 text-sm">{brand}</p>
          </div>
          <div className="text-right">
            {discountPercentage > 0 && (
              <p className="text-gray-500 line-through text-sm">${price.toFixed(2)}</p>
            )}
            <p className="font-semibold text-lg text-remediteal">
              ${discountedPrice.toFixed(2)}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className={`text-xs px-2 py-1 rounded-full ${getExpiryStatusColor()}`}>
            {daysUntilExpiry > 0 
              ? `Expires in ${daysUntilExpiry} days` 
              : "Expired"}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button 
          className="w-full bg-remediblue hover:bg-blue-600" 
          variant="default"
          asChild
        >
          <Link to={`/medicine/${id}`}>View Details</Link>
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          className="border-remediteal text-remediteal hover:bg-remediteal hover:text-white"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MedicineCard;
