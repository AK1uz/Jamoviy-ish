import React from 'react'
import ques from '../assets/questionnaire.png'
import profile from '../assets/profiles.png'
import cal from '../assets/calendar.png'
import test from '../assets/test.png'
import cal1 from '../assets/calendar (1).png'

const Section1 = () => {
    return (
        <>

            <div className="container">
                <section className='sect1'>
                    <h1 className='sect-tittle'>Сделайте 4 шага навстречу психотерапии</h1>
                    <div className="card-box">
                        <div className="box">
                            <div className="left">
                                <h1 className='box-number'>1</h1>
                                <div>
                                    <h3>Заполните анкету,</h3>
                                    <p className='sect1-p'>ответив на
                                        5 простых вопросов, определив тему и
                                        пожелания по
                                        психологу.</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={ques} alt="" />
                            </div>
                        </div>
                        {/* box-2 */}
                        <div className="box">
                            <div className="left">
                                <div className="right">
                                    <img src={profile} alt="" />
                                </div>
                                <h1 className='box-number'>2</h1>
                                <div>
                                    <h3>Ознакомьтесь с профилями</h3>
                                    <p className='sect1-p'>специалистов и посмотрите видео-визитки. Выберите психолога с которым вам будет комфортно.</p>
                                </div>
                            </div>
                        </div>
                        {/* box-3 */}
                        <div className="box">
                            <div className="left">
                                <h1 className='box-number'>3</h1>
                                <div>
                                    <h3>Определите дату и время</h3>
                                    <p className='sect1-p'>первой сессии. Если у вас поменяются планы, вы сможете ее отменить или перенести.</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={cal} alt="" />
                            </div>
                        </div>
                        {/* box-4 */}
                        <div className="box">
                            <div className="left">
                                <div className="right">
                                    <img src={test} alt="" />
                                </div>
                                <h1 className='box-number'>4</h1>
                                <div>
                                    <h3>Пройдите тестирование</h3>
                                    <p className='sect1-p'>в личном кабинете для того, чтобы сделать первую сессию более продуктивной.</p>
                                </div>
                            </div>
                        </div>
                        {/* no-card */}
                        <div className="box">
                            <div className="left">
                                <img src={cal1} alt="" />
                                <div>
                                    <p className='sect1-p'>Мы напомним вам о сессии за сутки и за час до начала</p>
                                </div>
                            </div>
                            <div className="right">
                                <button className='no-btn'>Сделать первый шаг</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Section1