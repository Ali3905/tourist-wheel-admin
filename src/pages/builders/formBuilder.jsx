import { React, useState, useSelector, useDispatch, Form, useLocation, message, Outlet } from '../../GlobalImports';
import * as Styled from '../../components/formButton';


//table 
import CustomTable from '../../components/table';
import Filter from '../../components/filter';
import Search from '../../components/search';
import Sort from '../../components/sort';
import { columnsForCouponTable, columnsForWalletsTable, columnsForRefundTable, RefundDummyData, CouponDummyData, WalletDummyData } from '../../jsonData/tableData';
import CustomTablePagination from '../../components/CustomTablePagination';
import { addDriverAsync, updateDriverAsync } from '../../redux/driversSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { addCleanerAsync } from '../../redux/cleanersSlice';
import { addEmployeeAsync, updateEmployeeAsync } from '../../redux/employeesSlice';
import { addTechnicianAsync, updateTechnicianAsync } from '../../redux/technicianSlice';
import { addVehicleAsync } from '../../redux/vehiclesSlice';
import { loginUserAsync } from '../../redux/authSlice';



const MainPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false)
  const [files, setFiles] = useState({});
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const myindex = useSelector((state) => state.sidebar.selectedParentIndex);
  const [filteredData, setFilteredData] = useState(CouponDummyData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const filteredcolumnsForCouponTable = columnsForCouponTable
  const navigate = useNavigate()
  const { technicianId, employeeId, driverId } = useParams()

  const handleFilterChange = ({ column, fromValue, toValue }) => {
    const formatDate = (date) => date ? new Date(date).toLocaleDateString() : null;

    const newFilteredData = filteredData.filter((item) => {
      const columnValue = formatDate(item[column]);
      const columnValuestring = item[column];

      if (['customerEmail', 'name', 'status'].includes(column.toLowerCase())) {
        return (
          (!fromValue || columnValuestring.toLowerCase().includes(fromValue.toLowerCase())) &&
          (!toValue || columnValuestring.toLowerCase().includes(toValue.toLowerCase()))
        );
      } else if (column === "duePayDate") {
        const fromDate = formatDate(fromValue);
        const toDate = formatDate(toValue);

        return !fromDate || !toDate || (columnValue >= fromDate && columnValue <= toDate);
      } else {
        return (!fromValue || Number(columnValuestring) >= Number(fromValue)) &&
          (!toValue || Number(columnValuestring) <= Number(toValue));
      }
    });
    setPage(0);
    setFilteredData(newFilteredData);
  };

  const handleSearchChange = (value) => {
    const newFilteredData = CouponDummyData.filter((item) =>
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

  const handleFileChange = (e, fieldName) => {
    setFiles({
      ...files,
      [fieldName]: e.target.files[0],
    });
  };

  const onFinish = (values) => {
    // const isSuccess = true;
    setIsLoading(true)
    const formsConfig = [
      { id: 'addDriver', path: '/addDriver', formType: 'driver' },
      { id: 'addCleaner', path: '/addCleaner', formType: 'cleaner' },
      { id: 'addCar', path: '/addCar', formType: 'car' },
      { id: 'addBus', path: '/addBus', formType: 'bus' },
      { id: 'addTampo', path: '/addTampo', formType: 'tampo' },
      { id: 'addTruck', path: '/addTruck', formType: 'truck' },
      { id: 'addTechnician', path: '/addTechnician', formType: 'technician' },
      { id: 'addEmployee', path: '/addEmployee', formType: 'employee' },
      { id: 'login', path: '/login', formType: 'login' },
      { id: 'editTechnician', path: '/technicians', formType: 'login' },
      { id: 'editEmployee', path: '/employees', formType: 'login' },
      { id: 'editDriver', path: '/drivers', formType: 'login' },
    ];

    const currentFormConfig = formsConfig.find((config) => location.pathname.startsWith(config.path));
    // const currentFormType = currentFormConfig ? currentFormConfig.formType : 'form';

    const mergedValues = { ...values, ...files };

    const formData = new FormData();

    // Iterate over the properties of the object
    for (const key in mergedValues) {
      // Check if the property is not from prototype chain
      if (mergedValues.hasOwnProperty(key)) {
        // Append each value to the FormData object
        formData.append(key, mergedValues[key]);
      }
    }

    if (currentFormConfig.id === "addDriver") {
      dispatch(addDriverAsync(formData))
      navigate("/drivers")
    } else if (currentFormConfig.id === "addCleaner") {
      dispatch(addCleanerAsync(formData))
      navigate("/cleaners")
    } else if (currentFormConfig.id === "addEmployee") {
      dispatch(addEmployeeAsync(formData))
      navigate("/employees")
    } else if (currentFormConfig.id === "addTechnician") {
      dispatch(addTechnicianAsync(values))
      navigate("/technicians")
    } else if (currentFormConfig.id === "addCar") {
      formData.append("type", "CAR")
      dispatch(addVehicleAsync(formData))
      navigate("/vehicles")
    } else if (currentFormConfig.id === "addBus") {
      formData.append("type", "BUS")
      dispatch(addVehicleAsync(formData))
      navigate("/vehicles")
    } else if (currentFormConfig.id === "addTampo") {
      formData.append("type", "TAMPO")
      dispatch(addVehicleAsync(formData))
      navigate("/vehicles")
    } else if (currentFormConfig.id === "addTruck") {
      formData.append("type", "TRUCK")
      dispatch(addVehicleAsync(formData))
      navigate("/vehicles")
    } else if (currentFormConfig.id === "login") {
      dispatch(loginUserAsync(values))
    } else if (currentFormConfig.id === "editTechnician") {
      const finalVal = { ...values, technicianId }
      console.log({ finalVal });
      dispatch(updateTechnicianAsync(finalVal))
      navigate("/technicians")
    } else if (currentFormConfig.id === "editEmployee") {
      const finalVal = { ...values, employeeId }
      dispatch(updateEmployeeAsync(finalVal))
      navigate("/employees")
    } else if (currentFormConfig.id === "editDriver") {
      const finalVal = { ...values, driverId }

      dispatch(updateDriverAsync(finalVal))
      navigate("/drivers")
    }
    setIsLoading(false)
  };

  return (
    <>
      {
        myindex === 21 && (
          <div>
            <div style={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "51%" }}>
                <Search onSearchChange={handleSearchChange} />
                <Sort onSortChange={handleSortChange} />
                <Filter columns={columnsForCouponTable} onFilterChange={handleFilterChange} />
              </div>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '5px', margin: '20px 0px' }}>
              <div style={{ display: 'flex', justifyContent: "space-between" }}>
              </div>
              <CustomTable columns={filteredcolumnsForCouponTable} data={filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage)} />
              <CustomTablePagination
                count={filteredData.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
        )
      }
      {
        myindex === 22 && (
          <div>
            <div style={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "51%" }}>
                <Search onSearchChange={handleSearchChange} />
                <Sort onSortChange={handleSortChange} />
                <Filter columns={columnsForWalletsTable} onFilterChange={handleFilterChange} />
              </div>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '5px', margin: '20px 0px' }}>
              <div style={{ display: 'flex', justifyContent: "space-between" }}>
              </div>
              <CustomTable columns={columnsForWalletsTable} data={WalletDummyData.slice(page * rowsPerPage, (page + 1) * rowsPerPage)} />
              <CustomTablePagination
                count={WalletDummyData.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
        )
      }
      {
        myindex === 24 && (

          <div>

            <div style={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "51%" }}>
                <Search onSearchChange={handleSearchChange} />
                <Sort onSortChange={handleSortChange} />
                <Filter columns={columnsForRefundTable} onFilterChange={handleFilterChange} />
              </div>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '5px', margin: '20px 0px' }}>
              <div style={{ display: 'flex', justifyContent: "space-between" }}>
              </div>
              <CustomTable columns={columnsForRefundTable} data={RefundDummyData.slice(page * rowsPerPage, (page + 1) * rowsPerPage)} />
              <CustomTablePagination
                count={RefundDummyData.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
        )
      }



      <Form form={form} layout="vertical" onFinish={onFinish} >
        <Outlet context={{ handleFileChange }} />
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Styled.SubmitButton primary={myindex !== 21 && myindex !== 22 && myindex !== 24} htmlType="submit">
            {isLoading ? "Saving" : "Save"}
          </Styled.SubmitButton>
        </div>
      </Form>
    </>
  );
};

export default MainPage;
