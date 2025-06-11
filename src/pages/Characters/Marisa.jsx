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
            <div className="content content-characters color-1" dir="rtl">
                <div className="text-2xl text-right w-full mt-4 mb-4" >
                    معرفی:
                </div>
                <div className="flex flex-row">
                    <div className="text-xl text-right w-full bg-touhou">
                        نام کامل: 霧雨魔理沙 Marisa Kirisame
                        <br />
                        نژاد: انسان
                        <br />
                        <br />
                        ماریسا یک جادوگر معمولی، یکی از دو شخصیت اصلی بازی های توهو هست که از بازی دوم وارد توهو شد.  ماریسا شخصیتی پرانرژی، خودجوش و گاهی هم لجباز داره، و به جمع‌آوری کتاب‌ها و آیتم‌های جادویی (حتی اگر صاحبشون نباشه!) علاقه‌منده. حضور پررنگش تو بیشتر بازی‌ها و رابطه‌ی بامزه‌اش با شخصیت‌هایی مثل ریمو، باعث شده یکی از محبوب‌ترین شخصیت‌های دنیا‌ی توهو باشه.
                    </div>
                    <div className="left-img w-1/2 h-96 bg-[url(/chars/marisa/left.jpg)] h-96 object-cover bg-position-[25%] mask-r-from-30% mask-r-to-90% rounded-[12px] ">
                    </div>
                </div>
                <div className="text-2xl text-right w-full mt-4 mb-4" >
                    آهنگ ها:
                </div>
                <div className="flex flex-col w-full dejavu justify-center items-center mt-4 mb-4" dir="ltr">
                    <div className="dejavu m-4 text-2xl">
                        Love Colored Master Spark!:
                    </div>
                    <audio controls className="w-full">
                        <source src="/chars/marisa/theme.ogg" type="audio/ogg" />
                    </audio>
                </div>
                {/* <iframe className="mb-[32px] mt-[16px]" width="560" height="315" src="https://www.youtube.com/embed/TFHPmeuPS8Y?si=jn2sf98aiuwbzubW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                <div dir="ltr" className="rounded-xl">
                    <ImageSlider className="rounded-xl" images={images} />
                </div>
                <a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" className="self-center">
                    <button className="m-4">
                        <div className="sm:text-sm md:text-xl text-sm ">
                            بیشتر (touhou wiki)
                        </div>
                    </button>
                </a>
            </div>
            <Footer />

        </div>
    </div >
    </>
}

export default Marisa