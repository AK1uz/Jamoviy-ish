import React from 'react'
import phone from '../assets/phone.png'

const Section2 = () => {
    return (
        <>
            <section className="youmi">
                <div className="container youmi-wrapper">

                    {/* LEFT */}
                    <div className="youmi-left">
                        <h2>
                            YouMi заботиться о вас даже <br />
                            вне сессий
                        </h2>

                        <p className="desc">
                            Работая с YouMi от 4 сессий мы дарим доступ
                            к приложению с виртуальным психологом.
                        </p>

                        <ul className="youmi-list">
                            <li>Прорабатывайте себя с помощью упражнений и аудиопрактик</li>
                            <li>Ведите личный дневник настроения и получайте статистику</li>
                            <li>Расскажите психологу о чувствах и получите материал</li>
                        </ul>

                        <button className="app-btn">
                            Доступно в App Store
                        </button>
                    </div>

                    <div className="youmi-right">
                        <img src={phone} alt="" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Section2