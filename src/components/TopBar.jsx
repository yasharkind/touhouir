import { useNavigate } from "react-router"
import { createTheme, MegaMenu, MegaMenuDropdown } from "flowbite-react"

const customTheme = createTheme({
  "root": {
    "base": "content-center bg-transparent w-full px-2 py-2.5 sm:px-4 dark:border-none dark:bg-transparent",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
    "inner": {
      "base": "mx-auto w-full flex flex-row-reverse flex-wrap items-center justify-start content-center",
      "fluid": {
        "on": "",
        "off": "container"
      }
    }
  },
  "collapse": {
    "base": "w-full md:block md:w-auto",
    "list": "bg-transparent mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "dropdown": {
    "base": "bg-transparent",
    "toggle": {
      "arrowIcon": "ml-2 h-4 w-4",
      "content": "bg-transparent py-1 focus:outline-none",
      "floating": {
        "animation": "transition-opacity",
        "arrow": {
          "base": "absolute z-10 h-2 w-2 rotate-45",
          "style": {
            "dark": "bg-transparent dark:bg-transparent",
            "light": "bg-white",
            "auto": "bg-white dark:bg-transparent"
          },
          "placement": "-4px"
        },
        "base": "z-10 bg-transparent w-fit divide-y divide-gray-100 rounded shadow focus:outline-none mt-2 block",
        "content": "bg-transparent py-1 text-sm text-gray-500 dark:text-gray-400",
        "divider": "my-1 h-px bg-transparent dark:bg-transparent",
        "header": "block px-4 py-2 text-sm text-transparent dark:text-gray-200",
        "hidden": "invisible opacity-0",
        "item": {
          "container": "bg-transparent",
          "base": "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-transparent hover:bg-transparent focus:bg-transparent focus:outline-none dark:text-gray-200 dark:hover:bg-transparent dark:hover:text-white dark:focus:bg-transparent dark:focus:text-white",
          "icon": "mr-2 h-4 w-4"
        },
        "style": {
          "dark": "bg-transparent text-white dark:bg-transparent",
          "light": "border border-transparent bg-white text-gray-900",
          "auto": "border border-transparent bg-white dark:border-none dark:bg-transparent text-gray-500 dark:text-gray-400"
        },
        "target": "w-fit"
      },
      "inlineWrapper": "flex w-full items-center justify-between"
    }
  },
  "dropdownToggle": {
    "base": "py-2 pl-3 pr-4 md:p-0 border-b border-transparent text-transparent hover:bg-transparent md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white flex w-full items-center justify-between"
  }
});

const items = [{"name": "Games", "url": "/games"}, {"name": "palceholder", "url": "/music"}]

const TopBarButton = (props) => {

    const navigate = useNavigate();
    if (props.items)
      return (<div className="top-bar-button">
                        <MegaMenuDropdown className="bg-transparent megamenu-button" toggle={<div style={{alignSelf:"center", justifySelf:"center"}}>{props.name}</div>}>
                                    <div className="megamenu-container">
                                      {props.items.map(item => (
                                        <div key={item.name} className="megamenu-item"><a className="megamenu-link" href={item.url}>{item.name}</a></div>
                                      ))}
                                    </div>                                       
                        </MegaMenuDropdown>

                </div>)

      return <div className="top-bar-button">{props.name}</div>
}

const TopBar = () => {

    const navigate = useNavigate();
    return <>
      <div className="top-bar-container">
            <div className="top-bar-right">

                <MegaMenu theme={customTheme}>
                <TopBarButton icon="icon.png" alt="Home" url="/home" name="Home"/>
                <TopBarButton icon="games.png" alt="Games" url="/games" name="Games" items={items}/>
                </MegaMenu>
            </div>
            <div className="top-bar-left">
                <div className="logo-title" onClick={() => {navigate("/home")}}>touhou.ir</div>
            </div>
        </div>
        
    </>
}

export default TopBar