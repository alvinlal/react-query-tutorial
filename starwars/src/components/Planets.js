import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);

  const mockData = [
    {
      schema: 'Customer',
      tables: ['customer', 'address'],
      views: ['customer_vw', 'address_vs'],
    },
    {
      schema: 'Sales',
      tables: ['sales', 'city', 'target'],
      views: ['sales_vw', 'customer_salessss', 'city_total'],
    },
  ];


  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      {status === 'error' && <div>Something went wrong !</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'success' && (
        <div>
          {data.results.map(planet => (
            <Planet planet={planet} key={planet.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
