import { Outlet } from "react-router-dom"
import { HeaderDesktop } from "../components/headerDesktop"
import { HeaderMobile } from "../components/headerMobile"
import { Footer } from "../components/footer"

export const DefaultLayout = () => {
    return(
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            <Outlet />
            <Footer />
        </div>
    )
}