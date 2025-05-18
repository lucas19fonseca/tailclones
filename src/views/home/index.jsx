import Spotify from "../../assets/Spotify-logo.png"
import Facebook from "../../assets/images.png"
import Amazon from "../../assets/amazon_logo.png"

export default function Home() {
    return (
        <body>
            <div className="home-container h-screen bg-black">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full text-white overflow-hidden">
                    {/* Spotify */}
                    <div className="bg-main-green flex justify-center items-center transition-transform hover:scale-125  hover:brightness-110  duration-500">
                        <a href="/spotify" className="flex justify-center items-center">
                            <img src={Spotify} alt="Logo Spotify" className="h-20 drop-shadow-lg" />
                        </a>
                    </div>

                    {/* Facebook */}
                    <div className="bg-blue-900 flex justify-center items-center transition-transform hover:scale-125 hover:brightness-110 duration-500">
                        <a href="/facebook" className="flex justify-center items-center">
                            <img src={Facebook} alt="Logo Facebook" className="h-20 drop-shadow-lg" />
                        </a>
                    </div>

                    {/* Amazon */}
                    <div className="bg-[#232F3E] flex justify-center items-center transition-transform hover:scale-125 hover:brightness-110  duration-500">
                        <a href="/amazon" className="flex justify-center items-center">
                            <img src={Amazon} alt="Logo Amazon" className="h-20 drop-shadow-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </body>
    )
}
