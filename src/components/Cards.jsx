// import Image from '../assets/image 12.png'
import Star from '../../public/assets/Star 1.png'

export default function Card(sum) {
    let badgeText
    if (sum.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (sum.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../../public/assets/${sum.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={Star} className="card--star" />
                <span>{sum.item.stats.rating}</span>
                <span className="gray">({sum.item.stats.reviewCount}) • </span>
                <span className="gray">{sum.item.location}</span>
            </div>
            <p className="card--title">{sum.item.title}</p>
            <p className="card--price"><span className="bold">From ${sum.item.price}</span> / person</p>
        </div>
    )
}