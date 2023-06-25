import { FC } from "react";
import styles from './card.module.css';
import { JuraFont, MichromaFont } from "@/app/layout";

const Card: FC<{
    title: string;
    content: string | null | undefined;
    contentSize?: 'xs'|'md'|'lg';
    contentFont?: 'jura'|'michroma';
    gradientBg?: boolean;
    cardSize?: 'one'|'two'|'three'
}> = (props = {
    title: '',
    content: '',
    contentSize: 'lg',
    contentFont: 'michroma',
    gradientBg: false,
    cardSize: 'three'
}) : JSX.Element => {

    return (
        <>
            <div className={`${styles.card} ${props.gradientBg ? styles.cardBg : ''} ${props.cardSize === 'one' ? styles.cardFull : ''} ${props.cardSize === 'two' ? styles.cardTwo : ''}`}>
                <h3 className={`${styles.cardHeading} ${JuraFont.className}`}>{props.title}</h3>
                {props.content && props.contentSize === 'md' && <p className={`${styles.cardPara} ${styles.cardParaMd} ${props.contentFont === 'jura' ? JuraFont.className : MichromaFont.className}`}>{props.content}</p>}
                {props.content && props.contentSize === 'xs' && <p className={`${styles.cardPara} ${styles.cardParaXs} ${props.contentFont === 'jura' ? JuraFont.className : MichromaFont.className}`}>{props.content}</p>}
                {props.content && props.contentSize === 'lg' && <p className={`${styles.cardPara} ${props.contentFont === 'jura' ? JuraFont.className : MichromaFont.className}`}>{props.content}</p>}
                {props.content && !props.contentSize && <p className={`${styles.cardPara} ${props.contentFont === 'jura' ? JuraFont.className : MichromaFont.className}`}>{props.content}</p>}
            </div>
        </>
    )

}

export default Card;