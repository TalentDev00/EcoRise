import Link from "next/link";
import styles from "./navMenu.module.css";

export default function NavMenu() {

    return (
        <>
            <nav className={styles.navmenu}>
                <ul className={styles.navmenuList}>
                    <li className={styles.navmenuListItem}>
                        <Link className={styles.navmenuLinkItem} href='/dashboard'>Dashboard</Link>
                    </li>
                    <li className={styles.navmenuListItem}>
                        <Link className={styles.navmenuLinkItem} href='/stack-eco'>Stack ECO</Link>
                    </li>
                    <li className={styles.navmenuListItem}>
                        <Link className={styles.navmenuLinkItem} href='/stack-land'>Stack Land</Link>
                    </li>
                    <li className={styles.navmenuListItem}>
                        <Link className={styles.navmenuLinkItem} href='/mint'>Mint</Link>
                        <ul className={styles.navmenuDropdown}>
                            <li className={styles.navmenuDropdownItem}>
                                <p className={styles.navmenuDropdownHeading}>Mint Discouts</p>
                                <p className={styles.navmenuDropdownCol}>
                                    <span>Sol-Rise</span>
                                    <span>2.5%</span>
                                </p>
                                <p className={styles.navmenuDropdownCol}>
                                    <span>Sol-Mim</span>
                                    <span>3%</span>
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.navmenuListItem}>
                        <Link className={styles.navmenuLinkItem} href='/bridge'>Bridge</Link>
                    </li>
                    <li className={styles.navmenuListItem}>
                        <Link className={styles.navmenuLinkItem} href='/dao-vault'>DAO Vault</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}