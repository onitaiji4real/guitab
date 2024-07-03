import './scss/Home.scss'
import image1 from './images/poet.jpg'
import image2 from './images/ai.jpg'
import image3 from './images/speed.jpg'
import image4 from './images/girl.jpg'
import ParticleButton from './component/ParticleButton';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();



export default function Home(){

    return(
        <div className="main-page">
            <div className="title-background">
                <div data-aos="zoom-out-up" data-aos-duration="800" className='title-animation'>
                    <div className="title">
                        <h1>GuiTab</h1>
                    </div>
                </div>

            </div>
            <div className="introduce-area">
                <div data-aos="fade-right" className="i-1">
                    <div className='i-img'>
                        <img src={image1} alt='1'/>
                    </div>
                    <div className='i-data'>
                        <h2>熱愛音樂的你</h2>
                        <p>如果你是一位對音樂充滿熱情的樂迷，卻總是為找不到喜愛樂曲的樂譜而感到沮喪，我們的網站就是為你設計的。只需一個 Youtube 影片網址，即可輕鬆獲得你最愛歌曲的完整 Tab 譜。</p>
                    </div>
                </div>
                <hr/>
                
                <div data-aos="fade-right" className="i-2">
                    <div className='i-img'>
                        <img src={image2} alt='2'/>
                    </div>
                    <div className='i-data'>
                        <h2>智慧應用，簡單使用</h2>
                        <p>一個擁有智慧辨識技術的平台。使用者只需複製並貼上 Youtube 影片網址（須含吉他譜），系統就能夠智慧辨識其中的 Tab 譜，將你所愛的音樂完整呈現在你面前。</p>
                    </div>
                </div>
                <hr/>
                <div data-aos="fade-right"  className="i-1">
                    <div className='i-img'>
                        <img src={image3} alt='3'/>
                    </div>
                    <div className='i-data'>
                        <h2>隨時隨地享受音樂的人</h2>
                        <p>如果你是一位現代生活忙碌，卻仍然想隨時隨地享受音樂的人，我們的多平台支援確保你在任何時間、任何地點都能夠輕鬆進入音樂的世界，無縫切換平台，無縫享受音樂。</p>
                    </div>
                </div>
                <hr/>
                <div data-aos="fade-right" className="i-2">
                    <div className='i-img'>
                        <img src={image4} alt='4'/>
                    </div>
                    <div className='i-data'>
                        <h2>學習吉他的新手</h2>
                        <p>如果你是一位初學吉他的新手，對於如何開始彈奏一首歌感到迷茫，別擔心！我們的智慧辨識技術能夠簡化整個學習過程，讓你輕鬆掌握彈奏技巧，享受音樂帶來的樂趣。</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="right-now">
                <h2>弦外之音，一指成樂</h2>
                <h2>即刻體驗GuiTab的奇蹟</h2>
                    <Link to="execute" className='link-to-execute' >
                        <ParticleButton/>
                    </Link>
  
                
                
            </div>
        </div>
    );
}