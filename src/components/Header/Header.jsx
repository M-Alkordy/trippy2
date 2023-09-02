import './HeaderStyle.css'
import Hero from '../Hero/Hero'
const Header = ({heroBg , info , title , btn , visible }) => {
    return (
        <div className="header">
            <Hero bg={heroBg}
                title={title}
                info={info}
                btn={btn}
                visible = {visible} />
        </div>
    )
}

export default Header