
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhoneCall, MapPin, Clock, Star, Sparkles, Shield } from "lucide-react";
import NailGallery from "@/components/NailGallery";
import ContactInfo from "@/components/ContactInfo";
import TrendingDesigns from "@/components/TrendingDesigns";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Шапка сайта */}
      <header className="container mx-auto pt-20 pb-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-purple-900 leading-tight">
            Маникюр Мечты<br />
            <span className="text-purple-600">2025</span>
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto mb-8">
            Открой для себя коллекцию самых эксклюзивных дизайнов этого сезона
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
            Записаться сейчас
          </Button>
        </div>
      </header>

      {/* Трендовые дизайны */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            <span className="inline-block mr-2">✨</span> 
            Трендовые дизайны 2025
            <span className="inline-block ml-2">✨</span>
          </h2>
          <p className="text-purple-700 max-w-2xl mx-auto">
            Будь в тренде с самыми модными и стильными дизайнами маникюра этого года
          </p>
        </div>
        <TrendingDesigns />
      </section>

      {/* Галерея маникюра */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
            Галерея наших работ
          </h2>
          <NailGallery />
        </div>
      </section>

      {/* Преимущества */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover-scale shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-900">Модные тренды</h3>
            <p className="text-purple-700">Всегда в курсе последних тенденций в мире маникюра</p>
          </Card>
          <Card className="p-6 text-center hover-scale shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-900">Качественные материалы</h3>
            <p className="text-purple-700">Используем только профессиональные и безопасные материалы</p>
          </Card>
          <Card className="p-6 text-center hover-scale shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-900">Индивидуальный подход</h3>
            <p className="text-purple-700">Создаем уникальный дизайн, подчеркивающий вашу индивидуальность</p>
          </Card>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
            Наши контакты
          </h2>
          <ContactInfo />
        </div>
      </section>

      {/* Подвал сайта */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Маникюр Мечты 2025. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
