import TopBar from "../../components/TopBar"
import "../../App.css"
import Footer from "../../components/Footer"
import locale from "../../locale.json"
import ImageSlider from "../../components/ImageSlider"

const images = ["/chars/marisa/slider1.jpg", "/chars/marisa/slider2.jpg", "/chars/marisa/slider3.jpg"]

const Marisa = () => {
    return <><div className="scheme-marisa w-full">
        <TopBar />
        <div className="bg" >
            <div className="flex flex-row" >
                <img className="m-auto" src="/chars/marisa/marisa2.png" />
                <img className="m-auto" src="/chars/marisa/marisa1.png" />
            </div>
            <div className="content content-characters" dir="rtl">
                <div className="text-2xl text-right w-full mt-4 mb-4" >
                    معرفی:
                </div>
                <div className="text-xl text-right w-full">
                    نام کامل: 霧雨魔理沙 Marisa Kirisame
                    <br />
                    نژاد: انسان
                    <br />
                    <br />
                    ماریسا یک جادوگر معمولی، یکی از دو شخصیت اصلی بازی های توهو هست که از بازی دوم وارد توهو شد.  ماریسا شخصیتی پرانرژی، خودجوش و گاهی هم لجباز داره، و به جمع‌آوری کتاب‌ها و آیتم‌های جادویی (حتی اگر صاحبشون نباشه!) علاقه‌منده. حضور پررنگش تو بیشتر بازی‌ها و رابطه‌ی بامزه‌اش با شخصیت‌هایی مثل ریمو، باعث شده یکی از محبوب‌ترین شخصیت‌های دنیا‌ی توهو باشه.
                </div>
                <div className="text-2xl text-right w-full mt-4 mb-4" >
                    آهنگ ها:
                </div>
                <div className="flex flex-col w-full dejavu justify-center items-center mt-4 mb-4" dir="ltr">
                    <div className="dejavu m-4 text-2xl">
                        Love Colored Master Spark!:
                    </div>
                    <audio controls className="w-full">
                        <source src="/chars/marisa/theme.mp3" type="audio/mpeg" />
                    </audio>
                </div>
                <div dir="ltr" className="rounded-xl">
                    <ImageSlider className="rounded-xl" images={images} />
                </div>
                <a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" className="self-center">
                    <button  className="m-4">
                        <div className="sm:text-sm md:text-xl text-sm ">
                        بیشتر (touhou wiki)
                        </div>
                    </button>
                </a>
            </div>
            <Footer />

        </div>
    </div>
    </>
}

export default Marisa