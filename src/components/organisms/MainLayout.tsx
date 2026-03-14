import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

export const MainLayout = () => {
    return (
        <>
            <div className="layout-root">
                <Navbar />
                <main className="main-content">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}