import { ShoppingBag, Phone, MapPin, Info, UtensilsCrossed, ArrowRight } from 'lucide-react';

// Types
interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

// Data
const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Nasi Ayam Geprek',
    price: 10000,
    description: 'Nasi hangat dengan ayam geprek sambal bawang super pedas.',
    imageUrl: 'https://images.unsplash.com/photo-1626082896492-766af4eb65ed?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '2',
    name: 'Mie Goreng Spesial',
    price: 10000,
    description: 'Mie goreng bumbu rempah dengan telur dan sayuran segar.',
    imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe01f72810c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '3',
    name: 'Es Jeruk Segar',
    price: 10000,
    description: 'Perasan jeruk asli murni manis dan menyegarkan.',
    imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '4',
    name: 'Dimsum Ayam',
    price: 10000,
    description: '4 pcs dimsum ayam gurih dengan saus asam manis pedas.',
    imageUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600',
  }
];

const WA_NUMBER = '6289698070070';

export default function App() {
  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const handleOrder = (productName: string) => {
    const message = `Halo, saya ingin memesan ${productName}...`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const handleWholesale = () => {
    const message = `Halo, saya tertarik untuk melakukan pesanan katering/acara dalam jumlah besar...`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-800">
      {/* Header/Hero Section */}
      <header className="bg-orange-600 text-white shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-4">
            <UtensilsCrossed size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Kantin Cemban</h1>
          <p className="text-xl md:text-2xl font-semibold mb-6 text-orange-100">Kenyang & Hemat, Semua Serba 10K!</p>
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-100 transition-colors inline-flex items-center gap-2"
          >
            Lihat Menu
            <ArrowRight size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        
        {/* Menu Section */}
        <section id="menu" className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="h-px w-12 bg-orange-300"></span>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-800">MENU SPESIAL - SERBA 10K</h2>
            <span className="h-px w-12 bg-orange-300"></span>
          </div>

          {/* Grid Layout: 1 column on mobile, 2 columns on tablet/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow border border-orange-100">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white font-bold py-1 px-3 rounded-full shadow-md text-sm">
                    {formatRupiah(item.price)}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-5 flex-1 line-clamp-2">{item.description}</p>
                  <button 
                    onClick={() => handleOrder(item.name)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-sm"
                  >
                    <ShoppingBag size={20} />
                    PESAN VIA WHATSAPP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wholesale Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Pesan Untuk Acara?</h3>
              <p className="text-orange-50 mb-0">
                Butuh konsumsi untuk acara kantor, syukuran, atau jumlah banyak? Kami siap melayani dengan penawaran spesial!
              </p>
            </div>
            <button 
              onClick={handleWholesale}
              className="w-full md:w-auto bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-50 transition-colors whitespace-nowrap active:scale-95"
            >
              Hubungi Kami
            </button>
          </div>
        </section>
      </main>

      {/* Footer Info Section */}
      <footer className="bg-white border-t border-orange-200">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact & Location */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="text-orange-500" />
                Informasi Kontak & Lokasi
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-orange-400 shrink-0" />
                  <span>0896-9807-0070 (WhatsApp Only)</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-orange-400 shrink-0" />
                  <span>Jl. Merdeka No. 45, Jakarta Selatan<br/>Buka: Senin - Sabtu (09.00 - 17.00)</span>
                </li>
              </ul>
            </div>

            {/* Terms & Conditions */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Info className="text-orange-500" />
                Syarat & Ketentuan Grosir
              </h4>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 text-sm">
                <li>Pemesanan jumlah besar (&gt;50 porsi) harap dilakukan minimal H-2 acara.</li>
                <li>DP (Down Payment) sebesar 50% dibayarkan saat pesanan dikonfirmasi.</li>
                <li>Pengiriman dapat diambil di lokasi atau menggunakan layanan ojek online.</li>
                <li>Perubahan menu/jumlah pesanan maksimal H-1 siang hari.</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm mt-10 pt-6 border-t border-gray-100">
            &copy; {new Date().getFullYear()} Kantin Cemban. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
