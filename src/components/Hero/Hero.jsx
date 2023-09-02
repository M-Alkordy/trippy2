import './HeroStyle.css'

export default function Hero({ bg, title, info, btn , visible }) {
    return (
        <div className='hero'>
            <img src={bg} alt="" />
            <div className="desc">
                <h1>{title}</h1>
                <p>{info}</p>
                <button className={(visible == "visible") ? "visible" : ""}>{btn}</button>
            </div>
        </div>
    )
}
