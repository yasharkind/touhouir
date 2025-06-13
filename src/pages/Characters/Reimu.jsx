import BaseCharacterPage from "./BaseCharacterPage"
import items from "../../items.json"

const Reimu = () => {
    return <BaseCharacterPage items={items.charitems[1].items[0]} />
}

export default Reimu