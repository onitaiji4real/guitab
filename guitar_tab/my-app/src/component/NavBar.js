import '../scss/NavBar.scss';
import brandImg from '../images/brand.drawio.svg' 
import { Link } from 'react-router-dom'
import ParticleButton from './ParticleButton';

export default function NavBar(props){
    const {setNowPage,nowPage} = props;
    return(
        <nav className="nav-bar">
            <div className="logo-img">
                <img src={brandImg} alt='brand'/>
            </div>
            <div className="brand-title">GuiTab</div>
            <div className="link-area">

        
                <Link className='link-item' to="home">
                    <button className='item-page' >介紹
                    </button>
                </Link>
  
            
            
            <Link className='link-item' to="execute">
                <button className='item-page'>體驗
                   
                </button>
            </Link>
   



                
            </div>
        </nav>
    );
}
