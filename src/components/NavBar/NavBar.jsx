import './NavStyle.css';
import { AiFillHome } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { FaToolbox } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';
import { Link } from 'react-router-dom'

export default function NavBar({elements}) {
  return (
    <nav>
        <h1 className="logo">Trippy</h1>
        <div className="navItems">
        <ul>
          {elements.map((element , index) => {
            return <Link to ={element.path} key={index}><li><AiFillHome /> {element.name}</li></Link>
          })}
{/*             <Link to ="/" ><li><AiFillHome /> Home</li></Link>
            <Link to="/about"> <li> <HiInformationCircle /> About</li></Link>
            <Link to="/service"><li><FaToolbox /> Service</li></Link>
            <Link to="/contact"><li><BiSolidContact /> Contact</li></Link> */}
        </ul>
        <button>sign up</button>
        </div>
    </nav>
  )
}