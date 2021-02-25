import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
   const { level } = useContext(ChallengesContext)

   return (
      <div className={styles.profileContainer}>
         <img src="https://github.com/dojak220.png" alt="Dorgival Rocha" />
         <div>
            <strong>Dorgival Rocha</strong>
            <p>
               {/* O next identifica que esse caminho em src está em public/ */}
               <img src="icons/level.svg" alt="Level" />
               Level {level}
            </p>
         </div>
      </div>
   );
}