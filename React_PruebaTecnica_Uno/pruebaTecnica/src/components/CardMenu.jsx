import './cardMenu.css'
import { Link } from 'react-router-dom'
export default function CardMenu(props) {
    return (
        <>
            <section>
                <Link to="movies">
                    <div className="card">
                        <img className='placeholderCardMenu' src="../../public/placeholder.png" alt="" />
                        <p className='pImg'>{props.theme}</p>
                    </div>
                    <p className='titleCard' >{props.title}</p>
                </Link>
            </section>
        </>
    );
}