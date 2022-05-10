import Footer from "./Footer";
import NavBar from "./Navbar";
import style from "../styles/MainContainer.module.css"

export default function MainContainer({ children }) {
    return (
        <>
            <NavBar />
            <div className={style.container}>{children}</div>
            <Footer />
        </>
    )
}