import { useEffect } from "react";
import styles from "../styles/components/ThemeButton.module.css";

let prefersDarkScheme = null;

export function ThemeButton() {

   useEffect(() => {
      prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
   }, [])

   function toggleTheme() {
      if (prefersDarkScheme.matches) {
         document.body.classList.toggle("light-theme");
      }
      else {
         document.body.classList.toggle("dark-theme");
      }
   }

   return (
      <div className={styles.container}>
         <button
            type="button"
            className={styles.btnToggle}
            onClick={toggleTheme}
         >
            <img className={styles.bulb} src="/icons/bulb-light.svg" alt="Dark mode" />
         </button>
      </div>
   );
}