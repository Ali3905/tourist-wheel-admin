import OverView from "../assets/overview.svg"
import WebsiteManagement from "../assets/Group 427320877.png"
// import OrderManagement from "../assets/Group 427320877.png"
// import UserScreenManagement from "../assets/Group 427320877.png"
// import PeopleManagement from "../assets/Group 427320877.png"
// import DiscountManagement from "../assets/Group 427320877.png"
// import Messages from "../assets/Group 427320877.png"
// import ShutDownRequest from "../assets/Group 427320877.png"
// import ThemeManageMent from "../assets/Group 427320877.png"
// import Refund from "../assets/Group 427320877.png"
// import Notification from "../assets/Group 427320877.png"

export const SideMenuConfig = {
	0: {
		title: 'Overview',
		path: '/Overview',
		icon: OverView,
	},
	1: {
		title: 'Drivers',
		path: '/drivers',
		icon: WebsiteManagement
	},
	2: {
		title: 'Vehicle package booking',
		path: '/packageBooking',
		icon: WebsiteManagement
	},

	3: {
		title: 'Employees List',
		path: '/employees',
		icon: WebsiteManagement,
		onlyFor: ["ADMIN"]
	},
	4: {
		title: "Technician Support",
		path: "/technicians",

	},
	5: {
		title: "Agencies",
		path: "/agencies",
		onlyFor: ["ADMIN"]
	},
	// 7: {
	// 	title: 'Vehicle Management',
	// 	icon: OrderManagement,
	// 	child: {
	// 		8: { title: 'Add Car', path: '/addCar' },
	// 		9: { title: 'Add Bus', path: '/addBus' },
	// 		10: { title: 'Add Tampo traveler', path: '/addTampo' },
	// 		11: { title: 'Add Truck', path: '/addTruck' },
	// 	},
	// },
	// 12: {
	// 	title: "All Vehicles",
	// 	icon: OrderManagement,
	// 	path: "/vehicles"
	// },
	// 13: {
	// 	title: 'Vehicle Transaction',
	// 	icon: PeopleManagement,
	// 	child: {
	// 		14: { title: 'Sell Vehicle', path: '/sellVehicles' },
	// 		15: { title: 'Rent Vehicle', path: '/rentVehicles' },
	// 	},
	// },
	// 16: {
	// 	title: 'Vehicle Inspection',
	// 	icon: DiscountManagement,
	// 	child: {
	// 		17: { title: 'Daily Route', path: '/dailyRoutes' },
	// 		18: { title: 'Vehicle Package Booking', path: '/packageBooking' },

	// 	},
	// },
	// 19: {
	// 	title: 'Available Drivers',
	// 	path: '/availableDrivers',
	// 	icon: Notification,
	// },

	// 27: {
	// 	title: 'Vehicle Documents',
	// 	path: '/ShutdownRequest',
	// 	icon: ShutDownRequest,
	// },
	// 28: {
	// 	title: 'Vehicle Servicing History',
	// 	path: '/Notifications',
	// 	icon: Notification,
	// }
};
