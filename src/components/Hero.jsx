import ImageGrid from '../../public/assets/Group 77.png'

export default function Hero(){
    return (
        <div className="hero">
            <img src={ImageGrid} alt="" className='hero-image'/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by a one-of-a-kind hosts-all without leabing home.</p>
        </div>
    )
}