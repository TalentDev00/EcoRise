"use client"

import { JuraFont } from "@/app/layout";
import Card from "../../components/card/card";
import styles from './dao-vault.module.css';
import { useEffect } from "react";
import Image from "next/image";

export default function DAOVaultPage() {

    useEffect( () => { 
        if(document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.add('no-bg'); 
        }
    });

    const colorTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light';


    return (
        <>
            <div className={styles.cardRow}>
                <Card
                    title="Total Land Staked"
                    content="--- HECTARES"
                    contentSize="md"
                    contentFont="jura"
                    gradientBg={true}
                />
            </div>
            <div className={styles.cardRow}>
                <Card
                    title="Treasure Balance"
                    content="$ --- --- ---"
                />
                <Card
                    title="ECO Price"
                    content="$ --- --- ---"
                />
            </div>
            <div className={styles.btnRow}>
                <button className={styles.btnFilled}>Land Owner Application</button>
            </div>
            <div className={styles.wrapperRow}>
                <div className={`${styles.wrapperCol} ${styles.tableWrapper}`}>
                    <div className={styles.table}>
                        <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                            <div className={styles.tableCol}>
                                <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Property</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Country</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Type</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Date</h3>
                            </div>
                            <div className={styles.tableCol}></div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCol}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3>
                            </div>
                            <div className={styles.tableCol}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3>
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCol}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3>
                            </div>
                            <div className={styles.tableCol}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3>
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCol}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3>
                            </div>
                            <div className={styles.tableCol}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3>
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCol}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3>
                            </div>
                            <div className={styles.tableCol}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3>
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCol}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3>
                            </div>
                            <div className={`${styles.tableCol} ${styles.tableColSM}`}>
                                <h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3>
                            </div>
                            <div className={styles.tableCol}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.wrapperCol} ${styles.mapCol}`}>
                    { colorTheme === 'dark' && <Image src="/globe-dark.svg" alt="EcoRise" width={700} height={700} /> }
                    { colorTheme === 'light' && <Image src="/globe-light.svg" alt="EcoRise" width={700} height={700} /> }
                </div>
            </div>
        </>
    );
}