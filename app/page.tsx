'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'menu', 'gallery', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fastFoodItems = [
    '🍔 BURGERS', '🍕 PIZZA', '🌮 SHAWARMA', '🍟 FRIES',
    '🥙 KEBAB', '🍗 FRIED CHICKEN', '🌯 WRAPS', '🍖 KOFTA',
    '🥗 SALADS', '🍰 BAKLAVA', '☕ TURKISH TEA', '🥤 SOFT DRINKS',
  ];

  const menuItems = [
    { name: 'Ottoman Kebab', description: 'Grilled lamb kebab with Turkish spices, served with rice and salad.', price: '$18.99', category: 'Main', tag: 'Chef Special', image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80' },
    { name: 'Chicken Shawarma', description: 'Slow-roasted chicken wrapped in fresh pita with garlic sauce.', price: '$12.99', category: 'Fast Food', tag: 'Popular', image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&q=80' },
    { name: 'Turkish Pide', description: 'Traditional Turkish flatbread topped with cheese, meat, and vegetables.', price: '$14.50', category: 'Main', tag: '', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80' },
    { name: 'Baklava', description: 'Sweet layered pastry with pistachio and honey syrup.', price: '$8.99', category: 'Dessert', tag: 'Sweet', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80' },
    { name: 'Lamb Kofta', description: 'Spiced minced lamb meatballs grilled to perfection.', price: '$16.99', category: 'Main', tag: '', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80' },
    { name: 'Turkish Tea', description: 'Traditional black tea served in authentic Turkish glass.', price: '$3.99', category: 'Drinks', tag: '', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80' },
    { name: 'Ottoman Burger', description: 'Premium beef burger with Turkish spices and special sauce.', price: '$13.99', category: 'Fast Food', tag: 'New', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },
    { name: 'Chicken Wings', description: 'Crispy wings with Ottoman-style hot sauce.', price: '$10.99', category: 'Fast Food', tag: '', image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&q=80' },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80',
    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=600&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Fast Food', 'Main', 'Dessert', 'Drinks'];
  const filteredItems = filter === 'All' ? menuItems : menuItems.filter(i => i.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 flex items-center justify-center font-bold text-black">O</div>
            <div>
              <h1 className="text-xl font-bold tracking-widest text-yellow-500">OTTOMAN</h1>
              <p className="text-[10px] tracking-[4px] text-gray-400">RESTAURANT</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            {['home', 'about', 'menu', 'gallery', 'contact'].map(item => (
              <a key={item} href={`#${item}`} className={`capitalize tracking-widest transition-all duration-300 relative ${activeSection === item ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500'}`}>
                {item}
                {activeSection === item && <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-yellow-500"></span>}
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden md:block bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition">BOOK NOW</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" alt="Restaurant" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        </div>

        <div className="absolute top-24 left-0 right-0 overflow-hidden py-3 bg-yellow-500/10 border-y border-yellow-500/30 backdrop-blur-sm z-10">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...fastFoodItems, ...fastFoodItems].map((item, i) => (
              <span key={i} className="mx-8 text-yellow-400 text-sm font-bold tracking-widest">{item}</span>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl fade-in-up">
          <p className="text-yellow-500 tracking-[10px] text-xs mb-6 font-bold">EST. 1299 • AUTHENTIC TURKISH</p>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white">Ottoman</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent italic">Restaurant</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-16 bg-yellow-500"></div>
            <span className="text-yellow-500">✦</span>
            <div className="h-[1px] w-16 bg-yellow-500"></div>
          </div>
          <p className="text-gray-300 text-lg md:text-xl italic mb-10 max-w-2xl mx-auto leading-relaxed">
            "Experience the royal taste of Turkey — where tradition meets flavor."
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#menu" className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold tracking-widest hover:bg-yellow-400 transition-all glow">VIEW MENU</a>
            <a href="#contact" className="border-2 border-yellow-500 text-yellow-500 px-10 py-4 rounded-full font-bold tracking-widest hover:bg-yellow-500 hover:text-black transition-all">RESERVE TABLE</a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#141414]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-500 tracking-[8px] text-xs mb-4 font-bold">OUR STORY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A Taste of the <span className="text-yellow-500 italic">Ottoman Empire</span>
            </h2>
            <div className="w-16 h-[3px] bg-yellow-500 mb-8"></div>
            <p className="text-gray-400 leading-relaxed mb-6">
              For centuries, Ottoman cuisine has been celebrated for its rich flavors, aromatic spices, and royal presentation.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From sizzling kebabs to sweet baklava, every dish is crafted with time-honored recipes and fresh ingredients.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div><p className="text-3xl font-bold text-yellow-500">25+</p><p className="text-xs tracking-widest text-gray-500 mt-1">YEARS</p></div>
              <div><p className="text-3xl font-bold text-yellow-500">50+</p><p className="text-xs tracking-widest text-gray-500 mt-1">DISHES</p></div>
              <div><p className="text-3xl font-bold text-yellow-500">10K+</p><p className="text-xs tracking-widest text-gray-500 mt-1">GUESTS</p></div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-yellow-500/30">
              <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Restaurant" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-bold">★★★★★</p>
              <p className="text-xs tracking-widest mt-1">5000+ REVIEWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU WITH IMAGES */}
      <section id="menu" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 tracking-[8px] text-xs mb-4 font-bold">OUR MENU</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Signature <span className="text-yellow-500 italic">Dishes</span></h2>
            <div className="w-16 h-[3px] bg-yellow-500 mx-auto"></div>
          </div>

          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest transition-all ${filter === cat ? 'bg-yellow-500 text-black' : 'border border-yellow-500/30 text-gray-400 hover:border-yellow-500 hover:text-yellow-500'}`}>
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-[#141414] to-[#0a0a0a] rounded-2xl border border-yellow-500/20 hover:border-yellow-500/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  {item.tag && <span className="absolute top-4 right-4 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-widest">{item.tag.toUpperCase()}</span>}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition">{item.name}</h3>
                    <span className="text-2xl font-bold text-yellow-500 whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm italic leading-relaxed mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs tracking-widest text-gray-500">{item.category.toUpperCase()}</span>
                    <div className="h-[1px] flex-1 bg-yellow-500/20 mx-3"></div>
                    <span className="text-yellow-500 text-xs">✦</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#141414]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 tracking-[8px] text-xs mb-4 font-bold">GALLERY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-yellow-500 italic">Ambiance</span></h2>
            <div className="w-16 h-[3px] bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/60 transition-all duration-500 group">
                <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-yellow-500 tracking-[8px] text-xs mb-4 font-bold">VISIT US</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Reserve Your <span className="text-yellow-500 italic">Table</span></h2>
            <div className="w-16 h-[3px] bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '📍', title: 'Address', lines: ['College Road', 'Daska, Pakistan'] },
              { icon: '📞', title: 'Phone', lines: ['+92 321 0786776', '+92 42 1234567'] },
              { icon: '🕒', title: 'Hours', lines: ['Mon - Sun', '01:00 PM - 01:00 AM'] },
            ].map((info, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-yellow-500/20 hover:border-yellow-500/60 transition-all">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-yellow-500 font-bold mb-4 tracking-widest">{info.title.toUpperCase()}</h3>
                {info.lines.map((line, j) => <p key={j} className="text-gray-400 text-sm">{line}</p>)}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="tel:+923001234567" className="inline-block bg-yellow-500 text-black px-12 py-4 rounded-full font-bold tracking-widest hover:bg-yellow-400 transition-all glow">CALL NOW</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-yellow-500/20 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black text-sm">O</div>
            <span className="text-yellow-500 font-bold tracking-widest">OTTOMAN</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Ottoman Restaurant. All rights reserved.</p>
          <div className="flex gap-4 text-gray-400">
            <span className="hover:text-yellow-500 cursor-pointer transition">FB</span>
            <span className="hover:text-yellow-500 cursor-pointer transition">IG</span>
            <span className="hover:text-yellow-500 cursor-pointer transition">TW</span>
          </div>
        </div>
      </footer>

    </div>
  );
}