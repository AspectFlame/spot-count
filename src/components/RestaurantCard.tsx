import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Users } from "lucide-react";

interface RestaurantCardProps {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
  queueCount: number;
  estimatedWait: string;
  priceRange: string;
}

const getQueueStatus = (count: number) => {
  if (count <= 5) return { status: "low", label: "Low" };
  if (count <= 15) return { status: "medium", label: "Moderate" };
  return { status: "high", label: "Busy" };
};

const getQueueColor = (count: number) => {
  if (count <= 5) return "text-status-low";
  if (count <= 15) return "text-status-medium";
  return "text-status-high";
};

export const RestaurantCard = ({
  name,
  cuisine,
  rating,
  image,
  queueCount,
  estimatedWait,
  priceRange,
}: RestaurantCardProps) => {
  const queueStatus = getQueueStatus(queueCount);

  return (
    <Card className="group overflow-hidden bg-card border-border shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${name} restaurant interior`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge 
            variant="secondary" 
            className="bg-card/90 backdrop-blur-sm border-border/50"
          >
            {priceRange}
          </Badge>
        </div>
        <div className="absolute top-3 left-3">
          <Badge 
            variant="outline" 
            className={`bg-card/90 backdrop-blur-sm border-border/50 font-semibold ${
              queueStatus.status === 'low' ? 'text-status-low border-status-low/30' :
              queueStatus.status === 'medium' ? 'text-status-medium border-status-medium/30' :
              'text-status-high border-status-high/30'
            }`}
          >
            {queueStatus.label}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{cuisine}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-card-foreground">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{estimatedWait}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <Users className={`w-5 h-5 ${getQueueColor(queueCount)}`} />
            <span className="text-sm text-muted-foreground">People in line:</span>
          </div>
          <div className={`text-2xl font-bold ${getQueueColor(queueCount)}`}>
            {queueCount}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};