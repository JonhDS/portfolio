import React from "react";
import styles from "./Sobremim.module.css"
import { getImageUrl } from "../../utils"

export const SobreMim = () => {
    return (
        <section>
            <h2>Sobre Mim</h2>
            <div>
                <img
                    src={
                        getImageUrl("images/jonathan.png")
                    }
                />
                <ul><li></li></ul>
            </div>
        </section>
    )
}