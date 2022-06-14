import React from 'react';
import styles from './Guarantees.module.scss';
import images from '../../Assets/images/home';
import icons from '../../Assets/images/icons';

const { guaranteesImage } = images;
const { warrantyIcon, moneyIcon, watchIcon } = icons;

const items = [
    {
        discription:
            'Получение квалифицированной и качественной помощи любого типа (в нашем штате только опытные мастера, а каждая услуга специалистов сопровождается гарантией)',
        icon: warrantyIcon,
    },
    {
        discription:
            'Экономию бюджета (мы придерживаемся выгодного и абсолютно честного прайса, конечная стоимость работы указывается еще до ее начала)',
        icon: moneyIcon,
    },
    {
        discription:
            'Быстрое выполнение услуги (большой опыт и использование современного оборудования позволяет нашим сотрудникам оперативно справляться даже с нестандартными задачами)',
        icon: watchIcon,
    },
];

const Guarantees = () => (
    <section className={styles.guarantees}>
        <div className={styles.guarantees_container}>
            <h3 className={styles.guarantees_title}>
                Обращаясь в <span>Добробыт</span> Вы гарантируете себе:
            </h3>
            {items.map(({ discription, icon }) => (
                <div key={`${discription}${icon}`} className={styles.guarantees_item}>
                    <img src={icon} className={styles.guarantees_icon} alt="icon" />
                    <p className={styles.guarantees_discription}>{discription}</p>
                </div>
            ))}
        </div>
        <img src={guaranteesImage} className={styles.guarantees_image} alt="workers" />
    </section>
);

export default Guarantees;
