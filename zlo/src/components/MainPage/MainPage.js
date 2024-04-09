import React from 'react';
import './MainPage.css';
import Spline from '@splinetool/react-spline';

var styles = {
    frame: {
      width: '100%',
      height: '100%'
    },
    container: {
        display: 'flex'
    },
    padding_top: {
        padding: '20px 0 0 0'
    },
    padding_bottom: {
        padding: '0 0 10px 0'
    }
  };

function MainPage(props) {
    return (
        <div className='main__container' style={styles.container}>
            <div className='first__container'>
                <Spline scene="https://prod.spline.design/k4awmbBxmUewMdlG/scene.splinecode" style={styles.frame}/>
                
            </div>
            <div className='second__container'>
                <div className='container__desc'>
                    <h1 
                    style={styles.padding_bottom}
                    >ИМПЕРИЯ ЗЛА.</h1>
                    <p className='p__desc'>
                        сайт разработанный для помощи
                        в решении задач по физике
                    </p>
                    <a href='#formulas'
                    className='btn'> ПРИСТУПИТЬ </a>
                    <p className='formulas__desc'
                    style={styles.padding_top}
                    >присутствуют формулы:</p>
                    <p className='formulas__desc'>
                        физика 8 класс<br/>
                        физика 9 класс<br/>
                        физика 10 класс</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage;