import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá, eu sou o Jonathan</h1>
                <p className={styles.description}>Sou desenvolvedor front-end com 1 ano de experiência usando React.JS. Entre em contato se quiser saber mais!</p>
                <a href="mailto:jonathan.cs@hotmail.com" className={styles.contactBtn}>Fale comigo</a>
            </div>
            <img src={getImageUrl("images/jonathan.png")} alt="Foto de perfil" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
};