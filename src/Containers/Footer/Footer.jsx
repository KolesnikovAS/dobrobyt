import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import icons from '../../Assets/images/icons';
import Button from '../../Components/Button/Button';

const { vkontakteIcon, whatsappIcon, telegramIcon, instagramIcon, callIcon, emailIcon, phoneIcon, locationIcon } =
    icons;

const socials = [
    { name: 'vkontakte', icon: vkontakteIcon, link: '#' },
    { name: 'whatsapp', icon: whatsappIcon, link: '#' },
    { name: 'telegram', icon: telegramIcon, link: '#' },
    { name: 'instagram', icon: instagramIcon, link: '#' },
];

const menu = [
    { name: 'О нас', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Отзывы', path: '/feedback' },
    { name: 'Наши работы', path: '/projects' },
    { name: 'Контакты', path: '/contacts' },
];

const services = [
    { name: 'Сантехника', path: '/services/santehnika' },
    { name: 'Электрика', path: '/services/electrika' },
    { name: 'Ремонт окон', path: '/services/remont-okon' },
    { name: 'Мастер на час', path: '/services/master-na-chas' },
    { name: 'Отделочные работы', path: '/services/otdelochnie-raboti' },
    { name: 'Клининг', path: '/services/cleaning' },
];

const contacts = [
    { icon: callIcon, link: 'tel: 6730000', content: '+7 (812) 673-00-00' },
    { icon: emailIcon, link: 'mail: 6730000', content: 'spb@dobrobyt.ru' },
    { icon: locationIcon, link: '#yandex_map', content: 'Санкт-Петербург, пер. Каховского, д. 10' },
];

const phones = [
    { phone: '+7 (812) 673-00-00', link: 'tel: +78126730000' },
    { phone: '+7 (991) 673-00-00', link: 'tel: +79916730000' },
];

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footer_feedback}>
            <span className={styles.feedback_title}>Напишите нам и задайте вопрос!</span>
            <Button size="medium" color="orange" title="ОБРАТНАЯ СВЯЗЬ" />
        </div>
        <div className={styles.footer_container}>
            <div className={styles.footer_item}>
                <p className={styles.footer_title}>Контакты</p>
                <ul className={styles.links_container}>
                    {contacts.map(({ icon, link, content }) => (
                        <li>
                            <a href={link}>
                                <img src={icon} className={styles.contacts_icon} alt="icon" />
                                <span className={styles.contacts_content}>{content}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className={styles.socials}>
                    {socials.map(({ name, icon, link }) => (
                        <li className={styles.socials_item}>
                            <a href={link}>
                                <img className={styles.socials_icon} src={icon} alt={name} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.footer_item}>
                <p className={styles.footer_title}>Услуги</p>
                <ul className={styles.links_container}>
                    {services.map(({ name, path }) => (
                        <li>
                            <NavLink className={styles.footer_link} to={path}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.footer_item}>
                <p className={styles.footer_title}>Меню</p>
                <ul className={styles.links_container}>
                    {menu.map(({ name, path }) => (
                        <li>
                            <NavLink className={styles.footer_link} to={path}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.footer_item}>
                <p className={styles.footer_title}>Связаться с нами</p>
                <ul className={styles.links_container}>
                    {phones.map(({ link, phone }) => (
                        <li>
                            <a href={link}>
                                <img src={phoneIcon} className={styles.contacts_icon} alt="icon" />
                                <span className={styles.contacts_phone}>{phone}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
