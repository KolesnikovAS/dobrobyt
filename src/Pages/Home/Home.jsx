/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Home.module.scss';
import Button from '../../Components/Button/Button';
import images from '../../Assets/images/home';
import icons from '../../Assets/images/icons';
// import Icon from '../../Components/Icon/Icon';
import Guarantees from '../../Containers/Guarantees/Guarantees';
import Feedback from '../../Components/Feedback/Feedback';

const { elektrika, santehnika, cleaning, remontOkon, otdelochnieRaboti, masterNaChas } = images;
const { dropIcon, faucetIcon, lightIcon, rollerIcon, windowIcon, workerIcon, economyIcon, toolsIcon, certificateIcon } =
    icons;

const feedbacks = [
    {
        rank: 5,
        name: 'Сергей Петрович',
        category: 'Ремонт окон',
        comment: 'Благодарю Вас за устранения продувания двери! Теперь спится в студии тихо, а главное тепло!',
    },
    {
        rank: 5,
        name: 'Анна Либо',
        category: 'Клининговые услуги',
        comment:
            'Благодарю Вас за поддержание мягкой мебели в моей квартире на регулярной основе! Очень рада что Вы справляетесь с последствиями моих тройняшек!',
    },
    {
        rank: 5,
        name: 'Любовь Цветкова',
        category: 'Ремонт окон',
        comment:
            'Отличный сервис! Спасибо за оперативный приезд мастера и решение проблемы! Добробыт - точно добрый быт)',
    },
    {
        rank: 5,
        name: 'Елена Проворова',
        category: 'Клининговые услуги',
        comment: 'Шикарное преображение дивана! Спасибо! Надеюсь что соседи снова не разведут живность…',
    },
    {
        rank: 5,
        name: 'Тамара Федоровна Золотарева',
        category: 'Ремонт окон',
        comment:
            'Хочу выразить благодарность всей команде Добробыт за комплексное обслуживание квартиры после ремонта, особенно за идеально отмытые пятна на окнах',
    },
    {
        rank: 5,
        name: 'Клининговые услуги',
        category: 'Елена Степановна Гаврилюк',
        comment:
            'Здравствуйте Владислав! Не нарадуюсь на наш ковролин в офисе! Очень круто Вы его привели в форму, как новенький стал! Скоро Мы пригласим Вас к нам домой уже, диваны пора отдать в Ваши руки!',
    },
];

const services = [
    { name: 'Клининг', path: '/services/cleaning', image: cleaning, icon: dropIcon },
    { name: 'Ремонт окон', path: '/services/remont-okon', image: remontOkon, icon: windowIcon },
    { name: 'Мастер на час', path: '/services/master-na-chas', image: masterNaChas, icon: workerIcon },
    { name: 'Электрика', path: '/services/electrika', image: elektrika, icon: lightIcon },
    { name: 'Сантехника', path: '/services/santehnika', image: santehnika, icon: faucetIcon },
    { name: 'Отделочные работы', path: '/services/otdelochnie-raboti', image: otdelochnieRaboti, icon: rollerIcon },
];

const advantages = [
    { icon: economyIcon, title: 'Сэкономьте время и деньги' },
    { icon: toolsIcon, title: 'Не нужны свои инструменты' },
    { icon: certificateIcon, title: 'Сертифицированные эксперты' },
];

const Home = () => {
    const [setNavigation, changeNavigation] = useState(true);
    const { width } = useWindowSize();
    useEffect(() => {
        if (width < 600) {
            changeNavigation(false);
        } else changeNavigation(true);
    }, [width]);

    return (
        <main>
            <section className={styles.presents}>
                <div className={styles.presents_discription}>
                    <h1>
                        Лучшие сроки, цены и <span>качество</span>
                    </h1>
                    <p>Есть проблемы? Звоните нам!</p>
                    <a href="tel:+78126730000">+7 (812) 673-00-00</a>
                    <Button color="black" />
                </div>
            </section>
            <section className={styles.services}>
                {services.map(({ name, path, image, icon }, index) => (
                    <NavLink key={`${name}${path}`} to={path}>
                        <div className={styles.services_item}>
                            <img src={image} className={styles.services_image} alt={name} />
                            <div className={`${styles.services_discription} ${index % 2 === 0 && styles.even}`}>
                                <div className={styles.services_icon_container}>
                                    <img src={icon} className={styles.services_icon} alt="icon" />
                                </div>
                                <p className={styles.services_title}>{name}</p>
                                <p className={styles.services_button}>Подробнее</p>
                                {/* <Icon src={icon} color={index % 2 !== 0 ? 'black' : 'orange'} /> */}
                            </div>
                        </div>
                    </NavLink>
                ))}
            </section>
            <section className={styles.banner}>
                {advantages.map(({ icon, title }) => (
                    <div key={`${title}`} className={styles.banner_item}>
                        <img src={icon} className={styles.banner_icon} alt="icon" />
                        <p className={styles.banner_title}>{title}</p>
                    </div>
                ))}
            </section>
            <Guarantees />
            <section className={styles.feedback}>
                <h2 className={styles.feedback_title}>
                    Отзывы <span>пользователей</span>
                </h2>
                <Swiper
                    className="feedback_slider"
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation={setNavigation}
                >
                    {feedbacks.map(({ rank, category, name, comment }) => (
                        <SwiperSlide key={`${comment}${name}${rank}`}>
                            <Feedback rank={rank} name={name} comment={comment} category={category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </main>
    );
};

export default Home;
