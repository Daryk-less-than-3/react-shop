import React, { useState } from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Острые', 'Вегетарианская', 'Гриль', 'Закрытые'];

  const onClickCategory = (a) => {
    setActiveCategory(a);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={activeCategory === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
