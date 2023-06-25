"use client"

import { JuraFont } from '@/app/layout';
import Form from '../../components/form/form';
import styles from './stack-land.module.css';
import Card from '../../components/card/card';
import { useEffect } from 'react';

export default function StackLandPage() {

    useEffect( () => { 
        if(document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.remove('no-bg'); 
        }
    });

    return (
        <>
            <div className={styles.wrapper}>
                <div className={`${styles.wrapperCol} ${styles.wrapperColEmpty}`}></div>
                <div className={`${styles.wrapperCol} ${styles.wrapperColForm}`}>
                    <Form>
                        <div className={styles.headingRow}>
                            <h3 className={styles.heading}>your property details below for ECO token yield estimate</h3>
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='property_size' placeholder='Property Size'/>
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='location' placeholder='Location'/>
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='ecosystem' placeholder='ECOsystem'/>
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='pes_potential' placeholder='Pes Potential'/>
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='staking_period' placeholder='Staking Period'/>
                        </div>
                        <div className={styles.equalRow}>
                            <span className={styles.equal}></span>
                            <span className={styles.equal}></span>
                        </div>
                        <div className={styles.cardRow}>
                            <Card title='ECO Tokens Earned' content='--- --- --- ECO' cardSize='one' gradientBg={true}/>
                        </div>
                    </Form>
                </div>
                <div className={`${styles.wrapperCol} ${styles.wrapperColBtn}`}>
                    <button className={styles.btnFilled}>Land Owner Application</button>
                </div>
            </div>
        </>
    );
}