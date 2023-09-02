import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import PopularDestinations from "../components/PopularDestinations/PopularDestinations"
import RecentTrips from "../components/RecentTrips/RecentTrips"
import heroBg from "./../assets/img/2.jpg"

const AboutPage = () => {
    return (
        <>
            <Header heroBg={heroBg}
                title="About" />
        </>
    )
}

export default AboutPage