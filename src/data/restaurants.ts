import italianImage from "@/assets/restaurant-italian.jpg";
import sushiImage from "@/assets/restaurant-sushi.jpg";
import mexicanImage from "@/assets/restaurant-mexican.jpg";
import frenchImage from "@/assets/restaurant-french.jpg";

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
  queueCount: number;
  estimatedWait: string;
  priceRange: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Bella Vista",
    cuisine: "Italian • Pasta & Pizza",
    rating: 4.6,
    image: italianImage,
    queueCount: 3,
    estimatedWait: "15 min",
    priceRange: "$$",
  },
  {
    id: "2",
    name: "Sakura Sushi",
    cuisine: "Japanese • Sushi & Sashimi",
    rating: 4.8,
    image: sushiImage,
    queueCount: 12,
    estimatedWait: "35 min",
    priceRange: "$$$",
  },
  {
    id: "3",
    name: "Casa Miguel",
    cuisine: "Mexican • Tacos & Tequila",
    rating: 4.4,
    image: mexicanImage,
    queueCount: 8,
    estimatedWait: "25 min",
    priceRange: "$$",
  },
  {
    id: "4",
    name: "Le Petit Château",
    cuisine: "French • Fine Dining",
    rating: 4.9,
    image: frenchImage,
    queueCount: 18,
    estimatedWait: "50 min",
    priceRange: "$$$$",
  },
  {
    id: "5",
    name: "The Garden Terrace",
    cuisine: "Mediterranean • Fresh Seafood",
    rating: 4.5,
    image: italianImage, // Reusing for demo
    queueCount: 6,
    estimatedWait: "20 min",
    priceRange: "$$$",
  },
  {
    id: "6",
    name: "Spice Route",
    cuisine: "Indian • Curry & Tandoor",
    rating: 4.3,
    image: mexicanImage, // Reusing for demo
    queueCount: 22,
    estimatedWait: "60 min",
    priceRange: "$$",
  },
  {
    id: "7",
    name: "The Burger Joint",
    cuisine: "American • Burgers & Fries",
    rating: 4.2,
    image: sushiImage, // Reusing for demo
    queueCount: 4,
    estimatedWait: "12 min",
    priceRange: "$",
  },
  {
    id: "8",
    name: "Dragon Palace",
    cuisine: "Chinese • Dim Sum & Noodles",
    rating: 4.7,
    image: frenchImage, // Reusing for demo
    queueCount: 15,
    estimatedWait: "40 min",
    priceRange: "$$",
  },
];