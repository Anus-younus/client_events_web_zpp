import { StaticImageData } from "next/image"

type CardType = {
    id: string,
    image: StaticImageData,
    heading: string,
    para1: string,
    para2: string
}

export default CardType