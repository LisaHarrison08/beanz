import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions';
import MenuCard from './/MenuCard';
import { productsData } from '../productsFolder/productsData';

function Menu() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.Reducer);

  useEffect(() => {
    dispatch(setProducts(productsData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row menu-row">
      {products.map((product) => {
        return (
          <MenuCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default Menu;
