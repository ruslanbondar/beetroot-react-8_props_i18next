import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DishesPage from './pages/DishesPage/DishesPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';

import { data } from './data/data';

function App() {
  const { t } = useTranslation();

  const firstDishes = data.filter((item) => item.category === 'Перші страви');
  const secondDishes = data.filter((item) => item.category === 'Другі страви');
  const deserts = data.filter((item) => item.category === 'Десерти');

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/first-dishes"
          element={
            <DishesPage
              data={firstDishes}
              discount={true}
              title={t('title.firstDish')}
            />
          }
        />
        <Route
          path="/second-dishes"
          element={
            <DishesPage data={secondDishes} title={t('title.secondDish')} />
          }
        />
        <Route
          path="/deserts"
          element={<DishesPage data={deserts} title={t('title.deserts')} />}
        />
      </Routes>
    </div>
  );
}

export default App;
