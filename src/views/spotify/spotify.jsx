import HeaderSpotify from "../../components/spotify/HeaderSpotify"
import BodySpotify from "../../components/spotify/BodySpotify"
import FooterSpotify from "../../components/spotify/FooterSpotify"

export default function Spotify(){
    return(
        <div className="container-Spotify">
            <HeaderSpotify/>
            <BodySpotify/>
            <FooterSpotify/>
        </div>
    )
}