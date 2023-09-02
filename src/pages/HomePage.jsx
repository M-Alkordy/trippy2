import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import PopularDestinations from "../components/PopularDestinations/PopularDestinations"
import RecentTrips from "../components/RecentTrips/RecentTrips"
import heroBg from './../assets/img/12.jpg'

const HomePage = () => {
    return (
        <>
            <Header heroBg={heroBg}
                title="Your Journey Your Story"
                info="Choose Your Favourite Destination."
                btn="travel now" 
                visible = "visible"
                />
            <PopularDestinations />
            <RecentTrips />
        </>
    )
}

export default HomePage