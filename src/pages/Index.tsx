import { RestaurantCard } from "@/components/RestaurantCard";
import { restaurants } from "@/data/restaurants";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">QueueWatch</h1>
              <p className="text-muted-foreground mt-1">Find restaurants with the shortest wait times</p>
            </div>
            
            <div className="flex gap-3 max-w-md w-full md:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search restaurants or cuisine..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-border"
                />
              </div>
              <button className="p-2 rounded-md border border-border bg-background hover:bg-muted transition-colors">
                <Filter className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Available Restaurants ({filteredRestaurants.length})
          </h2>
          <p className="text-muted-foreground">
            Real-time queue information to help you plan your dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
            />
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No restaurants found matching your search.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
