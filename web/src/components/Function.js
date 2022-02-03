
import { useState } from "react"

export const ScreenSize = () => {
    const [size, setSize] = useState(window.innerWidth)
    const resize = () => {
        setSize(window.innerWidth);
    }
    window.addEventListener("resize", resize)
    return size;

}