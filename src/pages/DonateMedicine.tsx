
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

const formSchema = z.object({
  medicineName: z.string().min(3, { message: "Medicine name is required" }),
  brand: z.string().min(2, { message: "Brand name is required" }),
  expiryDate: z.string().min(1, { message: "Expiry date is required" }),
  quantity: z.string().min(1, { message: "Quantity is required" }),
  description: z.string().optional(),
  ngoSelection: z.string().min(1, { message: "Please select an NGO" }),
});

type FormValues = z.infer<typeof formSchema>;

const DonateMedicine = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [image, setImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to donate a medicine",
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
        title: "Donation submitted successfully",
        description: "Thank you for your generosity! Your donation request has been sent to the selected NGO.",
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

  const handleNGOChange = (value: string) => {
    setValue("ngoSelection", value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-remedidarkgray mb-2">Donate Medicine</h1>
            <p className="text-gray-600">
              Donate your unused medicines to help those in need through verified NGOs and healthcare centers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Medicine Donation Form</CardTitle>
                  <CardDescription>
                    All donations are verified and distributed to those who need them most.
                  </CardDescription>
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                onClick={() => document.getElementById("image-upload")?.click()}
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
                    
                    <div className="space-y-2">
                      <Label htmlFor="ngoSelection">Select NGO or Healthcare Center *</Label>
                      <Select onValueChange={handleNGOChange}>
                        <SelectTrigger id="ngoSelection">
                          <SelectValue placeholder="Select an organization" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medicaid-foundation">Medicaid Foundation</SelectItem>
                          <SelectItem value="healthcare-for-all">Healthcare For All NGO</SelectItem>
                          <SelectItem value="medical-relief">Medical Relief International</SelectItem>
                          <SelectItem value="community-clinic">Community Health Clinic</SelectItem>
                          <SelectItem value="red-cross">Red Cross Medical Division</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.ngoSelection && (
                        <p className="text-red-500 text-sm">{errors.ngoSelection.message}</p>
                      )}
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
                        {isSubmitting ? "Submitting..." : "Donate Medicine"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-gradient-to-br from-remediteal/10 to-transparent mb-6">
                <CardHeader>
                  <CardTitle>Make an Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Your medicine donation can help save lives and improve healthcare access for those in need.
                  </p>
                  
                  <div className="flex items-center gap-3 text-lg font-medium text-remedidarkgray">
                    <div className="h-10 w-10 rounded-full bg-remediteal text-white flex items-center justify-center text-lg font-bold">
                      1
                    </div>
                    <span>Donate unused medicines</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-lg font-medium text-remedidarkgray">
                    <div className="h-10 w-10 rounded-full bg-remediteal text-white flex items-center justify-center text-lg font-bold">
                      2
                    </div>
                    <span>NGOs verify and collect them</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-lg font-medium text-remedidarkgray">
                    <div className="h-10 w-10 rounded-full bg-remediteal text-white flex items-center justify-center text-lg font-bold">
                      3
                    </div>
                    <span>Medicines reach those in need</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Donation Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-remedidarkgray mb-1">Quality Assurance</h3>
                    <p className="text-sm text-gray-600">Ensure medicines are in good condition with intact packaging.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-remedidarkgray mb-1">Expiry Date</h3>
                    <p className="text-sm text-gray-600">Medicines should have at least 6 months before expiry.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-remedidarkgray mb-1">Verification</h3>
                    <p className="text-sm text-gray-600">All donations are reviewed for compliance with our policies.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-remedidarkgray mb-1">Tax Benefits</h3>
                    <p className="text-sm text-gray-600">You may be eligible for tax benefits for your charitable donation.</p>
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

export default DonateMedicine;
