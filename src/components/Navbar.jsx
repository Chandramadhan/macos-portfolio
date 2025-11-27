// ...existing code...
import dayjs from "dayjs";
import { navLinks, navIcons } from "../constants/links";



const Navbar = () => {
    return(
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo"/>
            <p className="font-bold">Maddy's Portfolio</p>
            <ul>
                {navLinks.map(({id, title}) => (
                    <li key={id}>
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {navIcons.map(({id,img}) => (
                    <li key={id}>
                        <img src={img} className="icon-hover"
                    alt={`icon-${id}`}/>
                    </li>
                ))}
            </ul>
            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
    )
}
export default Navbar;
// ...existing code...