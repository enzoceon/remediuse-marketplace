
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const userTestimonials = [
  {
    id: "user1",
    name: "Sarah Johnson",
    role: "Regular User",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    content: "I found my regular medications at 40% off the retail price. The verification process made me feel secure about my purchase. This platform is a game-changer for people like me who are on long-term medication.",
  },
  {
    id: "user2",
    name: "Michael Chen",
    role: "Seller",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "After my treatment changed, I had several unopened medicine boxes that would have gone to waste. ReMediUse helped me find buyers, and I recovered almost half of what I spent. The AI pricing tool was especially helpful.",
  },
  {
    id: "user3",
    name: "Emma Williams",
    role: "Buyer",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    content: "The expiry tracking feature is fantastic! I get notifications when medicines I'm interested in are about to expire, which means even better discounts. The interface is so simple and intuitive to use.",
  },
];

const ngoTestimonials = [
  {
    id: "ngo1",
    name: "HealthBridge Foundation",
    role: "Partner NGO",
    avatar: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZGljaW5lfGVufDB8fDB8fHww",
    content: "Through ReMediUse, we've received thousands of medicine donations that have helped communities without access to healthcare. The verification system ensures we only receive usable medicines.",
  },
  {
    id: "ngo2",
    name: "Global Health Connect",
    role: "Medical Relief Organization",
    avatar: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    content: "ReMediUse has streamlined our medicine collection process. The platform's categorization and expiry tracking have made our distribution efforts more efficient. A true ally in our mission.",
  },
];

const doctorTestimonials = [
  {
    id: "doctor1",
    name: "Dr. Amanda Rodriguez",
    role: "General Physician",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    content: "I recommend ReMediUse to patients who struggle with medication costs. The platform's verification process aligns with medical standards, and I've seen firsthand how it helps improve medication adherence among my patients.",
  },
  {
    id: "doctor2",
    name: "Dr. James Wilson",
    role: "Cardiologist",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    content: "For patients with chronic conditions requiring expensive medications, ReMediUse has been a reliable alternative. I appreciate their strict verification protocols and the transparency they provide about each medicine's history.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-remedidarkgray mb-4">What People Say About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our community of users, partners, and healthcare professionals.
          </p>
        </div>
        
        <Tabs defaultValue="users" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="ngos">NGOs</TabsTrigger>
            <TabsTrigger value="doctors">Healthcare Professionals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-remediteal opacity-20 mb-4" />
                    <p className="text-gray-600 mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-remedidarkgray">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ngos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ngoTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-remediteal opacity-20 mb-4" />
                    <p className="text-gray-600 mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-remedidarkgray">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="doctors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctorTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-remediteal opacity-20 mb-4" />
                    <p className="text-gray-600 mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-remedidarkgray">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestimonialsSection;
