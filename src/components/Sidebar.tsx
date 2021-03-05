import styles from '../styles/components/Sidebar.module.css'
import { ThemeButton } from './ThemeButton'

export function Sidebar() {
   return (
      <div className={styles.container}>
         <aside className={styles.sidebar}>
            <img className={styles.sidebarIcon} src="/icons/eye.svg" alt="Pomodoro" />
            <img className={styles.sidebarIcon} src="/icons/eye.svg" alt="Leaderboard" />
         </aside>

         <div className={styles.themeButton}>
            <ThemeButton />
         </div>
      </div>
   );
}