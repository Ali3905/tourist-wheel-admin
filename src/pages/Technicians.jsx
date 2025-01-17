import React, { useEffect, useState } from 'react';
import CustomTable from './../components/table';
import Search from './../components/search';
import Sort from './../components/sort';
import { columnsForTechnicians as columns } from './../jsonData/tableData';
import CustomTablePagination from './../components/CustomTablePagination';
import AddButton from './../components/addButton';
import { useDispatch, useSelector } from 'react-redux';
import { getTechniciansAsync } from '../redux/technicianSlice';

const Technicians = () => {
  const data = useSelector(state => state.technicians.data)

  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [apiPage, setApiPage] = useState(1)
  const filteredcolumns = columns

  const dispatch = useDispatch()


  const handleSearchChange = (value) => {
    const newFilteredData = data.filter((item) =>
      Object.values(item).some((val) => val?.toString().toLowerCase().includes(value.toLowerCase()))
    );
    setPage(0);
    setFilteredData(newFilteredData);
  };

  const handleSortChange = (value) => {
    const columnToSort = value;

    const newSortedData = [...filteredData].sort((a, b) =>
      a[columnToSort] > b[columnToSort] ? 1 : -1
    );
    setPage(0);
    setFilteredData(newSortedData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // console.log(rowsPerPage * );
    console.log(apiPage*100);
    console.log(rowsPerPage * (page + 1));
    if ((rowsPerPage * (page + 2)) >= (apiPage * 100)) {
      setApiPage(apiPage+1)
    }
  };

  const handleChangeRowsPerPage = (event) => {
    alert(parseInt(event.target.value, 10))
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(getTechniciansAsync(apiPage))
  }, [apiPage])

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  return (
    <div>
      <div style={{ display: 'flex', alignItems: "center" }}>

        <div className='sm:w-1/2 w-full' style={{ display: "flex"}}>

          <AddButton />
          <Search onSearchChange={handleSearchChange} width={"auto"} />
          <Sort onSortChange={handleSortChange} />
        </div>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '5px', margin: '20px 0px' }}>
        <div style={{ display: 'flex', justifyContent: "space-between" }}>

        </div>
        <CustomTable columns={filteredcolumns} data={filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage)} />
        <CustomTablePagination
          count={filteredData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Technicians;
