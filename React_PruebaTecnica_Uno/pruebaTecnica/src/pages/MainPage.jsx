import "../pages/mainPage.css"
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import CardMenu from '../components/CardMenu'

export default function MainPage() {

    return (
        <>
                <TopBar />
                <div className="container">
                    <CardMenu title="Popular series" theme="series"/>
                    <CardMenu title="Popular movies" theme="movies" />
                </div>
                <footer>
                    <Footer />
                </footer>
        </>
    )
}