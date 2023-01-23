// component
import { Navbar } from "../components/Navbar"
// css
import styles from '../style/layout/header.module.scss'
export const Header = () => {
    return (
        <div className={styles.headerMainBox}>
            <div className={styles.headerContentBox}>
                <div>Logo</div>
                <div>Search</div>
                <div>User</div>
            </div>
            <Navbar></Navbar>
        </div>
    )
}
