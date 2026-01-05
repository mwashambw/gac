import React, { useState } from 'react';
import {
  Car,
  Zap,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Calculator,
  Leaf,
  Battery,
  ChevronRight,
  Users,
  Gauge,
  Sparkles,
} from 'lucide-react';
import './index.css';

const GACTanzaniaWebsite = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const translations = {
    en: {
      nav: {
        home: 'Home',
        vehicles: 'Vehicles',
        about: 'About Us',
        contact: 'Contact',
      },
      hero: {
        title: 'Electric Cars That Save You Money',

        subtitle:
          'Save up to 90% on fuel when you switch to GAC electric vehicles, designed for lower running costs, zero emissions, and premium comfort.',
        cta: 'Explore Vehicles',
      },
      features: {
        title: 'Why Choose GAC Vehicles?',
        eco: {
          title: 'Eco-Friendly',
          desc: 'Reduce your carbon footprint with advanced electric and hybrid technology',
        },
        efficient: {
          title: 'Cost Efficient',
          desc: 'Save up to 90% on fuel costs with our electric vehicles',
        },
        range: {
          title: 'Long Range',
          desc: 'Drive 500-600 km on a single charge with our EVs',
        },
      },
      vehicles: {
        title: 'Our Vehicle Range',
        aionY: {
          name: 'GAC AION Y Plus',
          desc: 'Spacious electric SUV perfect for families with 610km range',
          specs: '204 HP • 610 km range • 63 kWh battery',
          price: 'Contact for pricing',
        },
        aionV: {
          name: 'GAC AION V',
          desc: 'Premium electric SUV with 510km range and advanced safety features',
          specs: '150 kW • 510 km range • 75.26 kWh battery',
          price: 'Contact for pricing',
        },
        m8: {
          name: 'GAC M8 PHEV',
          desc: 'Luxurious 7-seater plug-in hybrid MPV with exceptional comfort',
          specs: '372 HP • 1,038 km range • Hybrid',
          price: 'Contact for pricing',
        },
        learnMore: 'Learn More',
      },
      comparison: {
        title: 'Cost Comparison Calculator',
        traditional: 'Traditional Fuel Car',
        gacHybrid: 'GAC Electric',
        distance: 'Distance (km)',
        fuelCost: 'Cost per 100km',
        totalCost: 'Total Cost',
        savings: 'Your Savings',
      },
      about: {
        title: 'About GAC Tanzania',
        content:
          "GAC (Guangzhou Automobile Group) is one of China's top automotive manufacturers, now officially established in Tanzania. We bring cutting-edge electric and hybrid technology that combines efficiency with performance, offering Tanzanians eco-friendly and cost-effective transportation solutions with world-class quality and innovation.",
      },
      contact: {
        title: 'Contact Us',
        visit: 'Visit Our Showroom',
        address:
          'Haofeng International Trade (Tanzania) Ltd\nPlot No. 10, Julius K. Nyerere Road\nDar es Salaam, Tanzania',
        phone: 'Phone',
        email: 'Email',
      },
    },
    sw: {
      nav: {
        home: 'Nyumbani',
        vehicles: 'Magari',
        about: 'Kuhusu Sisi',
        contact: 'Wasiliana',
      },
      hero: {
        title: 'Magari ya Umeme Yanayopunguza Gharama Zako',
        subtitle:
          'Okoa hadi 90% ya gharama za mafuta kwa kubatumia magari ya umeme ya GAC, yenye gharama ndogo za uendeshaji, bila hewa chafu, na yenye faraja ya hali ya juu.',
        cta: 'Angalia Magari',
      },
      features: {
        title: 'Kwa Nini Uchague Magari ya GAC?',
        eco: {
          title: 'Rafiki wa Mazingira',
          desc: 'Punguza uchafuzi wa mazingira kwa teknolojia ya kisasa ya umeme na hybrid',
        },
        efficient: {
          title: 'Ufanisi wa Gharama',
          desc: 'Okoa hadi 90% ya gharama ya mafuta na magari yetu ya umeme',
        },
        range: {
          title: 'Umbali Mrefu',
          desc: 'Endesha km 500-600 kwa chaji moja na magari yetu ya umeme',
        },
      },
      vehicles: {
        title: 'Magari Yetu',
        aionY: {
          name: 'GAC AION Y Plus',
          desc: 'Gari la umeme lenye nafasi kwa familia na umbali wa km 610',
          specs: '204 HP • Umbali wa km 610 • Betri ya 63 kWh',
          price: 'Wasiliana kwa bei',
        },
        aionV: {
          name: 'GAC AION V',
          desc: 'Gari la umeme la hali ya juu na umbali wa km 510 na usalama wa kisasa',
          specs: '150 kW • Umbali wa km 510 • Betri ya 75.26 kWh',
          price: 'Wasiliana kwa bei',
        },
        m8: {
          name: 'GAC M8 PHEV',
          desc: 'Gari la kifahari la viti 7 lenye mfumo wa mafuta na umeme linalokupa starehe ya hali ya juu',
          specs: '372 HP • Umbali wa km 1,038 • Hybrid',
          price: 'Wasiliana kwa bei',
        },
        learnMore: 'Jifunze Zaidi',
      },
      comparison: {
        title: 'Kikokotozi cha Ulinganisho wa Gharama',
        traditional: 'Gari la Mafuta la Kawaida',
        gacHybrid: 'GAC Umeme',
        distance: 'Umbali (km)',
        fuelCost: 'Gharama kwa km 100',
        totalCost: 'Gharama Jumla',
        savings: 'Akiba Yako',
      },
      about: {
        title: 'Kuhusu GAC Tanzania',
        content:
          'GAC (Guangzhou Automobile Group) ni mmoja wa watengenezaji wakubwa wa magari wa China, sasa rasmi ameanzisha ofisi Tanzania. Tunaleta teknolojia ya kisasa ya umeme na hybrid inayochanganya ufanisi na utendaji, ikitoa Watanzania suluhisho la usafiri rafiki wa mazingira na lenye gharama nafuu na ubora wa kimataifa.',
      },
      contact: {
        title: 'Wasiliana Nasi',
        visit: 'Tembelea Showroom Yetu',
        address:
          'Haofeng International Trade (Tanzania) Ltd\nPlot No. 10, Julius K. Nyerere Road\nDar es Salaam, Tanzania',
        phone: 'Simu',
        email: 'Barua Pepe',
      },
    },
  };

  const t = translations[currentLang];

  const [distance, setDistance] = useState(100);
  const traditionalCost = (distance / 100) * 22400;
  const gacCost = (distance / 100) * 233;
  const savings = traditionalCost - gacCost;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">
                GAC Tanzania
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-red-600 transition"
              >
                {t.nav.home}
              </a>
              <a
                href="#vehicles"
                className="text-gray-700 hover:text-red-600 transition"
              >
                {t.nav.vehicles}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-red-600 transition"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-600 transition"
              >
                {t.nav.contact}
              </a>

              {/* Toggle Switch for Language */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    currentLang === 'en'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setCurrentLang('sw')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    currentLang === 'sw'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  SW
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#home"
                className="block text-gray-700 hover:text-red-600"
              >
                {t.nav.home}
              </a>
              <a
                href="#vehicles"
                className="block text-gray-700 hover:text-red-600"
              >
                {t.nav.vehicles}
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-red-600"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-red-600"
              >
                {t.nav.contact}
              </a>

              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition ${
                    currentLang === 'en'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setCurrentLang('sw')}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition ${
                    currentLang === 'sw'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600'
                  }`}
                >
                  SW
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {t.hero.subtitle}
            </p>
            <a
              href="#vehicles"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition"
            >
              {t.hero.cta}
              <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.features.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t.features.efficient.title}
              </h3>
              <p className="text-gray-600">{t.features.efficient.desc}</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-purple-50">
              <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                <Battery className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t.features.range.title}
              </h3>
              <p className="text-gray-600">{t.features.range.desc}</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t.features.eco.title}
              </h3>
              <p className="text-gray-600">{t.features.eco.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.comparison.title}
          </h2>
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                {t.comparison.distance}
              </label>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-3 bg-red-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-center text-2xl font-bold text-gray-900 mt-2">
                {distance} km
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {t.comparison.traditional}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t.comparison.fuelCost}: TSh 22,400
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {t.comparison.totalCost}: TSh{' '}
                  {traditionalCost.toLocaleString()}
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-red-600 mb-4">
                  {t.comparison.gacHybrid}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t.comparison.fuelCost}: TSh 233
                </p>
                <p className="text-2xl font-bold text-red-600">
                  {t.comparison.totalCost}: TSh {gacCost.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="bg-green-100 p-6 rounded-lg text-center">
              <p className="text-lg font-semibold text-green-800 mb-2">
                {t.comparison.savings}
              </p>
              <p className="text-3xl font-bold text-green-600">
                TSh {savings.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.vehicles.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* AION Y Plus */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <img
                  src="/GAC Aion Y.jpg"
                  alt="GAC AION Y Plus"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML =
                      '<div class="flex items-center justify-center h-full"><svg class="h-32 w-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg></div>';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.vehicles.aionY.name}
                </h3>
                <p className="text-gray-600 mb-3">{t.vehicles.aionY.desc}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Gauge className="h-4 w-4" />
                  <span>{t.vehicles.aionY.specs}</span>
                </div>
                <p className="text-xl font-bold text-red-600 mb-4">
                  {t.vehicles.aionY.price}
                </p>
                <button className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  {t.vehicles.learnMore}
                </button>
              </div>
            </div>

            {/* AION V */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-orange-600 overflow-hidden">
                <img
                  src="/GAC Aion .jpg"
                  alt="GAC AION V"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML =
                      '<div class="flex items-center justify-center h-full"><svg class="h-32 w-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg></div>';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.vehicles.aionV.name}
                </h3>
                <p className="text-gray-600 mb-3">{t.vehicles.aionV.desc}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Gauge className="h-4 w-4" />
                  <span>{t.vehicles.aionV.specs}</span>
                </div>
                <p className="text-xl font-bold text-red-600 mb-4">
                  {t.vehicles.aionV.price}
                </p>
                <button className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  {t.vehicles.learnMore}
                </button>
              </div>
            </div>

            {/* M8 PHEV */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden">
                <img
                  src="/GAC M8 PHEV — a spacious.jpg"
                  alt="GAC M8 PHEV"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML =
                      '<div class="flex items-center justify-center h-full"><svg class="h-32 w-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg></div>';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.vehicles.m8.name}
                </h3>
                <p className="text-gray-600 mb-3">{t.vehicles.m8.desc}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4" />
                  <span>{t.vehicles.m8.specs}</span>
                </div>
                <p className="text-xl font-bold text-red-600 mb-4">
                  {t.vehicles.m8.price}
                </p>
                <button className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  {t.vehicles.learnMore}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.about.content}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.contact.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t.contact.visit}
              </h3>
              <p className="text-gray-600 whitespace-pre-line">
                {t.contact.address}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t.contact.phone}
              </h3>
              <p className="text-gray-600">+255 748 866 666</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t.contact.email}
              </h3>
              <p className="text-gray-600">sales@gac-tz.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Car className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold">GAC Tanzania</span>
          </div>
          <p className="text-gray-400">
            © 2026 GAC Tanzania. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GACTanzaniaWebsite;
