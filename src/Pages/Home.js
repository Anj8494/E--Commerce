import homeback from '../image/homeback.png'
import box1 from '../image/box1.png';
import box2 from '../image/box2.png';
import box3 from '../image/box3.png';
import our1 from '../image/our1.png';
import our2 from '../image/our2.png';
import our3 from '../image/our3.png';
import our4 from '../image/our4.png';
import our5 from '../image/our5.png';
import our6 from '../image/our6.png';
import our7 from '../image/our7.png';
import our8 from '../image/our8.png';
import home from '../pagestyle/home.css';
import Navbar from './Navbar';

const ourproduct= 
[
    {
        id:1,
        image:"../image/our1.png" ,
        heading:"Syltherine",
        p:"Stylish cafe chair",
        rs:"Rp 2.500.000"
    },
    {
        id:2,
        image:"../image/our2.png",
        heading:"Leviosa",
        p:"Stylish cafe chair",
        rs:"Rp 2.500.000"
    },
    {
        id:3,
        image:"../image/our3.png",
        heading:"Respira",
        p:"Luxury big sofa",
        rs:"Rp 7.000.000" 
    },
    {
        id:4,
        image:"../image/our4.png",
        heading:"Respira",
        p:"Outdoor bar table and stool",
        rs:"Rp 500.000"
    },
    {
        id:5,
        image:"../image/our5.png",
        heading:"Grifo",
        p:"Night lamp",
        rs:"Rp 1.500.000"
    },
    {
        id:6,
        image:"../image/our6.png",
        heading:"Muggo",
        p:"Small mug",
        rs:"Rp 150.000"
    },
    {
        id:7,
        image:"../image/our7.png",
        heading:"Pingky",
        p:"Cute bed set",
        rs:"Rp 7.000.000"
    },
    {
        id:8,
        image:"../image/our8.png",
        heading:"Potty",
        p:"Minimalist flower pot",
        rs:"Rp 500.000"
    },
];

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
        <div class="box1">
            <img src={box1} alt='' class="box-img"/>
            <h2>Dining</h2>
        </div>
        <div class="box2">
            <img src={box2} alt='' class="box-img"/>
            <h2>Living</h2>
        </div>
        <div class="box3">
            <img src={box3} alt='' class="box-img"/>
            <h2>Bedroom</h2>
        </div>
        </div>
        <div class="our-products">
            <h1>Our Products</h1>
            {ourproduct.map(product =>(
                <div class="product" key={product.id}>
                    <img src={product.image} alt=''/>
                    <h2>{product.heading}</h2>
                    <p>{product.p}</p>
                    <span>{product.rs}</span>
                </div>
            ))}
            
        </div>
</div>
}
export default Home;