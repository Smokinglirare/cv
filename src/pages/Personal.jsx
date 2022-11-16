import React from 'react'
import styles from "./Personal.module.css"
import {AiFillPhone} from "react-icons/ai"
import {ImEarth} from "react-icons/im"
import {GiPositionMarker} from "react-icons/gi"
import Navbar from '../components/Navbar'

function Personal() {
  return (
    <div className={styles.container}>
    <div className={styles.contactInfo}>
        <span className={styles.icons}><AiFillPhone /> <span className={styles.number}>+46 709 509 387</span></span>
        <div className={styles.border}></div>
        <span className={styles.icons}><ImEarth/> <span className={styles.number2}>Sebastian.thorneus@gmail.com</span><a href="http://stportfolio.netlify.app" className={styles.number2}>Stportfolio.netlify.app</a></span>
        <div className={styles.border}></div>
        <span className={styles.icons}><GiPositionMarker /> <span className={styles.number}>Spannvägen 11 16835 Bromma</span></span>
        <div className={styles.border}></div>
    </div>
    <div className={styles.experience}><h1 className={styles.experienceText}>Biografi</h1></div>
    <div className={styles.border}></div>  
    <div className={styles.experienceBox}>
        <p className={styles.bread}>
        Mitt namn är Sebastian Torneus och jag går just nu utbildningen Frontend /App Developer hos Changemaker Educations. Jag är 32 år gammal och har under större delen av mitt arbetsliv kört lastbil för Home2you i Stockholm. Senaste åren har jag bott en del i Jukkasjärvi där jag renoverat hus som gått i arv och startat upp en uthyrningsverksamhet där jag bland annat hyr ut hus till ishotellet i Jukkasjärvi. Periodvis när jag bott i Jukkasjärvi har jag även arbetat för Postnord i Kiruna, på deras avdelning för pakethantering som är separerad från brevbärar-avdelningen. I yngre ålder har jag jobbat med diverse ströjobb som publikvärd för Hammarby Fotboll och Solvalla med mera.  
<br></br>
<br></br>
Under min utbildning hos Changemaker har jag fått lära mig Javascript, CSS och HTML, men vi har även lagt väldigt mycket tid på React. Besök gärna mitt portfolio länkat högst upp på sidan för att se lite av mina sidoprojekt, majoriteten byggda i React. Via portfolion kan ni även nå min Github där jag har lite andra publika repos som olika skolprojekt, mailserver och annat jag byggt senaste åren. Vi har gått en kurs inom versionshantering och det har blivit så att jag använder Git nästan varje dag så jag känner mig ganska väl bevandrad inom det.
<br></br>
<br></br>
Inom React har jag erfarenhet av att använda React-router-dom för routing inom mina projekt, Framer-motion har jag använt en del för animationer, Axios brukar jag vanligtvis använda när jag jobbar med API sen diverse andra paket som React-icons, Moment, Uuid med mera. Jag har utforskat en del komponent-bibliotek som React-bootstrap som jag byggde mitt portfolio med, men även andra som ChakraUI och MUI, men föredrar att bygga min design med egen CSS då man har lite mer frihet. Inom CSS har jag utforskat vanlig CSS, CSS-in-JS Styled-components, men främst använder jag CSS moduler som jag tycker fungerar bäst.

</p>

        </div>     
        <div className={styles.border}></div>
    
    <div className={styles.navbar}>        <Navbar /></div>
</div>
  )
}

export default Personal