import TopBar from "../../components/TopBar"
import "../../App.css"
import Footer from "../../components/Footer"
import locale from "../../locale.json"

const Marisa = () => {
    return <><div className="scheme-marisa w-full">
        <TopBar />
        <div className="bg" >
            <div className="flex flex-row" >
                <img className="m-auto" src="/chars/marisa/marisa2.png" />
                <img className="m-auto" src="/chars/marisa/marisa1.png" />
            </div>
            <div className="text-9xl text-center dejavu">
                {locale.marisatext}
            </div>
        <Footer />

        </div>
    </div>
    </>
}

export default Marisa