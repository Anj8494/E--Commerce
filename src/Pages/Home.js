import { Grid } from '@mui/material';
import home from '../pagestyle/home.css';
import Navbar from './Navbar';
import OurProduct from './OurProduct';



const Home = () => {
    return <div>
        <Navbar />
        <div class="section-hero">
            <div class="container">
                <div className="image-container">
                    <img src="/image/homeback.png" alt="Background" class="img" />
                    <div className="overlay-text">
                        <h3>New Arrival</h3>
                        <h1>Dicover Our<br />New Collection</h1>
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
                <img src="/image/box1.png" alt='' class="box-img" />
                <h2>Dining</h2>
            </div>
            <div class="box2">
                <img src="/image/box2.png" alt='' class="box-img" />
                <h2>Living</h2>
            </div>
            <div class="box3">
                <img src="/image/box3.png" alt='' class="box-img" />
                <h2>Bedroom</h2>
            </div>
        </div>
        <div class="our-products">
            <h1>Our Products</h1>
            <div class="our-product-wrapper">
                <div class="product-box">
                    <OurProduct
                        imageUrl="/image/our1.png"
                        title="Syltherine"
                        pragraph="Stylish cafe chair"
                        rs="Rp 2.500.000" />
                </div>
                <div class="product-box">
                    <OurProduct
                        imageUrl="/image/our2.png"
                        title="Leviosa"
                        pragraph="Stylish cafe chair"
                        rs="Rp 2.500.000" />
                </div>
                <div class="product-box">
                    <OurProduct
                        imageUrl="/image/our3.png"
                        title="Lolito"
                        pragraph="Luxury big sofa"
                        rs="Rp 7.000.000" />
                </div>
                <div class="product-box">
                    <OurProduct
                        imageUrl="/image/our4.png"
                        title="Respira"
                        pragraph="Outdoor bar table and stool"
                        rs="Rp 500.000" />
                </div>
            </div>
            <div class="our-product-wrapper">
                <div class="product-box">
                    <OurProduct
                        imageUrl="/image/our5.png"
                        title="Grifo"
                        pragraph="Night lamp"
                        rs="Rp 1.500.000" />
                </div>
                <div class="product-box">
                    <OurProduct
                        imageUrl="/image/our6.png"
                        title="Muggo"
                        pragraph="Small mug"
                        rs="Rp 150.000" />
                </div>
                <div class="product-box">
                    <OurProduct
                        imageUrl="/image/our7.png"
                        title="Pingky"
                        pragraph="Cute bed set"
                        rs="Rp 7.000.000" />
                </div>
                <div class="product-box">
                    <OurProduct
                        imageUrl="/image/our8.png"
                        title="Potty"
                        pragraph="Minimalist flower pot"
                        rs="Rp 500.000" />
                </div>
            </div>
        </div>
        <div class="button-box">
            <button>Show More</button>
        </div>
       <div class="box-1">
        <div>
        <div class="inspiration">
            <h3>50+ Beautiful rooms <br/> inspiration</h3>
        </div>
        </div>
       </div>
    </div>
}
export default Home;