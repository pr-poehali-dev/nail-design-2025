
import { Card } from "@/components/ui/card";

const nailDesigns = [
  {
    id: 1,
    title: "Хромированный блеск",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Популярный тренд 2025 года - металлический блеск с зеркальным эффектом",
  },
  {
    id: 2,
    title: "Неоновая геометрия",
    image: "https://images.unsplash.com/photo-1632344004483-503aa0a6eae1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Яркие неоновые линии в сочетании с геометрическими формами",
  },
  {
    id: 3,
    title: "Минималистичный дизайн",
    image: "https://images.unsplash.com/photo-1596699457661-3366e9d8882a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Изящные тонкие линии на нюдовой основе - тренд всех сезонов",
  },
  {
    id: 4,
    title: "3D текстуры",
    image: "https://images.unsplash.com/photo-1592259020097-2da259ed8b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Объемные элементы с текстурными деталями для особого случая",
  },
  {
    id: 5,
    title: "Матовое омбре",
    image: "https://images.unsplash.com/photo-1602621168532-55590131d4a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Плавные переходы цвета с матовым финишем - хит 2025 года",
  },
  {
    id: 6,
    title: "Акварельная техника",
    image: "https://images.unsplash.com/photo-1595116871872-508408608f25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Нежные акварельные разводы в пастельных тонах",
  }
];

const NailGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {nailDesigns.map((design) => (
        <Card 
          key={design.id} 
          className="overflow-hidden hover-scale"
        >
          <img 
            src={design.image} 
            alt={design.title} 
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-purple-900 mb-2">{design.title}</h3>
            <p className="text-purple-700">{design.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default NailGallery;
