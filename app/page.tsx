export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom, #000, #2a0000, #000)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            color: "#ff2a2a",
            letterSpacing: "4px",
            marginBottom: "20px",
          }}
        >
          BAILANDO
        </h1>

        <p style={{ fontSize: "22px", marginBottom: "30px" }}>
          Latin Dans • Canlı Müzik • Gece Kulübü
        </p>

        <a
          href="https://wa.me/905458875123?text=Merhaba,%20Bailando%20için%20rezervasyon%20yapmak%20istiyorum."
          style={{
            padding: "16px 32px",
            borderRadius: "30px",
            border: "2px solid #ff2a2a",
            color: "#fff",
            fontSize: "18px",
          }}
        >
          WhatsApp’tan Rezervasyon
        </a>
      </section>

      {/* INFO */}
      <section
        style={{
          backgroundColor: "#111",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <p>📍 Çiftlikköy, 34. Cadde No:83/D – Yenişehir / Mersin</p>
        <p>⏰ Her gün 16:00 – 01:00</p>
        <p>💃 Kişi Başı ₺200–300</p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Bailando Music & Dance Bar
      </footer>

      {/* WHATSAPP GLOW BUTTON */}
      <a
        href="https://wa.me/905458875123?text=Merhaba,%20Bailando%20için%20rezervasyon%20yapmak%20istiyorum."
        className="whatsapp-glow"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "16px",
          borderRadius: "50%",
          zIndex: 999,
        }}
        aria-label="WhatsApp Rezervasyon"
      >
        💬
      </a>
    </main>
  );
}
