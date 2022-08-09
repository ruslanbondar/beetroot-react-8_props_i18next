import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

const links = [
  { link: '/', name: 'Home' },
  { link: '/first-dishes', name: 'First Dishes' },
  { link: '/second-dishes', name: 'Second Dishes' },
  { link: '/deserts', name: 'Deserts' },
];

const Header = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.header}>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index} className={styles.link}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>

      <button
        className={`${i18n.language === 'ua' && styles.activeLang}`}
        onClick={() => i18n.changeLanguage('ua')}
      >
        ua
      </button>
      <button
        className={`${i18n.language === 'en' && styles.activeLang}`}
        onClick={() => i18n.changeLanguage('en')}
      >
        en
      </button>
    </div>
  );
};

export default Header;
