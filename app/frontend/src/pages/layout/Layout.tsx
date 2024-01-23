// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Outlet, NavLink, Link } from "react-router-dom";

// import openai from "../../assets/openai.svg";
import logo from "../../assets/avanade_logo_white.png";
import { WarningBanner } from "../../components/WarningBanner/WarningBanner";
import styles from "./Layout.module.css";
import { Title } from "../../components/Title/Title";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <WarningBanner />
                <div className={styles.headerContainer}>
                    <a href="/">
                        <div className={styles.headerTitleContainer}>
                        <img src={logo} alt="Avanade Logo" className={styles.headerLogo} />
                        <h3 className={styles.headerTitle}><Title /></h3>
                        </div>
                    </a>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/content" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Manage Content
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={styles.raibanner}>
                <span className={styles.raiwarning}>AI-generated content may be incorrect. Make sure you review generated content and apply your knowledge and judgement to validate that it's accurate and fit for purpose.</span>
            </div>

            <Outlet />

            <footer>
                <WarningBanner />
            </footer>
        </div>
    );
};

export default Layout;
