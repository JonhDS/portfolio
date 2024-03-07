import React from "react";
import styles from "./Sobremim.module.css"
import { getImageUrl } from "../../utils"

export const SobreMim = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Sobre Mim</h2>
            <div className={styles.content}>
                <img
                    src={
                        getImageUrl("images/jonathan.png")
                    } className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={
                                getImageUrl("images/cursor.png")
                            }
                            alt="Icone de Cursor"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvedor Front-End</h3>
                            <p>Eu sou desenvolvedor front-end com experiência em criação de sites responsivo e otimizada.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={
                                getImageUrl("images/cpu.png")
                            }
                            alt="Icone de Servidor"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvedor Back-End</h3>
                            <p>Eu tenho experiência em desenvolvimento rápido e otimização de API's.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={
                                getImageUrl("images/landingpage.png")
                            }
                            alt="Icone de Internet"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>Eu projetei algumas landing pages, varios sistemas.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}