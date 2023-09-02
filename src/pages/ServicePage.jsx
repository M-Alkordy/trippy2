import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import PopularDestinations from "../components/PopularDestinations/PopularDestinations"
import RecentTrips from "../components/RecentTrips/RecentTrips"
import heroBg from './../assets/img/8.jpg'

const ServicePage = () => {
    return (
        <>
            <Header heroBg={heroBg}
                title="service"
                />
        </>
    )
}

export default ServicePage