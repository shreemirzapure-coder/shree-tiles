import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shree Tiles Service Pvt. Ltd.</title>
      </Head>

      <div style={{ background: "#0a0a0a", color: "white", fontFamily: "Arial, sans-serif" }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "auto" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Shree Tiles Service Pvt. Ltd.
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "10px" }}>
            Premium Tiles in Easy Installments
          </p>
          <p style={{ color: "#aaa", marginBottom: "30px" }}>
            Nagpur | Balaghat
          </p>

          <a
            href="https://wa.me/919623640081"
            style={{
              padding: "12px 24px",
              background: "#25D366",
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            WhatsApp Us
          </a>

          <a
            href="tel:9623640081"
            style={{
              padding: "12px 24px",
              background: "white",
              color: "black",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            Call Now
          </a>
        </section>

        {/* PRODUCTS SECTION */}
        <section style={{ padding: "60px 20px", background: "#111" }}>
          <div style={{ maxWidth: "1100px", margin: "auto" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
              Our Tile Categories
            </h2>

            <ul style={{ lineHeight: "2" }}>
              <li>✔ Floor Tiles</li>
              <li>✔ Wall Tiles</li>
              <li>✔ Bathroom Tiles</li>
              <li>✔ Kitchen Tiles</li>
              <li>✔ Premium Vitrified Tiles</li>
            </ul>
          </div>
        </section>

        {/* EMI SECTION */}
        <section style={{ padding: "60px 20px" }}>
          <div style={{ maxWidth: "1100px", margin: "auto" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              Easy EMI Available
            </h2>
            <p style={{ color: "#aaa" }}>
              Buy tiles on easy monthly installments using our credit card
              machine facility. Build your dream home without financial stress.
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section style={{ padding: "60px 20px", background: "#111" }}>
          <div style={{ maxWidth: "1100px", margin: "auto" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              About Us
            </h2>
            <p style={{ color: "#aaa" }}>
              Shree Tiles Service Pvt. Ltd. provides high-quality tiles with
              flexible payment options. Our goal is to deliver premium products
              at affordable installment plans for every customer.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "30px 20px", textAlign: "center", background: "#000" }}>
          <p style={{ color: "#777" }}>
            © {new Date().getFullYear()} Shree Tiles Service Pvt. Ltd. | Balaghat
          </p>
        </footer>

      </div>
    </>
  );
}