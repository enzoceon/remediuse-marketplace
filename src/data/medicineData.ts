
export interface Medicine {
  id: string;
  name: string;
  brand: string;
  price: number;
  discountPercentage: number;
  expiryDate: string;
  imageUrl: string;
  category: string;
  description: string;
  dosage: string;
  quantity: number;
  sellerId: string;
  sellerName: string;
  location: string;
  listingDate: string;
  condition: string;
  prescription: boolean;
}

export const medicineData: Medicine[] = [
  {
    id: "med-001",
    name: "Paracetamol 500mg",
    brand: "Tylenol",
    price: 8.99,
    discountPercentage: 25,
    expiryDate: "2024-12-15",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop",
    category: "Pain Relief",
    description: "Paracetamol is a medication used to treat fever and mild to moderate pain. At therapeutic doses, paracetamol does not irritate the lining of the stomach nor affect blood coagulation, kidneys, or the fetal ductus arteriosus (as NSAIDs can).",
    dosage: "500mg tablets",
    quantity: 20,
    sellerId: "user-101",
    sellerName: "John Smith",
    location: "New York, NY",
    listingDate: "2023-09-15",
    condition: "Sealed",
    prescription: false
  },
  {
    id: "med-002",
    name: "Amoxicillin 250mg",
    brand: "Amoxil",
    price: 14.99,
    discountPercentage: 15,
    expiryDate: "2024-06-20",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&auto=format&fit=crop",
    category: "Antibiotics",
    description: "Amoxicillin is used to treat a wide variety of bacterial infections. This medication is a penicillin-type antibiotic. It works by stopping the growth of bacteria.",
    dosage: "250mg capsules",
    quantity: 14,
    sellerId: "user-102",
    sellerName: "Emily Johnson",
    location: "Chicago, IL",
    listingDate: "2023-10-01",
    condition: "Unopened",
    prescription: true
  },
  {
    id: "med-003",
    name: "Lisinopril 10mg",
    brand: "Prinivil",
    price: 12.50,
    discountPercentage: 30,
    expiryDate: "2024-02-28",
    imageUrl: "https://images.unsplash.com/photo-1626285861696-9f404a966c49?w=800&auto=format&fit=crop",
    category: "Blood Pressure",
    description: "Lisinopril is used to treat high blood pressure (hypertension) and heart failure. Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems.",
    dosage: "10mg tablets",
    quantity: 30,
    sellerId: "user-103",
    sellerName: "Michael Brown",
    location: "Los Angeles, CA",
    listingDate: "2023-10-15",
    condition: "Sealed",
    prescription: true
  },
  {
    id: "med-004",
    name: "Cetirizine 10mg",
    brand: "Zyrtec",
    price: 9.99,
    discountPercentage: 20,
    expiryDate: "2024-09-10",
    imageUrl: "https://images.unsplash.com/photo-1550572017-26b5655c6ea4?w=800&auto=format&fit=crop",
    category: "Allergy",
    description: "Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching.",
    dosage: "10mg tablets",
    quantity: 24,
    sellerId: "user-104",
    sellerName: "Jessica Wilson",
    location: "Houston, TX",
    listingDate: "2023-11-05",
    condition: "Unopened",
    prescription: false
  },
  {
    id: "med-005",
    name: "Omeprazole 20mg",
    brand: "Prilosec",
    price: 18.99,
    discountPercentage: 35,
    expiryDate: "2024-08-15",
    imageUrl: "https://images.unsplash.com/photo-1616874535244-73aea5daadb9?w=800&auto=format&fit=crop",
    category: "Digestive Health",
    description: "Omeprazole is used to treat certain stomach and esophagus problems (such as acid reflux, ulcers). It works by decreasing the amount of acid your stomach makes.",
    dosage: "20mg delayed-release capsules",
    quantity: 28,
    sellerId: "user-105",
    sellerName: "David Garcia",
    location: "Miami, FL",
    listingDate: "2023-11-20",
    condition: "Sealed",
    prescription: false
  },
  {
    id: "med-006",
    name: "Vitamin D3 1000IU",
    brand: "Nature's Bounty",
    price: 12.99,
    discountPercentage: 10,
    expiryDate: "2025-03-01",
    imageUrl: "https://images.unsplash.com/photo-1577460551100-907eb0c0a6b0?w=800&auto=format&fit=crop",
    category: "Vitamins",
    description: "Vitamin D3 helps your body absorb calcium and phosphorus. Having the right amount of vitamin D, calcium, and phosphorus is important for building and keeping strong bones.",
    dosage: "1000IU softgels",
    quantity: 120,
    sellerId: "user-106",
    sellerName: "Sarah Martinez",
    location: "Seattle, WA",
    listingDate: "2023-12-01",
    condition: "Unopened",
    prescription: false
  }
];
