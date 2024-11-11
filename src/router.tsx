import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layout/defaltLayout"
import { Home } from "./pages/home"
import { Promocoes } from "./components/promocoes"

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={ <DefaultLayout /> }>
                <Route path="/" element={ <Home /> }/>
                <Route path="/promocoes/:id" element={ <Promocoes /> }/>
            </Route>
        </Routes>
    )
}