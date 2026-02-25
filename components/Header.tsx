import Image from "next/image";

export default function Header() {
  return (
    <header style={{
      background: "#0a0a0a",
      borderBottom: "1px solid #333",
      padding: "20px",
      textAlign: "center"
    }}>
      <a href="/" style={{ textDecoration: "none" }}>
        <Image
          src="/logo.png"
          alt="Shree Tiles Logo"
          width={150}
          height={150}
          priority
        />
      </a>
    </header>
  );
}
