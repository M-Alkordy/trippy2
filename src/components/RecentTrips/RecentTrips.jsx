import React from 'react'
import Card from '../Card/Card'
import firstPic from './../../assets/img/5.jpg'
import secPic from './../../assets/img/8.jpg'
import thirdPic from './../../assets/img/1.jpg'
import './RecentTripsStyle.css'
export default function RecentTrips() {
  return (
    <div className='RecentTrips'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps.</p>
        <div className="container">
            <Card
            title = "Trip in Indonesia"
            info = "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
            pic = {firstPic} />
            <Card
            title = "Trip in Indonesia"
            info = "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
            pic = {secPic} />
            <Card
            title = "Trip in France"
            info = "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
            pic = {thirdPic} />
        </div>
    </div>
  )
}
