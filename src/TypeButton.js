import React from 'react'

const TypeButton = ({ thisType }) => {
  if (!thisType) return null;

  return (
    <div className={`${thisType} uppercase bg-gray-100 text-white rounded text-xs p-1`} thisType={thisType}>
      {thisType}
    </div>
  );
}

export default TypeButton
