import { CameraIcon, ComputerIcon, Disc3, icons, NewspaperIcon, ShoppingCart, User2Icon } from "lucide-react"
import { PiBowlSteamBold } from "react-icons/pi"

export const linksNavBar=[
    {
        title: "Home",
        path:"/"
    },
    {
        title: "Guides",
        path:"/guides"
    },
    {
        title: "Docs",
        path:"/docs"
    },
    {
        title: "Chave de API",
        path:"/generateApi"
    }
]



export const resourcesApi =[
    {
        title: "posts",
        path:"/",
        icon: <NewspaperIcon />
    },
    {
        title: "users",
        path:"/guides",
        icon: <User2Icon />
    },
    {
        title: "products",
        path:"/docs",
        icon: <ShoppingCart />
    },
    {
        title: "techs",
        path:"/docs",
        icon: <ComputerIcon/>
    },
    {
        title: "images",
        path:"/docs",
        icon: <CameraIcon />
    }
    ,
    {
        title: "tracks",
        path:"/docs",
        icon: <Disc3 />
    }
]



export const sponsors =[
    {
        sponsor: "Nest",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg"
    },
    {
        sponsor: "Netlify",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg"
    }
]


export const thousands =[
    {
        name: "Ebraim Sambo",
        job: "Developer Fullstack",
        argument: "O PUBLIC JSON torna facil o apredizado de consulta ou leitura de APIS REST",
        urlImage: "https://avatars.githubusercontent.com/u/107747841?v=4"
    },
    {
        name: "Afonso Nzongo",
        job: "Developer Backend",
        argument: "Apenas se torna facil de imaginar qualquer site ou template quando há dados disponiveis",
        urlImage: "https://avatars.githubusercontent.com/u/51960834?s=200&v=4",
    },
    {
        name: "Eduardo Almeida",
        job: "Developer Frontend",
        argument: "O Public JSON facilita na construção de um site quando não há dados disponiveis ",
        urlImage: "https://avatars.githubusercontent.com/u/4627922?v=4"
    },
    {
        name: "Jorge Swgger",
        job: "Developer Frontend",
        argument: "Imagina criar um site sem dados disponiveis para estilizar? seria complicado!",
        urlImage: "https://avatars.githubusercontent.com/u/57466994?v=4"
    },
    {
        name: "Bill Roger",
        job: "Developer Fullstack",
        argument: "Não existe frontend que não saiba consumir uma api, para criar a demo de um site",
        urlImage: "https://avatars.githubusercontent.com/u/81087997?v=4",
    },
    {
        name: "John Slow",
        job: "Developer Backend",
        argument: "Sites de streaming ou lojas online com images, audios e vídeos esses dados estão aqui!",
        urlImage: "https://avatars.githubusercontent.com/u/51469?v=4"
    }
]