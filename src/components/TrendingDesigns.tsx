
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trendingDesigns = [
  {
    id: 1,
    title: "Магнитный эффект",
    image: "https://images.unsplash.com/photo-1641889577710-20497957f50a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["тренд 2025", "популярное"]
  },
  {
    id: 2,
    title: "Голографические блестки",
    image: "https://images.unsplash.com/photo-1636018051001-bc021b53ff85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["тренд 2025"]
  },
  {
    id: 3,
    title: "Прозрачные элементы",
    image: "https://images.unsplash.com/photo-1581954767938-0c889be09ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["эксклюзив"]
  }
];

const TrendingDesigns = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {trendingDesigns.map((design) => (
        <Card key={design.id} className="overflow-hidden group relative">
          <div className="overflow-hidden">
            <img 
              src={design.image} 
              alt={design.title} 
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {design.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-xl font-bold text-purple-900">{design.title}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TrendingDesigns;
