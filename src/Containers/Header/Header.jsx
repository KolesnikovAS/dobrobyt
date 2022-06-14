import React, { useEffect } from 'react';
import { useWindowSize, useLockBodyScroll, useToggle } from 'react-use';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import styles from './Header.module.scss';
import images from '../../Assets/images/home';
import icons from '../../Assets/images/icons';

const { logo } = images;
const { phoneIcon } = icons;

const links = [
    { name: 'О нас', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Отзывы', path: '/feedback' },
    { name: 'Наши работы', path: '/projects' },
    { name: 'Контакты', path: '/contacts' },
];
const phones = [
    { phone: '673-00-00', link: 'tel: 6730000' },
    { phone: '+7 (991) 673-00-00', link: 'tel: +79916730000' },
];
const services = [
    { name: 'Сантехника', path: '/services/santehnika' },
    { name: 'Электрика', path: '/services/electrika' },
    { name: 'Ремонт окон', path: '/services/remont-okon' },
    { name: 'Мастер на час', path: '/services/master-na-chas' },
    { name: 'Отделочные работы', path: '/services/otdelochnie-raboti' },
    { name: 'Клининг', path: '/services/cleaning' },
];

const Header = () => {
    const { width } = useWindowSize();
    const { pathname } = useLocation();
    const splitLocation = pathname.split('/');
    const [locked, toggleLocked] = useToggle(false);
    const [checked, toggleChecked] = useToggle(false);
    useLockBodyScroll(locked);

    useEffect(() => {
        if (width > 1280 && locked) toggleLocked();
    }, [width]);

    useEffect(() => {
        toggleLocked(false);
        toggleChecked(false);
    }, [pathname]);

    return (
        <header>
            {locked && <div className={styles.dark_layer} />}
            <img className={styles.logo} src={logo} alt="logo" />
            <nav className={styles.nav}>
                <input
                    onChange={() => toggleLocked()}
                    className={styles.menu_toggle}
                    checked={locked}
                    id="menu_toggle"
                    type="checkbox"
                />
                <label className={styles.menu_button} htmlFor="menu_toggle">
                    <span />
                </label>
                <ul className={styles.links_container}>
                    {links.map(({ path, name }) => (
                        <li
                            key={`${name}${path}`}
                            className={`${styles.link} ${splitLocation[1] === path.slice(1) && styles.active}`}
                        >
                            {name === 'Услуги' && width < 1280 ? (
                                <div className={styles.accordion_container}>
                                    <input
                                        className={styles.accordion_toggle}
                                        checked={checked}
                                        onChange={() => toggleChecked()}
                                        type="checkbox"
                                        id="services_accordion"
                                    />
                                    <label
                                        className={`${styles.accordion_button} ${
                                            splitLocation[1] === path.slice(1) && styles.active
                                        }`}
                                        htmlFor="services_accordion"
                                    >
                                        {name}
                                    </label>
                                    <ul className={styles.accordion_body}>
                                        {services.map((item) => (
                                            <li key={`${item.name}${item.path}`} className={styles.accordion_item}>
                                                <NavLink
                                                    className={({ isActive }) => `${isActive && styles.active}`}
                                                    to={item.path}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <NavLink className={({ isActive }) => `${isActive && styles.active}`} to={path}>
                                    {name}
                                </NavLink>
                            )}
                        </li>
                    ))}
                    {phones.map(({ phone, link }) => (
                        <li key={`${phone}${link}`} className={styles.menu_phones_container}>
                            <a href={link} className={styles.menu_phone_item}>
                                <img src={phoneIcon} className={styles.menu_phone_icon} alt="phoneIcon" />
                                <p className={styles.menu_call}>
                                    Звоните: <span className={styles.menu_phone}>{phone}</span>
                                </p>
                            </a>
                        </li>
                    ))}
                    <Button size="medium" />
                </ul>
            </nav>
            <div className={styles.phones_container}>
                {phones.map(({ phone, link }) => (
                    <a key={`${phone}${link}`} href={link} className={styles.phone_item}>
                        <img src={phoneIcon} className={styles.phone_icon} alt="phoneIcon" />
                        <p className={styles.call}>
                            Звоните: <span className={styles.phone}>{phone}</span>
                        </p>
                    </a>
                ))}
            </div>
            <Button size="medium" />
        </header>
    );
};

export default Header;
