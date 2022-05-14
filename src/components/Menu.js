import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setLoading } from '../redux/actions';
import Navigation from './Navigation2';
import MenuCard from './/MenuCard';
import { productsData } from '../productsFolder/productsData';

function Menu() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.Reducer);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, []);

  // console.log(products);

  return (
    <div className="container-fluid menu-container">
      <Navigation />
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
    </div>
  );
}

export default Menu;
