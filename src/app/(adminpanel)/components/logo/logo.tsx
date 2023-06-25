import Image from "next/image";
import styles from './logo.module.css';
import useDarkMode from "@/hooks/useDarkMode";

export default function Logo() {
    // const [colorTheme, setTheme] = useDarkMode();
    const colorTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light';

    return (
        <div className={styles.logo}>
            
            {
                colorTheme === 'dark' && <Image src="/logo-dark.svg" alt="EcoRise" width={210} height={70} />
            }
            {
                colorTheme === 'light' && <Image src="/logo-light.svg" alt="EcoRise" width={210} height={70} />
            }
        </div>
    )
}