// store.js
import { configureStore } from '@reduxjs/toolkit';
import headingReducer from './redux/headingSlice';
import sidebarReducer from './redux/sidebarSlice';
import popupReducer from './redux/popupSlice';
import statusReducer from './redux/statusSlice';
import FormDetailsReducer from './redux/formSlice'
import driversSlice from './redux/driversSlice';
import technicianSlice from './redux/technicianSlice';
import employeesSlice from './redux/employeesSlice';
import cleanersSlice from './redux/cleanersSlice';
import vehiclesSlice from './redux/vehiclesSlice';
import dailyRoutesSlice from './redux/dailyRoutesSlice';
import agenciesSlice from './redux/agenciesSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    heading: headingReducer,
    sidebar: sidebarReducer,
    popup: popupReducer,
    status: statusReducer,
    form: FormDetailsReducer,
    drivers: driversSlice,
    technicians: technicianSlice,
    employees: employeesSlice,
    cleaners: cleanersSlice,
    vehicles: vehiclesSlice,
    dailyRoutes: dailyRoutesSlice,
    agencies: agenciesSlice
  },
});

// export const persistor = persistStore(store);

export default store;
