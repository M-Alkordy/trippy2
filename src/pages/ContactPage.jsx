import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import PopularDestinations from "../components/PopularDestinations/PopularDestinations"
import RecentTrips from "../components/RecentTrips/RecentTrips"
import heroBg from './../assets/img/1.jpg'

const ContactPage = () => {
    return (
        <>
            <Header heroBg={heroBg}
                title="contact"
                />
            <PopularDestinations />
            <RecentTrips />
        </>
    )
}

export default ContactPage