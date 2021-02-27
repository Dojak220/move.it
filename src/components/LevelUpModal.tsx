import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
   const { level, closeLevelUpModal } = useContext(ChallengesContext);
   return (
      <div className={styles.overlay}>
         <div className={styles.container}>
            <header>{level}</header>

            <strong>Parabéns</strong>
            <p className={styles.congratsText}>Você alcançou um novo level.</p>

            <button type="button">
               <img onClick={closeLevelUpModal} className={styles.close} src="/icons/close.svg" alt="Fechar janela" />
            </button>
         </div>
      </div>
   );
}