import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        btnRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.6"
      );
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 ref={headingRef}>
          Shree Tiles <span>Service Pvt. Ltd.</span>
        </h1>
        <p ref={subRef}>
          Premium Tiles. Trusted Quality. Easy Installments.
        </p>
        <button ref={btnRef} className="gold-btn">
          View Collection
        </button>
      </div>
    </section>
  );
}