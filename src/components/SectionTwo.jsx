import React from 'react';
import "../Sections.css";
import kamonr from '../assets/book.svg'
import watch from '../assets/watch.svg'


const SectionTwo = () => {
  return (
    <section className="mannof-selection-container">
      <div className="mannof-selection-wrapper">

        <div className="mannof-header-box">
          <p className="mannof-subtitle">Мы работаем только с</p>
          <h2 className="mannof-main-title">
            квалифицированными специалистами, которые прошли наш строгий отбор
          </h2>
          <p className="mannof-description">
            Помимо серии собеседований и испытаний по разработанной нами методологии,
            психологи предоставляют необходимые документы:
          </p>
        </div>

        <div className="mannof-grid-layout">

          {/* 1. Karta */}

          <div className="mannof-card mannof-vertical-card">
            <div className="mannof-icon-area">
              <img
                src={kamonr} alt="Education icon" className="mannof-karta-rasm" />
            </div>

            <div className="mannof-card-text">
              <h3 className="mannof-card-title">Образование</h3>
              <p className="mannof-card-p">
                Диплом о высшем психологическом образовании и дополнительные сертификаты
              </p>
            </div>
          </div>
          {/* 2. Karta */}
          <div className="mannof-card mannof-center-card">
            <h3 className="mannof-card-title">Опыт работы</h3>
            <p className="mannof-card-p">
              Подтвержденный опыт работы не менее 3-х лет
            </p>
          </div>

          {/* 3. Karta */}
          <div className="mannof-card mannof-center-card">
            <h3 className="mannof-card-title">Обучение</h3>
            <p className="mannof-card-p">
              Прохождение супервизии от 20 часов в год
            </p>
          </div>

          {/* 4. Karta */}
          <div className="mannof-card mannof-vertical-card">
            <div className="mannof-icon-area">
              <img
                src={watch} alt="Education icon" className="mannof-karta-rasm" />
            </div>

            <div className="mannof-card-text">
              <h3 className="mannof-card-title">Образование</h3>
              <p className="mannof-card-p">
                Диплом о высшем психологическом образовании и дополнительные сертификаты
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionTwo;