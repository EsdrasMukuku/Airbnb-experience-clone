// import Image from '../assets/image 12.png'
import Star from '../../public/assets/Star 1.png'

export default function Card(sum) {
    
    return (
        <div className="card">
        <img src={`../../public/assets/${sum.img}`} className="card--image" />
        <div className="card--stats">
            <img src={Star} className="card--star" />
            <span>{sum.rating}</span>
            <span className="gray">({sum.reviewCount}) • </span>
            <span className="gray">{sum.country}</span>
        </div>
        <p>{sum.title}</p>
        <p><span className="bold">From ${sum.price}</span> / person</p>
    </div>
    )
}