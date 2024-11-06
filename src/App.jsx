import Header from './pages/Sunsets.jsx';
import Footer from './Footer.jsx';
import Card from './assets/Card.jsx';
import profilePic from './assets/Screenshot 2024-09-02 130134.png';
import delMarPic from './assets/456611598_390218970523593_7899770506662195826_n.jpg';
import scrippsPic from './assets/457876908_1022501336084494_4154383575742895363_n.jpg';
import windAndSeaPic from './assets/Wind-and-Sea-Beach-San-Diego.jpg';
import laJollaShoresPic from './assets/Screenshot 2024-09-05 000306.png'
import tourmulinePic from './assets/da-Surf-Engine-Store-banner-1024x438.png'
import Navbar from './Navbar.jsx';
import Surf from './pages/Surf.jsx';
import OffRoading from './pages/offRoading.jsx';
import otayTrailPic from "./assets/otay-mountain-jeep.webp";
import corralCanyonPic from "./assets/fseprd517285.jpg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const cardDataSunsets = [
  {
    id: 1,
    image: profilePic,
    name: "Catan",
    rating: 10,
    goBack: true,
    directionsLink: "https://www.google.com/maps/search/Barnes+and+Noble/@33.043683,-117.3118198,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    image: delMarPic,
    name: "Del Mar",
    rating: 8.5,
    goBack: true,
    directionsLink: "https://www.google.com/maps/dir/32.8605951,-117.2210926/Del+Mar+Beach+%26+Marina,+12th+Street,+Oceanside,+CA/@33.043683,-117.3118198,11z/data=!3m2!4b1!5s0x80dc03e421162e57:0x37f00b42c01bbea0!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80dc6fa158a88677:0x43cad43ed1814705!2m2!1d-117.4054265!2d33.2212674?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 3,
    image: scrippsPic,
    name: "Scripps",
    rating: 10,
    goBack: true,
    directionsLink: "https://www.google.com/maps/dir/32.8605951,-117.2210926/Pinpoint+Cafe,+Biological+Grade,+La+Jolla,+CA/@32.8651604,-117.2292845,13z/data=!3m1!5s0x80dc03e421162e57:0x37f00b42c01bbea0!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80dc0763b9aab97d:0x3e4bd31ca5f447ed!2m2!1d-117.2528029!2d32.8671401?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 4,
    image: windAndSeaPic,
    name: "Wind and Sea",
    rating: 7,
    goBack: true,
    directionsLink: "https://www.google.com/maps/dir/32.8605951,-117.2210926/Windansea+Beach,+San+Diego,+CA/@32.8577003,-117.2396335,13z/data=!3m1!5s0x80dc03e421162e57:0x37f00b42c01bbea0!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80dc03c2e95a5581:0xace908f374acad80!2m2!1d-117.2811488!2d32.8311587?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D"
  }
];

const cardDataSurf = [
  {
    id: 1,
    image: laJollaShoresPic,
    name: "La Jolla Shores",
    rating: 6,
    goBack: true,
    directionsLink: "https://www.google.com/maps/dir/32.8605951,-117.2210926/la+Jolla+Shores+Beach,+San+Diego,+CA/@32.8553401,-117.2306974,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80dc0152f304cdc9:0xf86a9dbe70028681!2m2!1d-117.2574626!2d32.8570992?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    image: tourmulinePic,
    name: "Tourmaline",
    rating: 7,
    goBack: true,
    directionsLink: "https://www.google.com/maps/dir/32.8605951,-117.2210926/Tourmaline+Beach,+601+Tourmaline+St,+San+Diego,+CA+92109/@32.8294922,-117.2329563,13z/data=!3m1!4b1!4m17!1m7!3m6!1s0x80dc0188b2a8dfb9:0x971cc74825afb1a7!2sTourmaline+Beach!8m2!3d32.8053716!4d-117.2619803!16s%2Fg%2F11fxcgh1b8!4m8!1m1!4e1!1m5!1m1!1s0x80dc0188b2a8dfb9:0x971cc74825afb1a7!2m2!1d-117.2619803!2d32.8053716?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D",
  },
  
];

const cardDataOffRoading = [
  {
    id: 1,
    image: otayTrailPic,
    name: "Otay Mountain",
    rating: 8,
    goBack: true,
    directionsLink: "https://www.google.com/maps/dir/32.9441817,-117.2407412/Otay+Mountain+Truck+Trail,+California/@32.7762046,-117.032707,10z/data=!3m1!4b1!4m18!1m8!3m7!1s0x80d9417a2e5a7211:0x85ccba4d81842698!2sOtay+Mountain+Truck+Trail,+California!3b1!8m2!3d32.607759!4d-116.8436686!16s%2Fg%2F1th5cvsn!4m8!1m1!4e1!1m5!1m1!1s0x80d9417a2e5a7211:0x85ccba4d81842698!2m2!1d-116.8436686!2d32.607759?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    image: corralCanyonPic,
    name: "Corral Canyon",
    rating: 8,
    goBack: true,
    directionsLink: "https://www.google.com/maps/dir//Corral+Canyon+Tl,+Campo,+CA+91906/@32.7246365,-116.6416643,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80d97100f2693d1b:0xc07e15497c339871!2m2!1d-116.5592631!2d32.7246634?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
  },
  
]

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={
          <>
            <h1>Welcome!</h1>
            <p1>
              Use the navigation bar to see San Diego's best: surf spots, off roading trails,
              and sunsets
            </p1>

            <Footer />
          </>
        } />

        <Route path="/sunSets" element={
          <>
            <Header />
            {cardDataSunsets.map(card => (
              <Card
                key={card.id}
                image={card.image}
                name={card.name}
                rating={card.rating}
                goBack={card.goBack}
                directionsLink={card.directionsLink}
              />
            ))}
            <Footer />
          </>
        } />
        <Route path="/surf" element={
          <>
            <Surf />
            {cardDataSurf.map(card => (
              <Card
                key={card.id}
                image={card.image}
                name={card.name}
                rating={card.rating}
                goBack={card.goBack}
                directionsLink={card.directionsLink}
              />
            ))}
            <Footer />
          </>
        } />

        <Route path="/offRoading" element={
          <>
            <OffRoading />
            {cardDataOffRoading.map(card => (
              <Card
                key={card.id}
                image={card.image}
                name={card.name}
                rating={card.rating}
                goBack={card.goBack}
                directionsLink={card.directionsLink}
              />
            ))}
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;

