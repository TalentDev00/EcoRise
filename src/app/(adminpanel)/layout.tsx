"use client";
import useDarkMode from "@/hooks/useDarkMode";
import Logo from "./components/logo/logo"
import NavMenu from "./components/nav-menu/navMenu"
import { useEffect } from "react";
import SideBar from "./components/sidebar/sidebar";


export default function AdminPanelLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const [colorTheme, setTheme] = useDarkMode();


    useEffect(() => {
      setTheme("dark");
    }, []);

    return (
        <div className="adminPanel">
           <SideBar>
              <Logo />
              <NavMenu />
            </SideBar> 
            <section className="mainContent">
              {children}
            </section>
        </div>
    )
  }