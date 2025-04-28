
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trendingDesigns = [
  {
    id: 1,
    title: "Хрустальный маникюр",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["тренд 2025", "хит сезона"]
  },
  {
    id: 2,
    title: "Голографические блестки",
    image: "https://images.unsplash.com/photo-1636018051001-bc021b53ff85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["тренд 2025", "вечерний"]
  },
  {
    id: 3,
    title: "Абстрактные узоры",
    image: "https://images.unsplash.com/photo-1595116871872-508408608f25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["эксклюзив", "новинка"]
  }
];

const TrendingDesigns = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {trendingDesigns.map((design) => (
        <Card key={design.id} className="overflow-hidden group relative shadow-md hover:shadow-xl transition-all">
          <div className="overflow-hidden h-80">
            <img 
              src={design.image} 
              alt={design.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
