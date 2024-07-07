import React, { useEffect, useState } from 'react';
import CustomTable from '../../components/table';
import Search from '../../components/search';
import Sort from '../../components/sort';
import { columnsForCreatedDailyRoutes, columnsForFinalizedDailyRoutes } from '../../jsonData/tableData';
import CustomTablePagination from '../../components/CustomTablePagination';
import AddButton from '../../components/addButton';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyRoutesAsync } from '../../redux/dailyRoutesSlice';
import { Option } from 'antd/es/mentions';
import { Select } from 'antd';

const DailyRoute = () => {
  const data = useSelector(state => state.dailyRoutes.data)

  const options = ["FINALIZED", "CREATED"]
  const [currentStatus, setCurrentStatus] = useState("CREATED")

  const [filteredData, setFilteredData] = useState(data.filter(el => el.status === currentStatus));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const columns = currentStatus === "CREATED" ? [...columnsForCreatedDailyRoutes, { id: "update", label: "Action" }] : columnsForFinalizedDailyRoutes
  const filteredcolumns = columns

  const dispatch = useDispatch()

  const handleSearchChange = (value) => {
    const newFilteredData = data.filter((item) =>
      Object.values(item).some((val) => val.toString().toLowerCase().includes(value.toLowerCase()))
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
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(getDailyRoutesAsync())
  }, [])

  useEffect(() => {
    setFilteredData(data.filter(el => el.status === currentStatus))
  }, [data, currentStatus])



  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>

        <div style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>

          <AddButton />
          <Search onSearchChange={handleSearchChange} />
          <Sort onSortChange={handleSortChange} />
          <Select
            placeholder="None"
            value={currentStatus}
            onChange={e => setCurrentStatus(e)}
            style={{ height: "100%" }}
          >
            {options.map((option) => (
              <Option key={option} value={option} />
            ))}
          </Select>
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

export default DailyRoute;
