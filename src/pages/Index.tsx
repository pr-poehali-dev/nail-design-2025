
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PhoneCall, MapPin, TrendingUp } from "lucide-react";
import NailGallery from "@/components/NailGallery";
import ContactInfo from "@/components/ContactInfo";
import TrendingDesigns from "@/components/TrendingDesigns";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Шапка сайта */}
      <header className="container mx-auto pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-purple-900 animate-fade-in">
          Модный Маникюр 2025
        </h1>
        <p className="text-xl text-purple-700 max-w-2xl mx-auto mb-8">
          Эксклюзивная коллекция самых трендовых дизайнов маникюра этого года
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg">
          Записаться сейчас
        </Button>
      </header>

      {/* Трендовые дизайны */}
      <section className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Трендовые дизайны 2025</h2>
          <p className="text-purple-700 max-w-2xl mx-auto">
            Наши мастера создают шедевры маникюра, которые соответствуют последним трендам и вашим индивидуальным предпочтениям
          </p>
        </div>
        <TrendingDesigns />
      </section>

      {/* Галерея маникюра */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
            Галерея наших работ
          </h2>
          <NailGallery />
        </div>
      </section>

      {/* Преимущества */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover-scale">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-900">Модные тренды</h3>
            <p className="text-purple-700">Всегда в курсе последних тенденций в мире маникюра</p>
          </Card>
          <Card className="p-6 text-center hover-scale">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-900">Качественные материалы</h3>
            <p className="text-purple-700">Используем только профессиональные и безопасные материалы</p>
          </Card>
          <Card className="p-6 text-center hover-scale">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-900">Индивидуальный подход</h3>
            <p className="text-purple-700">Создаем уникальный дизайн, подчеркивающий вашу индивидуальность</p>
          </Card>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
            Наши контакты
          </h2>
          <ContactInfo />
        </div>
      </section>

      {/* Подвал сайта */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Модный Маникюр 2025. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
