import React from 'react';

const DishesPage = ({ data = [], discount = false, title }) => {
  return (
    <div>
      <h1>{title}</h1>

      {data.map((item) => (
        <div key={item.id}>
          <h2>
            {item.dish} {discount && <span>%</span>}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default DishesPage;
