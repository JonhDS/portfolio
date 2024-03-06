import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils"

export const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("images/menuClose.png")
                            : getImageUrl("images/menu.png")
                    }
                    alt="botão do menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={
                        `${styles.menuItems
                        } ${menuOpen && styles.menuOpen
                        }`
                    }
                    onClick={
                        () => setMenuOpen(false)
                    }
                >
                    <li><a href="#about">Sobre Mim</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contacts">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}
