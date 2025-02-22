import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import { Button } from "../components/Button"
import logo from "../assets/react.svg"

export function PageHeader () {
    return  (
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
            <div className="flex gap-4 items-center flex-shrink-0">
                <Button variant="ghost" size="icon" className="">
                    <Menu />
                </Button>
                <a href="/">
                <img src={logo} className="h-6" />
                </a>
            </div>
            <form className="flex gap-4 flex-grow justify-center">
                <div className="flex flex-grow max-w-[600px]"> 
                    <input type="search" placeholder="Search" className="rounded-1-full border-secondary-border shawdow-inner shadow-secondary py-1 px=4 text-lg w-full
                     focus" />
                    <Button>
                        <Search />
                    </Button>
                </div>
                <Button type="button" size="icon" className="flex-shrink-0">
                    <Mic />
                </Button>
            </form>
            <div className="flex flex-shrink-0 md:gap-2">
                <Button size="icon" variant="ghost">
                    <Upload />
                </Button>
                <Button size="icon" variant="ghost">
                    <Bell />
                </Button>
                <Button size="icon" variant="ghost">
                    <User />
                </Button>
            </div>
        </div>
    )
}