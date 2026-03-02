import React from 'react'
import help from '../assets/specialist.png'

const Section4 = () => {
    return (
        <>
            <div className="help-container">
                <div className="help-left">
                    <h2>Экстренная помощь</h2>

                    <p className="desc">
                        Если вам необходима срочная психологическая помощь и вы чувствуете,
                        что не можете больше справляться самостоятельно, обратитесь по одному
                        из контактов ниже.
                    </p>

                    <div className="help-grid">
                        <div>
                            <p className="phone">+7 495 989 50 50</p>
                            <p>Центр экстренной психологической помощи МЧС России</p>
                        </div>

                        <div>
                            <p className="phone">+7 499 173 09 09</p>
                            <p>Московская служба психологической помощи населению</p>
                        </div>

                        <div>
                            <p className="phone">8 800 333 44 34</p>
                            <p>Бесплатная кризисная линия доверия</p>
                        </div>

                        <div>
                            <p className="phone">8 800 700 60 60</p>
                            <p>
                                Всероссийский телефон доверия для женщин, пострадавших от
                                домашнего насилия
                            </p>
                        </div>

                        <div>
                            <p className="phone">8 800 2000 122</p>
                            <p>Всероссийская служба детского телефона доверия</p>
                        </div>
                    </div>
                </div>

                <div className="help-right">
                    <img src={help} alt="" />
                </div>
            </div>
        </>
    )
}

export default Section4