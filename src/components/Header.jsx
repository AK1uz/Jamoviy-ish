import React from 'react';
import '../index.css';
import rasmcha from '../assets/logo_yoki_rasm.svg'

const Header = () => {
  return (
    <div className="Akbarjon-container">
      
    <nav className="Akbarjon-navbar">
      <div className="Akbarjon-logo-blok">
        <div className="Akbarjon-icon"></div>
        <span className="Akbarjon-yozuv">youmi</span>
      </div>

      <ul className="Akbarjon-menyu">
        <li><a href="#">О нас</a></li>
        <li><a href="#">Тарифы</a></li>
        <li><a href="#">Психологам</a></li>
        <li><a href="#">Материалы</a></li>
      </ul>

      <button className="Akbarjon-tugma-oq">Личный кабинет</button>
    </nav>

    <header className="Akbarjon-hero">
      <div className="Akbarjon-chap-tomon">
        <h1 className="Akbarjon-sarlavha-binafsha">Вместе мы справимся</h1>
        <h2 className="Akbarjon-sarlavha-katta">
          Найдите своего <br /> 
          <span>психолога онлайн</span>
        </h2>
        
        <div className="Akbarjon-action">
          <button className="Akbarjon-tugma-asosiy">Найти психолога</button>
          <p className="Akbarjon-narx">2770 руб. за 50 минут сессии</p>
        </div>
      </div>

      <div className="Akbarjon-oong-tomon">
        <div className="Akbarjon-rasm-joyi">
           <img src={rasmcha} alt="Illustration" />
        </div>
      </div>
    </header>
  </div>
  );
};

export default Header;