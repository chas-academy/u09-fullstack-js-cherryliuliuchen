import React from 'react';

const FoodNutrientsTable = ({ nutrients }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nutrient Name</th>
          <th>Value</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(nutrients).map((key, index) => (
          <tr key={index}>
            <td>{key}</td>
            <td>{nutrients[key].value}</td>
            <td>{nutrients[key].unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FoodNutrientsTable;
