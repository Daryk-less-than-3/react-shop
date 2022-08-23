import React from 'react';
import { NotFoundBlock } from '../components/NotFoundBlock';

function NotFound() {
  return (
    <>
      <NotFoundBlock />
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </p>
      <button>Назад</button>
    </>
  );
}

export default NotFound;
