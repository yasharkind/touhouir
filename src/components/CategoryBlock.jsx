const CategoryBlock = (props) => {
    return <>
        <a className={`category-container`} href={props.url}>
            <div className={`category-content`}>
                <div className={`category-title`} dir="rtl">
                    {props.title}
                </div>
            </div>
            <img src={`/homepage/${props.img}`} className={`category-img`} />
        </a>
    </>
}
export default CategoryBlock