
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Camera, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

const formSchema = z.object({
  medicineName: z.string().min(3, { message: "Medicine name is required" }),
  brand: z.string().min(2, { message: "Brand name is required" }),
  expiryDate: z.string().min(1, { message: "Expiry date is required" }),
  quantity: z.string().min(1, { message: "Quantity is required" }),
  price: z.string().min(1, { message: "Price is required" }),
  description: z.string().optional(),
  address: z.string().min(5, { message: "Address is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  email: z.string().email({ message: "Valid email is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const SellMedicine = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [image, setImage] = useState<string | null>(null);
  const [document, setDocument] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user?.email || "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to list a medicine",
        variant: "destructive",
      });
      return;
    }

    if (!image) {
      toast({
        title: "Image required",
        description: "Please upload an image of the medicine",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Medicine listed successfully",
        description: "Your medicine has been listed for sale",
      });
      setIsSubmitting(false);
      navigate("/profile");
    }, 2000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDocument(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-remedidarkgray mb-2">Sell Medicine</h1>
            <p className="text-gray-600">
              List your unused medicines to help others and recover some of your costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Medicine Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="medicineName">Medicine Name *</Label>
                        <Input
                          id="medicineName"
                          placeholder="Enter medicine name"
                          {...register("medicineName")}
                        />
                        {errors.medicineName && (
                          <p className="text-red-500 text-sm">{errors.medicineName.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="brand">Brand *</Label>
                        <Input
                          id="brand"
                          placeholder="Enter brand name"
                          {...register("brand")}
                        />
                        {errors.brand && (
                          <p className="text-red-500 text-sm">{errors.brand.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          type="date"
                          {...register("expiryDate")}
                        />
                        {errors.expiryDate && (
                          <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity *</Label>
                        <Input
                          id="quantity"
                          type="number"
                          placeholder="Number of units"
                          {...register("quantity")}
                        />
                        {errors.quantity && (
                          <p className="text-red-500 text-sm">{errors.quantity.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="price">Price (USD) *</Label>
                        <Input
                          id="price"
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...register("price")}
                        />
                        {errors.price && (
                          <p className="text-red-500 text-sm">{errors.price.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Add additional details about the medicine"
                        className="h-24"
                        {...register("description")}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <Label>Medicine Image *</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          {image ? (
                            <div className="space-y-2">
                              <img
                                src={image}
                                alt="Medicine preview"
                                className="max-h-40 mx-auto rounded"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => setImage(null)}
                              >
                                Remove Image
                              </Button>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <div className="flex justify-center">
                                <Camera className="h-10 w-10 text-gray-400" />
                              </div>
                              <p className="text-sm text-gray-500">
                                Upload a clear image of the medicine
                              </p>
                              <label className="inline-block">
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="cursor-pointer"
                                  onClick={() => {
                                    const uploadElement = document.getElementById("image-upload");
                                    if (uploadElement) {
                                      uploadElement.click();
                                    }
                                  }}
                                >
                                  Upload Image
                                </Button>
                                <input
                                  id="image-upload"
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handleImageUpload}
                                />
                              </label>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <Label>Verification Document</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          {document ? (
                            <div className="space-y-2">
                              <div className="bg-gray-100 p-2 rounded">
                                <p className="text-sm font-medium truncate">Document uploaded</p>
                              </div>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => setDocument(null)}
                              >
                                Remove Document
                              </Button>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <div className="flex justify-center">
                                <Upload className="h-10 w-10 text-gray-400" />
                              </div>
                              <p className="text-sm text-gray-500">
                                Upload a document for verification (optional)
                              </p>
                              <label className="inline-block">
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="cursor-pointer"
                                  onClick={() => {
                                    const uploadElement = document.getElementById("document-upload");
                                    if (uploadElement) {
                                      uploadElement.click();
                                    }
                                  }}
                                >
                                  Upload Document
                                </Button>
                                <input
                                  id="document-upload"
                                  type="file"
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  className="hidden"
                                  onChange={handleDocumentUpload}
                                />
                              </label>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="address">Address *</Label>
                          <Input
                            id="address"
                            placeholder="Enter your address"
                            {...register("address")}
                          />
                          {errors.address && (
                            <p className="text-red-500 text-sm">{errors.address.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            placeholder="Enter your phone number"
                            {...register("phone")}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm">{errors.phone.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email")}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-remediteal hover:bg-opacity-90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "List Medicine"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Listing Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-remedidarkgray mb-1">Quality Assurance</h3>
                    <p className="text-sm text-gray-600">Ensure medicines are in good condition with intact packaging.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-remedidarkgray mb-1">Expiry Date</h3>
                    <p className="text-sm text-gray-600">Medicines should have at least 3 months before expiry.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-remedidarkgray mb-1">Pricing</h3>
                    <p className="text-sm text-gray-600">Set a fair price based on condition and expiry date.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-remedidarkgray mb-1">Verification</h3>
                    <p className="text-sm text-gray-600">All listings are reviewed for compliance with our policies.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-remedidarkgray mb-1">Prescription Medicines</h3>
                    <p className="text-sm text-gray-600">Some medicines require a valid prescription for purchase.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SellMedicine;
