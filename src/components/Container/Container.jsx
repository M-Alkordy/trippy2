import './ContainerStyle.css'

export default function Container(props) {
  return (
    <div className='container' style={{flexDirection : props.reverse}}>
        <div className="desc">
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
        <div className="images">
            <img src={props.firstPic} alt="" />
            <img src={props.secPic} alt="" />
        </div>
    </div>
  )
}
