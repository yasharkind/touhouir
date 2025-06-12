import "../../App.css"
import BaseCharacterPage from "./BaseCharacterPage"
import items from "../../items.json"


const Marisa = () => {
    return <BaseCharacterPage items={items.charitems[1].items[1]} />
}

export default Marisa