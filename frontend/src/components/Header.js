import React, { useEffect, useRef } from 'react';
function Header() {
  const textRef = useRef(null);
  useEffect(() => {
    const el = textRef.current;
    let i = 0;
    const txt = "Découvrez nos services et notre savoir-faire";
    const speed = 50;
    function typeWriter() {
      if (i < txt.length) {
        el.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }, []);
  return (
    <header>
      <div className="overlay">
        <h1>Bienvenue sur Site Vitrine</h1>
        <p ref={textRef}></p>
        <a href="#about">En savoir plus</a>
      </div>
    </header>
  );
}
export default Header;
