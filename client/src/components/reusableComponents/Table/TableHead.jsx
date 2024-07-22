import React from 'react';

const TableHead = ({ name }) => {
  return (
    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
      {name}
    </th>
  );
};

export default TableHead;
