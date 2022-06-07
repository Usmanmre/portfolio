import './home.css';
import img from '../props/img1.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
      

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          I'm Usman. A student of Computer Science at Air University Islamabad. Currently stuing in 6th semester. I'm a freelance Graphic Designer too. 
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;