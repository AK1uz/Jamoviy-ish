import React from 'react'

const Section3 = () => {
    return (
        <>
            <section>
                <div className="container">
                    <h1 className='sect-tittle'>Вопросы - ответы</h1>
                    <div className='flex'>
                        <div className="right">
                            <h1 className='h1'>Эффективно ли работать с психологом онлайн?</h1>
                            <p className='p'>Да, эффективно и уже является стандартной практикой во всем мире.
                                За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.</p>
                        </div>
                        <div>
                            <h1 className="p-and-m">__</h1>
                        </div>
                    </div>
                    {/* flex-1 */}
                    <div className='flex'>
                        <div className="right">
                            <h1 className='h1'>Как выбрать специалиста?</h1>
                        </div>
                        <div>
                            <h1 className="p-and-m">+</h1>
                        </div>
                    </div>
                    {/* flex-2 */}
                    <div className='flex'>
                        <div className="right">
                            <h1 className='h1'>Чувствую, что мне нужна помощь, но не понимаю в чём проблема.
                                <br />Как быть?</h1>
                        </div>
                        <div>
                            <h1 className="p-and-m">+</h1>
                        </div>
                    </div>
                    {/* flex-3 */}
                    <div className='flex'>
                        <div className="right">
                            <h1 className='h1'>Как вы отбираете психологов в базу?</h1>
                        </div>
                        <div>
                            <h1 className="p-and-m">+</h1>
                        </div>
                    </div>
                    {/* flex-4 */}
                    <div className='flex'>
                        <div className="right">
                            <h1 className='h1'>В чем разница между психологом, психотерапевтом и психиатром <br /> и как понять кто мне нужен?</h1>
                        </div>
                        <div>
                            <h1 className="p-and-m">+</h1>
                        </div>
                    </div>
                    {/* flex-5 */}
                    <div className='flex'>
                        <div className="right">
                            <h1 className='h1'>Какое количество сессий мне необходимо, чтобы получить результат?</h1>
                        </div>
                        <div>
                            <h1 className="p-and-m">+</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3