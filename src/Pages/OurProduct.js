import ourproduct from '../pagestyle/ourproduct.css'
const OurProduct = (props) => {
    return <div class="box">
        <div>
            <img src={props.imageUrl} alt="" />
        </div>
        <div>
        <div class="h3">
            <h3>{props.title}</h3>
        </div>
        <div class="p">
            <p>{props.pragraph}</p>
        </div>
        <div class="span">
            <span>{props.rs}</span>
        </div>
        </div>
    </div>
}
export default OurProduct;