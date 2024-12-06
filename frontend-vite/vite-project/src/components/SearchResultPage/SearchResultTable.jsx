import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultTable = ({ foods }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {/* <th>FDC ID</th> */}
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {foods.map(food => (
          <tr key={food.fdcId}>
            {/* <td>{food.fdcId}</td> */}
            <td>
              <Link to={`/food/${food.fdcId}`}>{food.description}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResultTable;