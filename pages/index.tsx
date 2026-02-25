import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const [months, setMonths] = useState(6);

  const emi = months > 0 ? (amount / months).toFixed(2) : 0;

  return (
    <>
      <div style={{ background: "#0a0a0a", color: "white" }}>

        {/* EMI CALCULATOR */}
        <section style={{ padding: "60px 20px", background: "#000" }}>
          <div style={{ maxWidth: "600px", margin: "auto" }}>
            <h2>EMI Calculator</h2>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />

            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
            />

            <div>Monthly EMI: ₹ {emi}</div>
          </div>
        </section>

      </div>
    </>
  );
}