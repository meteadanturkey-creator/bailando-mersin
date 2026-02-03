export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-red-950 to-black">
        <h1 className="text-6xl md:text-7xl font-extrabold text-red-600 mb-4 tracking-wide">
          BAILANDO
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Latin Dans • Canlı Müzik • Gece Kulübü
        </p>

        <div className="flex gap-4">
          <a
            href="#rezervasyon"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg"
          >
            Masanı Ayırt
          </a>

          <a
            href="https://wa.me/905458875123?text=Merhaba,%20Bailando%20için%20rezervasyon%20yapmak%20istiyorum."
            className="border border-red-600 px-8 py-4 rounded-full text-lg"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-500 mb-6">
          Latin Ritmiyle Geceye Karış
        </h2>
        <p className="text-gray-300 leading-8">
          Bailando Music & Dance Bar, Mersin Yenişehir'de Latin müziği,
          dans ve canlı performansları bir araya getiren özel bir gece
          kulübüdür. Salsa, bachata ve ritmin hiç düşmediği geceler sizi
          bekliyor.
        </p>
      </section>

      {/* INFO */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="text-red-500 font-bold mb-2">📍 Adres</h3>
            <p>
              Çiftlikköy, 34. Cadde No:83/D<br />
              Yenişehir / Mersin
            </p>
          </div>
          <div>
            <h3 className="text-red-500 font-bold mb-2">⏰ Saatler</h3>
            <p>Her gün 16:00 – 01:00</p>
          </div>
          <div>
            <h3 className="text-red-500 font-bold mb-2">💃 Giriş</h3>
            <p>Kişi Başı ₺200–300</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-500 mb-8">
          Misafir Yorumları ⭐ 4.3/5
        </h2>

        <div className="space-y-6">
          <blockquote className="border-l-4 border-red-600 pl-4 italic">
            “Dans etmek ve eğlenmek için harika bir mekan.”
          </blockquote>
          <blockquote className="border-l-4 border-red-600 pl-4 italic">
            “Latin atmosferi müthiş, enerji dolu.”
          </blockquote>
          <blockquote className="border-l-4 border-red-600 pl-4 italic">
            “Yenişehir’in en keyifli gece kulüplerinden.”
          </blockquote>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="rezervasyon"
        className="bg-zinc-900 py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Rezervasyon
        </h2>
        <p className="text-lg mb-6">📞 0545 887 51 23</p>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-400">
        © {new Date().getFullYear()} Bailando Music & Dance Bar | Mersin
      </footer>

      {/* WHATSAPP GLOW BUTTON */}
      <a
        href="https://wa.me/905458875123?text=Merhaba,%20Bailando%20için%20rezervasyon%20yapmak%20istiyorum."
        style={{
  position: "fixed",
  bottom: "24px",
  right: "24px",
  padding: "16px",
  borderRadius: "50%",
  zIndex: 50
}}
className="whatsapp-glow"

        aria-label="WhatsApp Rezervasyon"
      >
        💬
      </a>
    </main>
  );
}
