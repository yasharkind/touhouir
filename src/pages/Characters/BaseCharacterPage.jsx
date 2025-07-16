import { Children } from 'react'
import Footer from '../../components/Footer'
import ImageSlider from '../../components/ImageSlider'
import TopBar from '../../components/TopBar'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import CategoryBlock from '../../components/CategoryBlock'
const BaseCharacterPage = (props) => {
    console.log(props.items.topimages)
    return (<><div className={`scheme-${props.items.name.toLowerCase()} w-full`}>
        <TopBar />
        <div className="bg" >
            <div className="flex flex-row" >
                {props.items.topimages.map(image => {
                    return <img className="m-auto" key={image} src={image} />
                })

                }
            </div>
            <div className="content content-characters color-1" dir="rtl">
                <div className="text-2xl text-right w-full mt-4 mb-4" >
                    معرفی:
                </div>
                <div className="w-full flex flex-row justify-between">
                    <div className="text-xl text-right w-full bg-touhou">
                        نام کامل: {props.items.fullname}
                        <br />
                        نژاد: {props.items.race}
                        <br />
                        <br />
                        {props.items.description}
                    </div>
                    <div style={{background: `url('/chars/${props.items.name.toLowerCase()}/left.jpg')`, backgroundPosition: props.items.leftimgoffset || '25%'}} className={`left-img w-1/2 h-96 h-96 object-cover mask-r-from-30% mask-r-to-90% rounded-[12px]`}>
                    </div>
                </div>
                <div className="text-2xl text-right w-full mt-4 mb-4">
                    آهنگ ها:
                </div>
                <div className="flex flex-col w-full dejavu justify-center items-center mt-4 mb-4" dir="ltr">
                    {props.items.songs.map(song => {return (
                        <>
                        <div key={song.name} className="dejavu m-4 text-2xl">
                            {song.name}
                    </div>
                    <audio key={`${song.name}1`} controls className="w-full">
                        <source key={song.url} src={song.url} type="audio/ogg" />
                    </audio>
                    </>)
                    })}
                </div>
                <div className="text-2xl text-right w-full mt-4 mb-4">فن کاورها:</div>
                <div className="w-full flex flex-row flex-auto flex-wrap items-center justify-center pt-6 pb-6 ">
                    {props.items.fansongs?.map(song => {
                        return <YoutubeEmbed key={song} id={song} />
                    })}
                </div>
                <div className="text-2xl text-right w-full mt-4 mb-4">فن گیم ها</div>
                 <div className='w-full flex flex-row flex-auto flex-warp items-center justify-center pt-6 pb-6'>
                {props.items.fangames?.map(game => {
                    return <CategoryBlock url={game.url} blank={true} title={game.name} img={game.prt}/>
                    
                })
                }
                </div>
                {props.children}
                <div dir="ltr" className="rounded-xl">
                    <ImageSlider className="rounded-xl" images={props.items.sliderimages} />
                </div>
                <a href={props.items.wikiurl} target="_blank" className="self-center">
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
    </>)
}

export default BaseCharacterPage