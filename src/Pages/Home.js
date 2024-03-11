import homeback from '../image/homeback.png'
import box1 from '../image/box1.png';
import box2 from '../image/box2.png';
import box3 from '../image/box3.png';
import home from '../pagestyle/home.css';
import Navbar from './Navbar';
const Home =()=>
{
    return<div>
        <Navbar/>
        <div class="section-hero">
        <div class="container">
        <div className="image-container">
        <img src={homeback} alt="Background" class="img" />
        <div className="overlay-text">
            <h3>New Arrival</h3>
            <h1>Dicover Our<br/>New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div class="button">Buy Now</div>
        </div>
      </div>
    </div>
    </div>
    <div class="box-text">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="browse-box">
        <div class="box">
            <img src={box1} alt='' class="box-img"/>
        </div>
        <div class="box">
            <img src={box2} alt='' class="box-img"/>
        </div>
        <div class="box">
            <img src={box3} alt='' class="box-img"/>
        </div>
        </div>
    </div>
}
export default Home;