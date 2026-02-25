import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const [months, setMonths] = useState(6);

  const emi = months > 0 ? (amount / months).toFixed(2) : "0.00";

  return (
    <>
      <Head>
        <title>Shree Tiles Service Pvt. Ltd.</title>
      </Head>

      <div style={{ background: "#0a0a0a", color: "white", fontFamily: "Arial, sans-serif" }}>
        
        {/* HERO */}
        <section style={{ padding: "80px 20px", textAlign: "center" }}>
          <img
            src="/logo.png"
            alt="Shree Tiles Logo"
            style={{ width: "150px", marginBottom: "20px" }}
          />

          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Shree Tiles Service Pvt. Ltd.
          </h1>

          <p style={{ fontSize: "20px", marginBottom: "10px" }}>
            Premium Tiles in Easy Installments
          </p>

          <p style={{ color: "#aaa", marginBottom: "30px" }}>
            Nagpur | Balaghat
          </p>

          <div style={{ marginTop: "20px" }}>
  <a
    href="https://wa.me/919623640081"
    style={{
      background: "#25D366",
      color: "white",
      padding: "12px 25px",
      textDecoration: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      marginRight: "15px"
    }}
  >
    WhatsApp
  </a>

  <a
    href="tel:9623640081"
    style={{
      background: "white",
      color: "black",
      padding: "12px 25px",
      textDecoration: "none",
      borderRadius: "6px",
      fontWeight: "bold"
    }}
  >
    Call Now
  </a>
</div>
        </section>

        {/* TILE TYPES */}
        <section style={{ padding: "60px 20px", background: "#111" }}>
          <div style={{ maxWidth: "1000px", margin: "auto" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              Our Tile Categories
            </h2>

            <ul style={{ lineHeight: "2", fontSize: "18px" }}>
              <li>✔ Floor Tiles</li>
              <li>✔ Wall Tiles</li>
              <li>✔ Bathroom Tiles</li>
              <li>✔ Kitchen Tiles</li>
              <li>✔ Premium Vitrified Tiles</li>
              <li>✔ Designer Tiles</li>
            </ul>
          </div>
        </section>

        {/* EMI INFO */}
        <section style={{ padding: "60px 20px" }}>
          <div style={{ maxWidth: "1000px", margin: "auto" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              Easy EMI Available
            </h2>
            <p style={{ color: "#aaa", fontSize: "18px" }}>
              Buy tiles on easy monthly installments using our credit card
              facility. Build your dream home without financial stress.
            </p>
          </div>
        </section>

        {/* EMI CALCULATOR */}
        <section style={{ padding: "60px 20px", background: "#111" }}>
          <div style={{ maxWidth: "600px", margin: "auto" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
              EMI Calculator
            </h2>

            <div style={{ marginBottom: "15px" }}>
              <label>Total Amount (₹)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Number of Months</label>
              <input
                type="number"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              />
            </div>

            <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
              Monthly EMI: ₹ {emi}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ padding: "60px 20px" }}>
          <div style={{ maxWidth: "1000px", margin: "auto" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              About Us
            </h2>
            <p style={{ color: "#aaa", fontSize: "18px" }}>
              Shree Tiles Service Pvt. Ltd. provides high-quality tiles with
              flexible payment options. We aim to deliver premium products
              at affordable installment plans for every customer.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "30px", textAlign: "center", background: "#000" }}>
          © {new Date().getFullYear()} Shree Tiles Service Pvt. Ltd.
        </footer>
      </div>
    </>
  );
}