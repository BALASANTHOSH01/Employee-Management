import React from 'react';

const TableRows = ({ data, className}) => {
  return (
    <td className={`px-4 py-4 whitespace-nowrap ${className}`}>
      {data}
    </td>
  );
};

export default TableRows;
