import React from 'react'

const Pagination = ({ gotoPrevPage, gotoNextPage }) => {
  return (
    <div className="flex flex-wrap justify-around content-around">
      {gotoPrevPage && <button onClick={gotoPrevPage} className="bg-red-600 hover:bg-red-500 transform duration-200 hover:scale-125 text-white p-4 rounded">Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage} className="bg-red-600 hover:bg-red-500 transform duration-200 hover:scale-125 text-white p-4 rounded">Next</button>}
    </div>
  );
}

export default Pagination
