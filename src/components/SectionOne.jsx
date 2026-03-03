import React from 'react';
import '../Sections.css'; 
import rasm from '../assets/planet.svg'
import pitichka from '../assets/check mark.svg'
import kamon from '../assets/target.svg'

const SectionOne = () => {
  return (
    <section className="mj-section">
      <h2 className="mj-sarlavha">Онлайн-психотерапия становится комфортнее</h2>
      
      <div className="mj-kartalar-tooplami">
        
        <div className="mj-karta">
          <div className="mj-icon-box">
             <img src={rasm} alt="Свобода" />
          </div>
          <h3 className="mj-karta-title">Свобода возможностей</h3>
          <p className="mj-karta-matn">
            Проходите сессию из любой точки мира, не тратьте время на дорогу
          </p>
        </div>

        <div className="mj-karta">
          <div className="mj-icon-box">
             <img src={pitichka} alt="Уверенность" />
          </div>
          <h3 className="mj-karta-title">Будьте уверены в своем выборе</h3>
          <p className="mj-karta-matn">
            Мы работаем только с квалифицированными специалистами, которые прошли строгий отбор
          </p>
        </div>

        <div className="mj-karta">
          <div className="mj-icon-box">
             <img src={kamon} alt="Запрос" />
          </div>
          <h3 className="mj-karta-title">Ваш запрос важен</h3>
          <p className="mj-karta-matn">
            Подберем опытного специалиста под ваш запрос
          </p>
        </div>

      </div>
    </section>
  );
};

export default SectionOne;