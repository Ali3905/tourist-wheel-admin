import Login from '../pages/login';
import Account from '../pages/account';
// SubPages 

import Drivers from '../pages/staff/drivers.jsx';
import Cleaners from '../pages/staff/Cleaners.jsx';
import Employees from '../pages/staff/Employees.jsx';
import Technicians from '../pages/Technicians.jsx';
import Vehicles from '../pages/Vehicles/index.jsx';
import RentVehicles from '../pages/Vehicle Transaction/RentVehicles.jsx';
import SellVehicles from '../pages/Vehicle Transaction/SellVehicles.jsx';
import DailyRoute from '../pages/Vehicle Inspection/DailyRoute.jsx';
import PackageBooking from '../pages/Vehicle Inspection/PackageBooking.jsx';
import AvailableDrivers from '../pages/Available Drivers/index.jsx';
import Agencies from '../pages/Agencies/index.jsx';
export const LoginRoutingConfig = [
	{ name: '', path: '/', component: <Login /> },
]

export const RoutingConfig = [

	{
		name: 'Overview',
		path: '/Overview',
		component: <Agencies />,
	},
	{
		name: 'Drivers',
		path: '/drivers',
		component: <Drivers />,
	},
	{
		name: 'Cleaners',
		path: '/cleaners',
		component: <Cleaners />,
	},
	{
		name: 'Employees',
		path: '/employees',
		component: <Employees />,
	},
	{
		name: 'Technicians',
		path: '/technicians',
		component: <Technicians />,
	},
	{
		name: 'Agencies',
		path: '/agencies',
		component: <Agencies />,
	},
	{
		name: 'Vehicles',
		path: '/vehicles',
		component: <Vehicles />,
	},
	{
		name: 'Vehicles For Rent',
		path: '/rentVehicles',
		component: <RentVehicles />,
	},
	{
		name: 'Vehicles For Sell',
		path: '/sellVehicles',
		component: <SellVehicles />,
	},
	{
		name: 'Daily Route Vehicles',
		path: '/dailyRoutes',
		component: <DailyRoute />,
	},
	{
		name: 'Package Booking',
		path: '/packageBooking',
		component: <PackageBooking />,
	},
	{
		name: 'Available Drivers',
		path: '/availableDrivers',
		component: <AvailableDrivers />,
	},
	// 
];
