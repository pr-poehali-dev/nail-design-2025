
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, MapPin, Clock, Instagram, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="p-8 shadow-lg hover:shadow-xl transition-all">
        <h3 className="text-2xl font-bold text-purple-900 mb-6">Свяжитесь с нами</h3>
        
        <div className="flex items-start mb-6">
          <PhoneCall className="text-purple-600 mr-4 flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-purple-900 mb-1">Телефон</p>
            <p className="text-purple-700 text-lg">8-920-565-39-41</p>
          </div>
        </div>
        
        <div className="flex items-start mb-6">
          <MapPin className="text-purple-600 mr-4 flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-purple-900 mb-1">Адрес</p>
            <p className="text-purple-700">
              село Погореловка, улица Садовая 17а
            </p>
          </div>
        </div>
        
        <div className="flex items-start mb-6">
          <Clock className="text-purple-600 mr-4 flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-purple-900 mb-1">Часы работы</p>
            <p className="text-purple-700">
              Пн-Пт: 9:00 - 20:00<br />
              Сб: 10:00 - 18:00<br />
              Вс: 11:00 - 16:00
            </p>
          </div>
        </div>
        
        <div className="flex gap-3 mt-8">
          <Button className="bg-purple-600 hover:bg-purple-700 flex-1 py-6">
            <PhoneCall className="mr-2 h-5 w-5" /> Позвонить
          </Button>
          <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-100 flex-1 py-6">
            <Mail className="mr-2 h-5 w-5" /> Написать
          </Button>
        </div>
      </Card>
      
      <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2320.9795584080664!2d37.58944531560944!3d54.38682098021237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4134666055555555%3A0x5555555555555555!2z0YPQuy4g0KHQsNC00L7QstCw0Y8sIDE30LAsINCf0L7Qs9C-0YDQtdC70L7QstC60LAsINCi0YPQu9GM0YHQutCw0Y8g0L7QsdC7LiwgMzAxMjAw!5e0!3m2!1sru!2sru!4v1650000000000!5m2!1sru!2sru" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта расположения салона"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
