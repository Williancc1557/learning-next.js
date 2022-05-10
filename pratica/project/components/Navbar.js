import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function NavBar() {
    return (
        <>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/">
                        <a>Home </a>
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        <a>Produtos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre nós</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contate-nos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/todos">
                        <a>Todos</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}