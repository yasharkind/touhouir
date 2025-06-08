import AnimateEnter from "./AnimateEnter"

const CategoryBlock = (props) => {

    return <>
        <AnimateEnter >
            <a className={`category-container`} href={props.url} target={props.blank ? "_blank" : "_self"}>
                <div className={`category-content`}>
                    <div className={`category-title`} dir="rtl">
                        {props.title}
                    </div>
                </div>
                <img src={`${props.img}`} className={`category-img`} />
            </a>
        </AnimateEnter>
    </>
}
export default CategoryBlock