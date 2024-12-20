
export const columnsForTable = [
    { id: 'id', label: 'ID' },
    { id: 'customername', label: 'Customer Name' },
    { id: 'customerNumber', label: 'Customer Mobile' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'AdminName', label: 'Admin Name' },
    { id: 'CustomerOrderCount', label: "Order Count" },
    { id: 'products', label: 'Products' },
    { id: 'status', label: "Accept/Reject" },
];


export const columnsForSheduledTable = [
    { id: 'id', label: 'ID' },
    { id: 'customername', label: 'Customer Name' },
    { id: 'customerNumber', label: 'Customer Mobile' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'AdminName', label: 'Admin Name' },
    { id: 'CustomerOrderCount', label: "Order Count" },
    { id: 'products', label: 'Products' },
    { id: 'status', label: "Acceptance" },
];

export const dummyData = [
    { id: 1, customername: 'Hane Doe', customerNumber: '8775787855', Pincode: "629179", AdminName: 'Jay', CustomerOrderCount: '500', status: 'pending' },
    { id: 2, customername: 'Ebi Ra', customerNumber: '8775787855', Pincode: "629173", AdminName: 'Vijay', CustomerOrderCount: '500', status: 'pending' },
    { id: 3, customername: 'Jane Doe', customerNumber: '8775787855', Pincode: "629173", AdminName: 'Ajay', CustomerOrderCount: '700', status: 'pending' },
    { id: 4, customername: 'John Smith', customerNumber: '8775787855', Pincode: "629175", AdminName: 'Raju', CustomerOrderCount: '800', status: 'pending' },
    { id: 5, customername: 'Alice Johnson', customerNumber: '8775787855', Pincode: "629170", AdminName: 'Moses', CustomerOrderCount: '900', status: 'pending' },
    { id: 6, customername: 'Jane Doe', customerNumber: '8775787855', Pincode: "629176", AdminName: 'Tomy', CustomerOrderCount: '700', status: 'pending' },
    { id: 7, customername: 'John Smith', customerNumber: '8775787855', Pincode: "629178", AdminName: 'Riju', CustomerOrderCount: '800', status: 'pending' },
];

export const columnsForOrders = [
    { id: 'id', label: 'No' },
    { id: 'customerName', label: 'Employee Name' },
    { id: 'email', label: 'Email' },
    { id: 'orderType', label: 'Employee Position' },
    { id: 'customerPin', label: 'Mobile No' },
    { id: 'Pincode', label: 'PinCode' },

    // { id: 'assigneeDetails', label: "Assignee" },
    // { id: 'orderTimings', label: 'Progress' },
    // { id: 'products', label: 'Products' },
    // { id: 'orderValue', label: 'Value' },
    // { id: 'ratings', label: 'Ratings' },
];

export const dataForOrders = [
    {
        id: 1,
        customerName: 'Hane Doe',
        count: 'handoe@gmail.com',
        orderType: "Driver",
        customerPin: '7249005806',
        assigneeDetails: {
            name: 'admin',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Jijo',
                    failedToDeliverCount: 5,
                    activeStatus: true,
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Abison',
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', activeStatus: true, contactDetails: '9123456780', Name: 'Shilash', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Kisolin',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707711302',
                }
            }
        },
        orderTimings: {
            progress: 'Not Started',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: null,
                OrderDispatchedTime: null,
                OrderTansferedTime: null,
                DeliveredTime: null
            }
        },
        products: 'pending',
        orderValue: '500',
        ratings: '4'
    },
    {
        id: 2,
        customerName: 'Ebi Ra',
        count: '10',
        orderType: "COD",
        customerPin: '629173',
        assigneeDetails: {
            name: 'vendor',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Raju',
                    failedToDeliverCount: 5,
                    activeStatus: true,
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Sudhan',
                    vendorType: 'Premium',
                    activeStatus: true,
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', activeStatus: true, contactDetails: '9123456780', Name: 'Misben', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Aswin',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707532682',
                }
            }
        },
        orderTimings: {
            progress: 'Accepted',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: null,
                OrderTansferedTime: '1707552568',
                DeliveredTime: null,
            }
        },
        products: 'pending',
        orderValue: '500',
        ratings: '5'
    },
    {
        id: 3,
        customerName: 'Jane Doe',
        count: '14',
        orderType: "COD",
        customerPin: '629173',
        assigneeDetails: {
            name: 'partner',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'somu',
                    failedToDeliverCount: 5,
                    activeStatus: true
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Kisore',
                    vendorType: 'Premium',
                    activeStatus: false,
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Gibin', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', Name: 'Vendor three', activeStatus: true, VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Vijin',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'Dispatched',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderTansferedTime: '1707552568',
                OrderDispatchedTime: null,
                DeliveredTime: null,
            }
        },
        products: 'EmpAccepted',
        orderValue: '500',
        ratings: '4'
    },
    {
        id: 4,
        customerName: 'John Smith',
        count: '5',
        orderType: "COD",
        customerPin: '629175',
        assigneeDetails: {
            name: 'admin',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Shiju',
                    failedToDeliverCount: 5,
                    activeStatus: true
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Mani',
                    activeStatus: true,
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vijay', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', Name: 'Vendor three', activeStatus: true, VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Ebin',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'transfered',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: '1707552568',
                OrderTansferedTime: '1707552568',
                DeliveredTime: null,
            }
        },
        products: 'EmpRejected',
        orderValue: '500',
        ratings: '5'
    },
    {
        id: 5,
        customerName: 'Alice Johnson',
        count: '6',
        orderType: "COD",
        customerPin: '629170',
        assigneeDetails: {
            name: 'vendor',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Praveen',
                    failedToDeliverCount: 5,
                    activeStatus: true,
                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Surya',
                    activeStatus: true,
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', activeStatus: true, contactDetails: '9123456780', Name: 'Ramesh', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Vishnu',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'Delivered',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: '1707552568',
                OrderTansferedTime: null,
                DeliveredTime: null,
            }
        },
        products: 'pending',
        orderValue: '500',
        ratings: '4'
    },
    {
        id: 6,
        customerName: 'Jane Doe',
        count: '7',
        orderType: "online",
        customerPin: '629176',
        assigneeDetails: {
            name: 'partner',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    activeStatus: true,
                    contactDetails: '9123456780',
                    Name: 'Jackson',
                    failedToDeliverCount: 5,

                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Vivek',
                    activeStatus: true,
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', contactDetails: '9123456780', Name: 'Heman', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'senthil',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'Not Started',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: '1707552568',
                OrderTansferedTime: '1707552568',
                DeliveredTime: '1707552568'
            }
        },
        products: 'pending',
        orderValue: '500',
        ratings: '3'
    },
    {
        id: 7,
        customerName: 'John Smith',
        count: '8',
        orderType: "online",
        customerPin: '629178',
        assigneeDetails: {
            name: 'admin',
            details: {
                adminDetails: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Hari',
                    failedToDeliverCount: 5,

                },
                VendorDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Sarav',
                    activeStatus: true,
                    vendorType: 'Premium',
                    failedToDeliverCount: 5,
                    NearByVendorDetails: [{ VendorPincode: '629179', activeStatus: true, contactDetails: '9123456780', Name: 'Vignesh', VendorType: 'Bulk', successOrderCount: 100, failedToDeliverCount: 5, },
                    { VendorPincode: '629179', contactDetails: '9123456780', activeStatus: true, Name: 'Vendor three', VendorType: 'Byzo', successOrderCount: 100, failedToDeliverCount: 5 }]
                },
                PartnerDeatils: {
                    successOrderCount: 100,
                    contactDetails: '9123456780',
                    Name: 'Gopal',
                    activeStatus: true,
                    OverAllRatings: "2000",
                    CurrentOrderRating: '0004'
                },
                OrderTiming: {
                    OrderPlacedTime: '1707552568',
                }
            }
        },
        orderTimings: {
            progress: 'Not Started',
            timings: {
                OrderPlacedTime: '1707552568',
                OrderAccpetedTime: '1707552568',
                OrderDispatchedTime: '1707552568',
                OrderTansferedTime: '1707552568',
                DeliveredTime: '1707552568'
            }
        },
        products: 'EmpRejected',
        orderValue: '500',
        ratings: '5'
    }
];


export const columnsForTransferOrder = [
    { id: 'id', label: 'ID' },
    { id: 'AdminName', label: 'Admin Name' },
    { id: 'AdminContact', label: 'Admin Number' },
    { id: 'AdminStatus', label: 'Active Status' },
    { id: 'VendorName', label: 'Vendor Name' },
    { id: 'VendorContact', label: 'Vendor Contact' },
    { id: 'VendorSatus', label: 'Vendor Status' },
    { id: 'products', label: 'Products' },
    { id: 'status', label: "Transfter" },
];

export const dummyDataForTransferOrder = [
    { id: 1, AdminName: 'Hane Doe', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Jay', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
    { id: 2, AdminName: 'Ebi Ra', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Vijay', VendorContact: '82768796987', VendorSatus: "false", status: 'pending' },
    { id: 3, AdminName: 'Jane Doe', AdminContact: '8775787855', AdminStatus: "false", VendorName: 'Ajay', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
    { id: 4, AdminName: 'John Smith', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Raju', VendorContact: '82768796987', VendorSatus: "false", status: 'pending' },
    { id: 5, AdminName: 'Alice Johnson', AdminContact: '8775787855', AdminStatus: "false", VendorName: 'Moses', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
    { id: 6, AdminName: 'Jane Doe', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Tomy', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
    { id: 7, AdminName: 'John Smith', AdminContact: '8775787855', AdminStatus: "true", VendorName: 'Riju', VendorContact: '82768796987', VendorSatus: "true", status: 'pending' },
];


export const columnsForAdminTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'AdminEmail', label: 'Email' },
    { id: 'control', label: 'Control' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'Location', label: 'Location' },
    { id: 'PartnerCount', label: 'Partner' },
    { id: 'SuccessCount', label: 'Success' },
    { id: 'FailureCount', label: 'Failure' },
    { id: 'Rating', label: 'Rating' },
    { id: 'Action', label: 'Action' },
];

export const adminDummyData = [
    { id: 1, name: 'John Doe', AdminEmail: 'dummy@gmail.com', Location: 200, Pincode: '200', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 2, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Pincode: '0', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 3, name: 'Raju', AdminEmail: 'dummy@gmail.com', Location: 400, Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 4, name: 'Shiju', AdminEmail: 'dummy@gmail.com', Location: 500, Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 5, name: 'Mani', AdminEmail: 'dummy@gmail.com', Location: 600, Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 6, name: 'Hlloe one', AdminEmail: 'dummy@gmail.com', Location: 700, Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 7, name: 'John Doe', AdminEmail: 'dummy@gmail.com', Location: 200, Pincode: '200', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 8, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Pincode: '300', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 9, name: 'owfuhhwo', AdminEmail: 'dummy@gmail.com', Location: 400, Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 10, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 500, Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 11, name: 'ewfewf', AdminEmail: 'dummy@gmail.com', Location: 600, Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 12, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 700, Pincode: '700', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 13, name: 'efwefwef', AdminEmail: 'dummy@gmail.com', Location: 200, Pincode: '200', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 14, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Pincode: '0', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 15, name: 'ewfwfw', AdminEmail: 'dummy@gmail.com', Location: 400, Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 16, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 500, Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 17, name: 'ewfwef', AdminEmail: 'dummy@gmail.com', Location: 600, Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 18, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 700, Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 19, name: 'Raju', AdminEmail: 'dummy@gmail.com', Location: 400, Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 20, name: 'Shiju', AdminEmail: 'dummy@gmail.com', Location: 500, Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' }
];

export const columnsForVendorTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'AdminEmail', label: 'Email' },
    { id: 'control', label: 'Control' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'Location', label: 'Location' },
    { id: 'Type', label: 'Type' },
    { id: 'PartnerCount', label: 'Partner' },
    { id: 'SuccessCount', label: 'Success' },
    { id: 'FailureCount', label: 'Failure' },
    { id: 'Rating', label: 'Rating' },
    { id: 'Action', label: 'Action' },
    // profit // turnover
];

export const VendorDummyData = [
    { id: 1, name: 'John Doe', AdminEmail: 'dummy@gmail.com', Location: 200, Type: 'Byzo', Pincode: '200', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 2, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Type: 'Bulk', Pincode: '0', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 3, name: 'Raju', AdminEmail: 'dummy@gmail.com', Location: 400, Type: 'Dark', Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 4, name: 'Shiju', AdminEmail: 'dummy@gmail.com', Location: 500, Type: 'Cloud', Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 5, name: 'Mani', AdminEmail: 'dummy@gmail.com', Location: 600, Type: 'Byzo', Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 6, name: 'Hlloe one', AdminEmail: 'dummy@gmail.com', Location: 700, Type: 'Bulk', Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 7, name: 'John Doe', AdminEmail: 'dummy@gmail.com', Location: 200, Type: 'Dark', Pincode: '200', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 8, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Type: 'Byzo', Pincode: '300', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 9, name: 'owfuhhwo', AdminEmail: 'dummy@gmail.com', Location: 400, Type: 'Cloud', Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 10, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 500, Type: 'Byzo', Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 11, name: 'ewfewf', AdminEmail: 'dummy@gmail.com', Location: 600, Type: 'Dark', Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 12, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 700, Type: 'Cloud', Pincode: '700', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 13, name: 'efwefwef', AdminEmail: 'dummy@gmail.com', Location: 200, Type: 'Byzo', Pincode: '200', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 14, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 300, Type: 'Byzo', Pincode: '0', control: '7', PartnerCount: '6', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 15, name: 'ewfwfw', AdminEmail: 'dummy@gmail.com', Location: 400, Type: 'Byzo', Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 16, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 500, Type: 'Byzo', Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 17, name: 'ewfwef', AdminEmail: 'dummy@gmail.com', Location: 600, Type: 'Byzo', Pincode: '600', control: '7', PartnerCount: '4', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 18, name: 'Ebi Ra', AdminEmail: 'dummy@gmail.com', Location: 700, Type: 'Byzo', Pincode: '0', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' },
    { id: 19, name: 'Raju', AdminEmail: 'dummy@gmail.com', Location: 400, Type: 'Byzo', Pincode: '400', control: '7', PartnerCount: '5', SuccessCount: '80', FailureCount: '5', Rating: '5' },
    { id: 20, name: 'Shiju', AdminEmail: 'dummy@gmail.com', Location: 500, Type: 'Byzo', Pincode: '500', control: '7', PartnerCount: '9', SuccessCount: '80', FailureCount: '5', Rating: '4' }
];

export const columnsForSellerTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'SellerEmail', label: 'Email' },
    { id: 'Count', label: 'Count' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'Location', label: 'Location' },
    { id: 'products', label: 'Products' },
    { id: 'Action', label: 'Action' },
    // profit // turnover
];


export const SellerDummyData = [
    { id: 1, name: 'John Doe', SellerEmail: 'dummy@gmail.com', Location: 200, Type: 'Byzo', Pincode: '200', Count: '80', },
    { id: 2, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 300, Type: 'Bulk', Pincode: '0', Count: '80', },
    { id: 3, name: 'Raju', SellerEmail: 'dummy@gmail.com', Location: 400, Type: 'Dark', Pincode: '400', Count: '80', },
    { id: 4, name: 'Shiju', SellerEmail: 'dummy@gmail.com', Location: 500, Type: 'Cloud', Pincode: '500', Count: '80', },
    { id: 5, name: 'Mani', SellerEmail: 'dummy@gmail.com', Location: 600, Type: 'Byzo', Pincode: '600', Count: '80', },
    { id: 6, name: 'Hlloe one', SellerEmail: 'dummy@gmail.com', Location: 700, Type: 'Bulk', Pincode: '0', Count: '80', },
    { id: 7, name: 'John Doe', SellerEmail: 'dummy@gmail.com', Location: 200, Type: 'Dark', Pincode: '200', Count: '80', },
    { id: 8, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 300, Type: 'Byzo', Pincode: '300', Count: '80', },
    { id: 9, name: 'owfuhhwo', SellerEmail: 'dummy@gmail.com', Location: 400, Type: 'Cloud', Pincode: '400', Count: '80', },
    { id: 10, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 500, Type: 'Byzo', Pincode: '0', Count: '80', },
    { id: 11, name: 'ewfewf', SellerEmail: 'dummy@gmail.com', Location: 600, Type: 'Dark', Pincode: '600', Count: '80', },
    { id: 12, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 700, Type: 'Cloud', Pincode: '700', Count: '80', },
    { id: 13, name: 'efwefwef', SellerEmail: 'dummy@gmail.com', Location: 200, Type: 'Byzo', Pincode: '200', Count: '80', },
    { id: 14, name: 'Ebi Ra', SellerEmail: 'dummy@gmail.com', Location: 300, Type: 'Byzo', Pincode: '0', Count: '80', }
];


export const columnsForEmployeeTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'PartnerEmail', label: 'Email' },
    { id: 'Count', label: 'Order Count' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'Location', label: 'Location' },
    { id: 'Rating', label: 'Rating' },
    { id: 'Action', label: 'Action' },
    // profit // turnover
];


export const EmployeeDummyData = [
    { id: 1, name: 'John Doe', PartnerEmail: 'dummy@gmail.com', Location: 200, Type: 'Admin', Pincode: '200', Count: '80', Rating: '5' },
    { id: 2, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 300, Type: 'Vendor', Pincode: '0', Count: '80', Rating: '5' },
    { id: 3, name: 'Raju', PartnerEmail: 'dummy@gmail.com', Location: 400, Type: 'Global', Pincode: '400', Count: '80', Rating: '5' },
    { id: 4, name: 'Shiju', PartnerEmail: 'dummy@gmail.com', Location: 500, Type: 'Admin', Pincode: '500', Count: '80', Rating: '5' },
    { id: 5, name: 'Mani', PartnerEmail: 'dummy@gmail.com', Location: 600, Type: 'Vendor', Pincode: '600', Count: '80', Rating: '5' },
    { id: 6, name: 'Hlloe one', PartnerEmail: 'dummy@gmail.com', Location: 700, Type: 'Global', Pincode: '0', Count: '80', Rating: '5' },
    { id: 7, name: 'John Doe', PartnerEmail: 'dummy@gmail.com', Location: 200, Type: 'Admin', Pincode: '200', Count: '80', Rating: '5' },
    { id: 8, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 300, Type: 'Vendor', Pincode: '300', Count: '80', Rating: '5' },
    { id: 9, name: 'owfuhhwo', PartnerEmail: 'dummy@gmail.com', Location: 400, Type: 'Global', Pincode: '400', Count: '80', Rating: '5' },
    { id: 10, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 500, Type: 'Vendor', Pincode: '0', Count: '80', Rating: '5' },
    { id: 11, name: 'ewfewf', PartnerEmail: 'dummy@gmail.com', Location: 600, Type: 'Admin', Pincode: '600', Count: '80', Rating: '5' },
    { id: 12, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 700, Type: 'Global', Pincode: '700', Count: '80', Rating: '5' },
    { id: 13, name: 'efwefwef', PartnerEmail: 'dummy@gmail.com', Location: 200, Type: 'Vendor', Pincode: '200', Count: '80', Rating: '5' },
    { id: 14, name: 'Ebi Ra', PartnerEmail: 'dummy@gmail.com', Location: 300, Type: 'Admin', Pincode: '0', Count: '80', Rating: '5' }
];

export const columnsForCustomerTable = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'Phone', label: 'Phone' },
    { id: 'Count', label: 'Order Count' },
    { id: 'BulkCount', label: 'Bulk Count' },
    { id: 'Wallet', label: 'Wallet Worth' },
    { id: 'Pincode', label: 'Pincode' },
    { id: 'RefundCount', label: 'Refund count' },
    { id: 'Action', label: 'Action' },
];


export const CustomerDummyData = [
    { id: 1, name: 'John Doe', Phone: '8878578464', Count: 200, Wallet: '50', Pincode: '200', BulkCount: '80', RefundCount: '5' },
    { id: 2, name: 'Ebi Ra', Phone: '8878578464', Count: 300, Wallet: '100', Pincode: '0', BulkCount: '80', RefundCount: '5' },
    { id: 3, name: 'Raju', Phone: '8878578464', Count: 400, Wallet: '500', Pincode: '400', BulkCount: '80', RefundCount: '5' },
    { id: 4, name: 'Shiju', Phone: '8878578464', Count: 500, Wallet: '50', Pincode: '500', BulkCount: '80', RefundCount: '5' },
    { id: 5, name: 'Mani', Phone: '8878578464', Count: 600, Wallet: '100', Pincode: '600', BulkCount: '80', RefundCount: '5' },
    { id: 6, name: 'Hlloe one', Phone: '8878578464', Count: 700, Wallet: '500', Pincode: '0', BulkCount: '80', RefundCount: '5' },
    { id: 7, name: 'John Doe', Phone: '8878578464', Count: 200, Wallet: '50', Pincode: '200', BulkCount: '80', RefundCount: '5' },
    { id: 8, name: 'Ebi Ra', Phone: '8878578464', Count: 300, Wallet: '100', Pincode: '300', BulkCount: '80', RefundCount: '5' },
    { id: 9, name: 'owfuhhwo', Phone: '8878578464', Count: 400, Wallet: '500', Pincode: '400', BulkCount: '80', RefundCount: '5' },
    { id: 10, name: 'Ebi Ra', Phone: '8878578464', Count: 500, Wallet: '100', Pincode: '0', BulkCount: '80', RefundCount: '5' },
    { id: 11, name: 'ewfewf', Phone: '8878578464', Count: 600, Wallet: '50', Pincode: '600', BulkCount: '80', RefundCount: '5' },
    { id: 12, name: 'Ebi Ra', Phone: '8878578464', Count: 700, Wallet: '500', Pincode: '700', BulkCount: '80', RefundCount: '5' },
    { id: 13, name: 'efwefwef', Phone: '8878578464', Count: 200, Wallet: '100', Pincode: '200', BulkCount: '80', RefundCount: '5' },
    { id: 14, name: 'Ebi Ra', Phone: '8878578464', Count: 300, Wallet: '50', Pincode: '0', BulkCount: '80', RefundCount: '5' }
];


export const columnsForCouponTable = [
    { id: 'id', label: 'ID' },
    { id: 'Customername', label: 'Customer Name' },
    { id: 'Phone', label: 'Phone' },
    { id: 'CouponType', label: 'Coupon Type' },
    { id: 'CouponValue', label: 'Coupon Value' },
    { id: 'OrderValue', label: 'Order Value' },
    { id: 'PaymentMode', label: 'Payment Mode' },
    { id: 'Review', label: 'Review' },
];


export const CouponDummyData = [
    { id: 1, Customername: 'John Doe', Phone: '8878578464', CouponValue: 200, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'COD', Review: '4' },
    { id: 2, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 300, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'online', Review: '4' },
    { id: 3, Customername: 'Raju', Phone: '8878578464', CouponValue: 400, OrderValue: '500', CouponType: 'reached OL', PaymentMode: 'COD', Review: '4' },
    { id: 4, Customername: 'Shiju', Phone: '8878578464', CouponValue: 500, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'online', Review: '4' },
    { id: 5, Customername: 'Mani', Phone: '8878578464', CouponValue: 600, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'COD', Review: '4' },
    { id: 6, Customername: 'Hlloe one', Phone: '8878578464', CouponValue: 700, OrderValue: '500', CouponType: 'reached OL', PaymentMode: 'online', Review: '4' },
    { id: 7, Customername: 'John Doe', Phone: '8878578464', CouponValue: 200, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'COD', Review: '4' },
    { id: 8, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 300, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'online', Review: '4' },
    { id: 9, Customername: 'owfuhhwo', Phone: '8878578464', CouponValue: 400, OrderValue: '500', CouponType: 'monthly pack', PaymentMode: 'COD', Review: '4' },
    { id: 10, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 500, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'online', Review: '4' },
    { id: 11, Customername: 'ewfewf', Phone: '8878578464', CouponValue: 600, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'COD', Review: '4' },
    { id: 12, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 700, OrderValue: '500', CouponType: 'monthly pack', PaymentMode: 'online', Review: '4' },
    { id: 13, Customername: 'efwefwef', Phone: '8878578464', CouponValue: 200, OrderValue: '500', CouponType: 'First Buy', PaymentMode: 'COD', Review: '4' },
    { id: 14, Customername: 'Ebi Ra', Phone: '8878578464', CouponValue: 300, OrderValue: '500', CouponType: 'above 2500', PaymentMode: 'online', Review: '4' }
];

export const columnsForWalletsTable = [
    { id: 'id', label: 'ID' },
    { id: 'Customername', label: 'Customername Name' },
    { id: 'Phone', label: 'Phone' },
    { id: 'OrderCount', label: 'Order Count' },
    { id: 'OrderValue', label: 'Order Value' },
    { id: 'CashBackType', label: 'CashBack Type' },
    { id: 'Status', label: 'Status' }, // used not used

];


export const WalletDummyData = [
    { id: 1, Customername: 'John Doe', Phone: '8878578464', OrderCount: '89', OrderValue: 200, CashBackType: 'above 2500', Status: 'Used' },
    { id: 2, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '60', OrderValue: 300, CashBackType: 'First Buy', Status: 'not used' },
    { id: 3, Customername: 'Raju', Phone: '8878578464', OrderCount: '28', OrderValue: 400, CashBackType: 'reached OL', Status: 'Used' },
    { id: 4, Customername: 'Shiju', Phone: '8878578464', OrderCount: '11', OrderValue: 500, CashBackType: 'above 2500', Status: 'not used' },
    { id: 5, Customername: 'Mani', Phone: '8878578464', OrderCount: '22', OrderValue: 600, CashBackType: 'First Buy', Status: 'Used' },
    { id: 6, Customername: 'Hlloe one', Phone: '8878578464', OrderCount: '43', OrderValue: 700, CashBackType: 'reached OL', Status: 'not used' },
    { id: 7, Customername: 'John Doe', Phone: '8878578464', OrderCount: '62', OrderValue: 200, CashBackType: 'above 2500', Status: 'Used' },
    { id: 8, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '17', OrderValue: 300, CashBackType: 'First Buy', Status: 'not used' },
    { id: 9, Customername: 'owfuhhwo', Phone: '8878578464', OrderCount: '10', OrderValue: 400, CashBackType: 'monthly pack', Status: 'Used' },
    { id: 10, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '15', OrderValue: 500, CashBackType: 'First Buy', Status: 'not used' },
    { id: 11, Customername: 'ewfewf', Phone: '8878578464', OrderCount: '30', OrderValue: 600, CashBackType: 'above 2500', Status: 'Used' },
    { id: 12, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '20', OrderValue: 700, CashBackType: 'monthly pack', Status: 'not used' },
    { id: 13, Customername: 'efwefwef', Phone: '8878578464', OrderCount: '15', OrderValue: 200, CashBackType: 'First Buy', Status: 'Used' },
    { id: 14, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '10', OrderValue: 300, CashBackType: 'above 2500', Status: 'not used' }
];

export const columnsForRefundTable = [
    { id: 'id', label: 'ID' },
    { id: 'Customername', label: 'Customer Name' },
    { id: 'Phone', label: 'Phone' },
    { id: 'OrderCount', label: 'Order Count' },
    { id: 'OrderValue', label: 'Order Value' },
    { id: 'RefundAmount', label: 'Refund Amount' },
    { id: 'RefundProduct', label: 'Refund Product' },
    { id: 'WalletAmount', label: 'wallet Amount' },

];

export const RefundDummyData = [
    { id: 1, Customername: 'John Doe', Phone: '8878578464', OrderCount: '89', OrderValue: 200, RefundAmount: '100', RefundProduct: 'Product 1', WalletAmount: '120' },
    { id: 2, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '60', OrderValue: 300, RefundAmount: '200', RefundProduct: 'Product 2', WalletAmount: '200' },
    { id: 3, Customername: 'Raju', Phone: '8878578464', OrderCount: '28', OrderValue: 400, RefundAmount: '80', RefundProduct: 'Product 3', WalletAmount: '120' },
    { id: 4, Customername: 'Shiju', Phone: '8878578464', OrderCount: '11', OrderValue: 500, RefundAmount: '100', RefundProduct: 'Product 4', WalletAmount: '200' },
    { id: 5, Customername: 'Mani', Phone: '8878578464', OrderCount: '22', OrderValue: 600, RefundAmount: '200', RefundProduct: 'Product 5', WalletAmount: '120' },
    { id: 6, Customername: 'Hlloe one', Phone: '8878578464', OrderCount: '43', OrderValue: 700, RefundAmount: '80', RefundProduct: 'Product 6', WalletAmount: '200' },
    { id: 7, Customername: 'John Doe', Phone: '8878578464', OrderCount: '62', OrderValue: 200, RefundAmount: '100', RefundProduct: 'All', WalletAmount: '120' },
    { id: 8, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '17', OrderValue: 300, RefundAmount: '200', RefundProduct: 'Product 2', WalletAmount: '200' },
    { id: 9, Customername: 'owfuhhwo', Phone: '8878578464', OrderCount: '10', OrderValue: 400, RefundAmount: '120', RefundProduct: 'Product 1', WalletAmount: '120' },
    { id: 10, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '15', OrderValue: 500, RefundAmount: '200', RefundProduct: 'Product 1', WalletAmount: '200' },
    { id: 11, Customername: 'ewfewf', Phone: '8878578464', OrderCount: '30', OrderValue: 600, RefundAmount: '100', RefundProduct: 'Product 1', WalletAmount: '120' },
    { id: 12, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '20', OrderValue: 700, RefundAmount: '120', RefundProduct: 'Product 1', WalletAmount: '200' },
    { id: 13, Customername: 'efwefwef', Phone: '8878578464', OrderCount: '15', OrderValue: 200, RefundAmount: '200', RefundProduct: 'Product 1', WalletAmount: '120' },
    { id: 14, Customername: 'Ebi Ra', Phone: '8878578464', OrderCount: '10', OrderValue: 300, RefundAmount: '100', RefundProduct: 'Product 1', WalletAmount: '200' }
];

export const columnsForRevertRefundTable = [
    { id: 'id', label: 'ID' },
    { id: 'id', label: 'Order ID' },
    { id: 'customername', label: 'Customer N' },
    { id: 'customerNumber', label: 'Customer M' },
    { id: 'AdminName', label: 'Admin N' },
    { id: 'VendorName', label: 'Vendor N' },
    { id: 'CustomerOrderCount', label: "Order C" },
    { id: 'RefundCount', label: "Refund C" },
    { id: 'products', label: 'Products' },
    { id: 'status', label: "Accept/Reject" },
];



export const dummyDataForRevertRefund = [
    { id: 1, OrderID: '10', customername: 'Hane Doe', customerNumber: '8775787855', VendorName: "Vijay", AdminName: 'Jay', CustomerOrderCount: '500', RefundCount: '10', status: 'pending' },
    { id: 2, OrderID: '10', customername: 'Ebi Ra', customerNumber: '8775787855', VendorName: "Heman", AdminName: 'Vijay', CustomerOrderCount: '500', RefundCount: '10', status: 'pending' },
    { id: 3, OrderID: '10', customername: 'Jane Doe', customerNumber: '8775787855', VendorName: "Ramesh", AdminName: 'Ajay', CustomerOrderCount: '700', RefundCount: '10', status: 'pending' },
    { id: 4, OrderID: '10', customername: 'John Smith', customerNumber: '8775787855', VendorName: "Srinithi", AdminName: 'Raju', CustomerOrderCount: '800', RefundCount: '10', status: 'pending' },
    { id: 5, OrderID: '10', customername: 'Alice Johnson', customerNumber: '8775787855', VendorName: "Samuthuya", AdminName: 'Moses', CustomerOrderCount: '900', RefundCount: '10', status: 'pending' },
    { id: 6, OrderID: '10', customername: 'Jane Doe', customerNumber: '8775787855', VendorName: "Naveen", AdminName: 'Tomy', CustomerOrderCount: '700', RefundCount: '10', status: 'pending' },
    { id: 7, OrderID: '10', customername: 'John Smith', customerNumber: '8775787855', VendorName: "Dinesh", AdminName: 'Riju', CustomerOrderCount: '800', RefundCount: '10', status: 'pending' },
];


export const columnsForPayoutTable = [
    { id: 'id', label: 'ID' },
    { id: 'Requester', label: 'Requested By' },
    { id: 'RequesterName', label: 'Requested Name' },
    { id: 'Upi', label: 'UPI' },
    { id: 'RequestedPay', label: 'Requested Pay' },
    { id: 'WalletBalance', label: 'Wallet Balance' },
    { id: 'Rating', label: 'Rating' },
    { id: 'status', label: "Accept/Reject" },
];



export const dummyDataForPayout = [
    { id: 11, OrderID: '10', Requester: 'Vendor', RequesterName: 'Hane Doe', Upi: '8775787855', RequestedPay: "2500", WalletBalance: '5000', Rating: '4', status: 'pending' },
    { id: 12, OrderID: '10', Requester: 'Seller', RequesterName: 'Ebi Ra', Upi: '8775787855', RequestedPay: "800", WalletBalance: '5000', Rating: '4', status: 'pending' },
    { id: 13, OrderID: '10', Requester: 'Admin', RequesterName: 'Jane Doe', Upi: '8775787855', RequestedPay: "1000", WalletBalance: '7000', Rating: '4', status: 'pending' },
    { id: 14, OrderID: '10', Requester: 'Partner', RequesterName: 'John Smith', Upi: '8775787855', RequestedPay: "1200", WalletBalance: '8000', Rating: '4', status: 'pending' },
    { id: 15, OrderID: '10', Requester: 'Vendor', RequesterName: 'Alice Johnson', Upi: '8775787855', RequestedPay: "10000", WalletBalance: '9000', Rating: '4', status: 'pending' },
    { id: 16, OrderID: '10', Requester: 'Seller', RequesterName: 'Jane Doe', Upi: '8775787855', RequestedPay: "500", WalletBalance: '7000', Rating: '4', status: 'pending' },
    { id: 17, OrderID: '10', Requester: 'Partner', RequesterName: 'John Smith', Upi: '8775787855', RequestedPay: "1600", WalletBalance: '8000', Rating: '4', status: 'pending' },
];


export const columnsForShutDown = [
    { id: 'id', label: 'ID' },
    { id: 'Requester', label: 'Requested By' },
    { id: 'RequesterName', label: 'Requested Name' },
    { id: 'Date', label: 'Date' },
    { id: 'Reson', label: 'Reson' },
    { id: 'TotalRequestCount', label: 'TotalRequestCount' },
    { id: 'status', label: "Accept/Reject" },
];

export const dummyDataForShutDown = [
    { id: 21, Requester: 'Vendor', RequesterName: 'Hane Doe', Date: '8775787855', Reson: "2500", TotalRequestCount: '5000', status: 'pending' },
    { id: 22, Requester: 'Admin', RequesterName: 'Ebi Ra', Date: '8775787855', Reson: "800", TotalRequestCount: '5000', status: 'pending' },
    { id: 23, Requester: 'Admin', RequesterName: 'Jane Doe', Date: '8775787855', Reson: "1000", TotalRequestCount: '7000', status: 'pending' },
    { id: 24, Requester: 'Vendor', RequesterName: 'John Smith', Date: '8775787855', Reson: "1200", TotalRequestCount: '8000', status: 'pending' },
    { id: 25, Requester: 'Vendor', RequesterName: 'Alice Johnson', Date: '8775787855', Reson: "10000", TotalRequestCount: '9000', status: 'pending' },
    { id: 26, Requester: 'Admin', RequesterName: 'Jane Doe', Date: '8775787855', Reson: "500", TotalRequestCount: '7000', status: 'pending' },
    { id: 27, Requester: 'Vendor', RequesterName: 'John Smith', Date: '8775787855', Reson: "1600", TotalRequestCount: '8000', status: 'pending' },
];

export const columnsForTransferHistory = [
    { id: 'id', label: 'ID' },
    { id: 'TransferDate', label: 'Transfered Date' },
    { id: 'TransferTime', label: 'Transfered Time' },
    { id: 'TransferTo', label: 'Transfered To' },
    { id: 'ShopName', label: 'Shop Name ' },
    { id: 'MoblineNo', label: 'Mobline No ' },
    { id: 'pincode', label: 'pincode' },
    { id: 'products', label: 'Products' },
    { id: 'TransfterStatus', label: "Transfter Status" },
];

export const dummyDataForTransferHistory = [
    { id: 1, TransferDate: 'Hane Doe', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Jay', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
    { id: 2, TransferDate: 'Ebi Ra', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Vijay', MoblineNo: '82768796987', pincode: "false", TransfterStatus: 'pending' },
    { id: 3, TransferDate: 'Jane Doe', TransferTime: '8775787855', ShopName: "false", TransferTo: 'Ajay', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
    { id: 4, TransferDate: 'John Smith', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Raju', MoblineNo: '82768796987', pincode: "false", TransfterStatus: 'pending' },
    { id: 5, TransferDate: 'Alice Johnson', TransferTime: '8775787855', ShopName: "false", TransferTo: 'Moses', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
    { id: 6, TransferDate: 'Jane Doe', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Tomy', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
    { id: 7, TransferDate: 'John Smith', TransferTime: '8775787855', ShopName: "true", TransferTo: 'Riju', MoblineNo: '82768796987', pincode: "true", TransfterStatus: 'pending' },
];


export const columnsForDrivers = [
    { id: 'name', label: 'Driver Name' },
    { id: 'vehicleType', label: 'Vehicle Type' },
    { id: 'city', label: 'City' },
    { id: 'mobileNumber', label: 'Mobile No' },
    { id: 'photo', label: 'Photo' },
    { id: 'aadharCard', label: 'Aadhar Card' },
    { id: 'license', label: 'License' },
    { id: 'edit', label: 'Edit' },
    { id: 'delete', label: 'Delete' },
];

export const dataForDrivers = [{
    "id": 1,
    "name": "Stavros Gavahan",
    "vehicleType": "BUS",
    "city": "Wakduwa’ Barat",
    "mobileNumber": "793 792 2560"
}, {
    "id": 2,
    "name": "Floria Phizackarley",
    "vehicleType": "BUS",
    "city": "Curridabat",
    "mobileNumber": "700 916 0755"
}, {
    "id": 3,
    "name": "Rhett Fleischer",
    "vehicleType": "ALL",
    "city": "Minggang",
    "mobileNumber": "849 110 3147"
}, {
    "id": 4,
    "name": "Wilbur Sparkwell",
    "vehicleType": "TRUCK",
    "city": "Andradas",
    "mobileNumber": "856 441 1965"
}, {
    "id": 5,
    "name": "Kleon Pratchett",
    "vehicleType": "ALL",
    "city": "Ligang",
    "mobileNumber": "639 228 9276"
}, {
    "id": 6,
    "name": "Thia Dallison",
    "vehicleType": "BUS",
    "city": "Dadian",
    "mobileNumber": "380 535 4537"
}, {
    "id": 7,
    "name": "Brandice Jodrelle",
    "vehicleType": "TRUCK",
    "city": "Tawangsari",
    "mobileNumber": "225 890 6177"
}, {
    "id": 8,
    "name": "Duffie MacSharry",
    "vehicleType": "TRUCK",
    "city": "Panadtaban",
    "mobileNumber": "956 965 9948"
}, {
    "id": 9,
    "name": "Kendrick Lantaff",
    "vehicleType": "ALL",
    "city": "Likwatang Timur",
    "mobileNumber": "541 217 5065"
}, {
    "id": 10,
    "name": "Lela Cook",
    "vehicleType": "CAR",
    "city": "Fanrong",
    "mobileNumber": "928 921 2426"
}, {
    "id": 11,
    "name": "Mollie Harner",
    "vehicleType": "ALL",
    "city": "Malaya Dubna",
    "mobileNumber": "191 135 9955"
}, {
    "id": 12,
    "name": "Leena Restill",
    "vehicleType": "BUS",
    "city": "Jajce",
    "mobileNumber": "378 521 2118"
}, {
    "id": 13,
    "name": "Pieter Tomasz",
    "vehicleType": "TRUCK",
    "city": "Phayuha Khiri",
    "mobileNumber": "570 391 6959"
}, {
    "id": 14,
    "name": "Josias Chern",
    "vehicleType": "TRUCK",
    "city": "Huanggexi",
    "mobileNumber": "113 644 0878"
}, {
    "id": 15,
    "name": "Alister Ring",
    "vehicleType": "ALL",
    "city": "Bergen",
    "mobileNumber": "674 305 6687"
}, {
    "id": 16,
    "name": "Raddy Pideon",
    "vehicleType": "CAR",
    "city": "Haihui",
    "mobileNumber": "332 774 3451"
}, {
    "id": 17,
    "name": "Todd Tribell",
    "vehicleType": "ALL",
    "city": "Liuzikou",
    "mobileNumber": "936 295 6276"
}, {
    "id": 18,
    "name": "Reyna Ridings",
    "vehicleType": "ALL",
    "city": "Šuto Orizare",
    "mobileNumber": "879 622 6167"
}, {
    "id": 19,
    "name": "Nevile Roblett",
    "vehicleType": "BUS",
    "city": "Xiyuan",
    "mobileNumber": "739 434 6741"
}, {
    "id": 20,
    "name": "Bibbie Mainwaring",
    "vehicleType": "BUS",
    "city": "Kista",
    "mobileNumber": "398 189 9676"
}, {
    "id": 21,
    "name": "Vlad Simms",
    "vehicleType": "TRUCK",
    "city": "Atawutung",
    "mobileNumber": "935 806 1355"
}, {
    "id": 22,
    "name": "Nadia Hillum",
    "vehicleType": "TRUCK",
    "city": "Haapsalu",
    "mobileNumber": "202 933 4910"
}, {
    "id": 23,
    "name": "Zeke Theriot",
    "vehicleType": "TRUCK",
    "city": "Nanggorak",
    "mobileNumber": "355 242 6152"
}, {
    "id": 24,
    "name": "Tomlin Tabbernor",
    "vehicleType": "ALL",
    "city": "Naples",
    "mobileNumber": "941 619 1732"
}, {
    "id": 25,
    "name": "Georgeta Zamboniari",
    "vehicleType": "TRUCK",
    "city": "Conceição das Alagoas",
    "mobileNumber": "635 481 8788"
}, {
    "id": 26,
    "name": "Deeyn Godley",
    "vehicleType": "CAR",
    "city": "Subkowy",
    "mobileNumber": "445 227 9864"
}, {
    "id": 27,
    "name": "Wilmar Purcell",
    "vehicleType": "ALL",
    "city": "Chornorudka",
    "mobileNumber": "208 829 8096"
}, {
    "id": 28,
    "name": "Hermie Hacquel",
    "vehicleType": "CAR",
    "city": "El Soberbio",
    "mobileNumber": "517 419 8617"
}, {
    "id": 29,
    "name": "Nadia Trasler",
    "vehicleType": "CAR",
    "city": "Almelo",
    "mobileNumber": "787 338 9150"
}, {
    "id": 30,
    "name": "Larisa Winear",
    "vehicleType": "BUS",
    "city": "Zhangjiawo",
    "mobileNumber": "748 956 0121"
}];

export const columnsForCleaners = [
    { id: 'name', label: 'Cleaner Name' },
    { id: 'mobileNumber', label: 'Mobile No' },
    { id: 'state', label: 'State' },
    { id: 'city', label: 'City' },
    { id: "aadharCard", label: "Aadhar Card" },
    { id: "photo", label: "Cleaner Photo" },
];

export const dataForCleaners = [{
    "name": "Lexy Filipputti",
    "mobileNumber": "670-171-5592",
    "state": "British Columbia",
    "city": "Pemberton",
    "aadharCard": "http://dummyimage.com/156x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/210x100.png/dddddd/000000"
}, {
    "name": "Christos Limerick",
    "mobileNumber": "723-463-4271",
    "state": "Chihuahua",
    "city": "Tierra y Libertad",
    "aadharCard": "http://dummyimage.com/241x100.png/ff4444/ffffff",
    "photo": "http://dummyimage.com/232x100.png/ff4444/ffffff"
}, {
    "name": "Donn Dreakin",
    "mobileNumber": "749-690-1547",
    "state": "British Columbia",
    "city": "Bowen Island",
    "aadharCard": "http://dummyimage.com/126x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/158x100.png/cc0000/ffffff"
}, {
    "name": "Artemas Gazzard",
    "mobileNumber": "585-673-2266",
    "state": "Chihuahua",
    "city": "Hidalgo",
    "aadharCard": "http://dummyimage.com/239x100.png/cc0000/ffffff",
    "photo": "http://dummyimage.com/211x100.png/cc0000/ffffff"
}, {
    "name": "Pearce Denkel",
    "mobileNumber": "386-747-2735",
    "state": "Guadeloupe",
    "city": "Les Abymes",
    "aadharCard": "http://dummyimage.com/225x100.png/cc0000/ffffff",
    "photo": "http://dummyimage.com/127x100.png/ff4444/ffffff"
}, {
    "name": "Emerson Compton",
    "mobileNumber": "917-673-0060",
    "state": "British Columbia",
    "city": "Kitimat",
    "aadharCard": "http://dummyimage.com/150x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/190x100.png/5fa2dd/ffffff"
}, {
    "name": "Emmey Stower",
    "mobileNumber": "687-344-4814",
    "state": "British Columbia",
    "city": "Chilliwack",
    "aadharCard": "http://dummyimage.com/209x100.png/cc0000/ffffff",
    "photo": "http://dummyimage.com/111x100.png/ff4444/ffffff"
}, {
    "name": "Rosa Cherrison",
    "mobileNumber": "542-644-9328",
    "state": "Chihuahua",
    "city": "Emiliano Zapata",
    "aadharCard": "http://dummyimage.com/108x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/127x100.png/ff4444/ffffff"
}, {
    "name": "Rouvin Loffhead",
    "mobileNumber": "699-719-6945",
    "state": "Guadeloupe",
    "city": "Jarry",
    "aadharCard": "http://dummyimage.com/227x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/119x100.png/dddddd/000000"
}, {
    "name": "Marillin Salomon",
    "mobileNumber": "269-413-1872",
    "state": "Chihuahua",
    "city": "Magisterial",
    "aadharCard": "http://dummyimage.com/153x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/207x100.png/dddddd/000000"
}, {
    "name": "Pammie Lempertz",
    "mobileNumber": "986-314-4266",
    "state": "Chihuahua",
    "city": "Guadalupe",
    "aadharCard": "http://dummyimage.com/158x100.png/cc0000/ffffff",
    "photo": "http://dummyimage.com/229x100.png/ff4444/ffffff"
}, {
    "name": "Marve Tremble",
    "mobileNumber": "404-477-5293",
    "state": "Georgia",
    "city": "Cumming",
    "aadharCard": "http://dummyimage.com/241x100.png/cc0000/ffffff",
    "photo": "http://dummyimage.com/144x100.png/5fa2dd/ffffff"
}, {
    "name": "Inge Brassill",
    "mobileNumber": "351-616-7376",
    "state": "British Columbia",
    "city": "Abbotsford",
    "aadharCard": "http://dummyimage.com/206x100.png/ff4444/ffffff",
    "photo": "http://dummyimage.com/130x100.png/5fa2dd/ffffff"
}, {
    "name": "Gunilla Taillant",
    "mobileNumber": "404-294-8100",
    "state": "Georgia",
    "city": "Lawrenceville",
    "aadharCard": "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
    "photo": "http://dummyimage.com/176x100.png/5fa2dd/ffffff"
}, {
    "name": "Ewell Emmanuele",
    "mobileNumber": "916-598-0263",
    "state": "British Columbia",
    "city": "Logan Lake",
    "aadharCard": "http://dummyimage.com/142x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/162x100.png/ff4444/ffffff"
}]

export const columnsForEmployees = [
    { id: 'name', label: 'Employee Name' },
    { id: 'mobileNumber', label: 'Mobile No' },
    { id: 'state', label: 'State' },
    { id: 'employeeType', label: 'Employee Type' },
    { id: "aadharCard", label: "Aadhar Card" },
    { id: "photo", label: "Employee Photo" },
    { id: "edit", label: "Edit" },
    { id: "delete", label: "Delete" },
]

export const dataForEmployees = [{
    "name": "Sayres Larmet",
    "mobileNumber": "106-716-4432",
    "state": "British Columbia",
    "employeeType": "MANAGER",
    "aadharCard": "http://dummyimage.com/225x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/146x100.png/dddddd/000000"
}, {
    "name": "Ted Brice",
    "mobileNumber": "968-567-4570",
    "state": "Guadeloupe",
    "employeeType": "MANAGER",
    "aadharCard": "http://dummyimage.com/176x100.png/cc0000/ffffff",
    "photo": "http://dummyimage.com/217x100.png/dddddd/000000"
}, {
    "name": "Maurise Janus",
    "mobileNumber": "202-943-9454",
    "state": "Abruzzi",
    "employeeType": "TELECALLER",
    "aadharCard": "http://dummyimage.com/138x100.png/5fa2dd/ffffff",
    "photo": "http://dummyimage.com/186x100.png/ff4444/ffffff"
}, {
    "name": "Rosco Ollerhad",
    "mobileNumber": "850-321-4030",
    "state": "British Columbia",
    "employeeType": "ACCOUNTANT",
    "aadharCard": "http://dummyimage.com/239x100.png/5fa2dd/ffffff",
    "photo": "http://dummyimage.com/244x100.png/ff4444/ffffff"
}, {
    "name": "Grantham Glazebrook",
    "mobileNumber": "739-524-3569",
    "state": "Chihuahua",
    "employeeType": "TELECALLER",
    "aadharCard": "http://dummyimage.com/130x100.png/ff4444/ffffff",
    "photo": "http://dummyimage.com/174x100.png/5fa2dd/ffffff"
}, {
    "name": "Georgetta Woodings",
    "mobileNumber": "514-656-4455",
    "state": "Chihuahua",
    "employeeType": "OFFICE-BOY",
    "aadharCard": "http://dummyimage.com/216x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/158x100.png/cc0000/ffffff"
}, {
    "name": "Della Hawton",
    "mobileNumber": "839-826-9843",
    "state": "Guadeloupe",
    "employeeType": "ACCOUNTANT",
    "aadharCard": "http://dummyimage.com/228x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/155x100.png/ff4444/ffffff"
}, {
    "name": "Noni McSwan",
    "mobileNumber": "309-690-0435",
    "state": "British Columbia",
    "employeeType": "MANAGER",
    "aadharCard": "http://dummyimage.com/114x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/124x100.png/ff4444/ffffff"
}, {
    "name": "Doy Brideoke",
    "mobileNumber": "850-382-7405",
    "state": "British Columbia",
    "employeeType": "ACCOUNTANT",
    "aadharCard": "http://dummyimage.com/211x100.png/ff4444/ffffff",
    "photo": "http://dummyimage.com/222x100.png/ff4444/ffffff"
}, {
    "name": "Fernanda Trevear",
    "mobileNumber": "706-237-3469",
    "state": "Georgia",
    "employeeType": "ACCOUNTANT",
    "aadharCard": "http://dummyimage.com/118x100.png/cc0000/ffffff",
    "photo": "http://dummyimage.com/217x100.png/cc0000/ffffff"
}, {
    "name": "Guillema Lodden",
    "mobileNumber": "770-911-9597",
    "state": "Georgia",
    "employeeType": "TELECALLER",
    "aadharCard": "http://dummyimage.com/139x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/123x100.png/5fa2dd/ffffff"
}, {
    "name": "Thomasine Ricciardi",
    "mobileNumber": "587-397-3337",
    "state": "British Columbia",
    "employeeType": "TELECALLER",
    "aadharCard": "http://dummyimage.com/107x100.png/5fa2dd/ffffff",
    "photo": "http://dummyimage.com/201x100.png/dddddd/000000"
}, {
    "name": "Jeralee Harrowing",
    "mobileNumber": "715-642-0992",
    "state": "British Columbia",
    "employeeType": "CLEANER",
    "aadharCard": "http://dummyimage.com/250x100.png/dddddd/000000",
    "photo": "http://dummyimage.com/180x100.png/ff4444/ffffff"
}, {
    "name": "Linette Ladell",
    "mobileNumber": "750-806-1579",
    "state": "Chihuahua",
    "employeeType": "CLEANER",
    "aadharCard": "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
    "photo": "http://dummyimage.com/118x100.png/cc0000/ffffff"
}, {
    "name": "Alfie Hartshorn",
    "mobileNumber": "134-108-9529",
    "state": "British Columbia",
    "employeeType": "OFFICE-BOY",
    "aadharCard": "http://dummyimage.com/234x100.png/cc0000/ffffff",
    "photo": "http://dummyimage.com/138x100.png/ff4444/ffffff"
}]

export const columnsForTechnicians = [
    { id: 'name', label: 'Technician Name' },
    { id: 'mobileNumber', label: 'Mobile No' },
    { id: 'alternateNumber', label: 'Alternate Number' },
    { id: 'technicianType', label: 'Technician Type' },
    { id: "vehicleType", label: "Vehicle Type" },
    { id: "state", label: "State" },
    { id: "city", label: "City" },
    { id: "delete", label: "Delete" },
    { id: "edit", label: "Edit" },
]

export const dataForTechnicians = [{
    "name": "Imojean Kingaby",
    "mobileNumber": "508-690-9082",
    "alternateNumber": "283-793-6998",
    "technicianType": "ELECTICIAN",
    "vehicleType": "BUS"
}, {
    "name": "Gert Matiasek",
    "mobileNumber": "718-181-6150",
    "alternateNumber": "214-195-8398",
    "technicianType": "ELECTICIAN",
    "vehicleType": "TRUCK"
}, {
    "name": "Tobiah Elgar",
    "mobileNumber": "907-850-1820",
    "alternateNumber": "633-927-3263",
    "technicianType": "BATTERYSERVICES",
    "vehicleType": "BUS"
}, {
    "name": "Dallon Stott",
    "mobileNumber": "147-456-9520",
    "alternateNumber": "407-183-6980",
    "technicianType": "VEHICLEBODYREPAIR",
    "vehicleType": "CAR"
}, {
    "name": "Rafaela Lenthall",
    "mobileNumber": "418-636-5108",
    "alternateNumber": "210-359-3025",
    "technicianType": "BATTERYSERVICES",
    "vehicleType": "TRUCK"
}, {
    "name": "Hamilton Bronot",
    "mobileNumber": "782-786-7653",
    "alternateNumber": "861-997-6589",
    "technicianType": "SPAREPARTSHOP",
    "vehicleType": "CAR"
}, {
    "name": "Prudy Cheese",
    "mobileNumber": "640-276-9968",
    "alternateNumber": "514-730-1530",
    "technicianType": "VEHICLEBODYREPAIR",
    "vehicleType": "ALL"
}, {
    "name": "Talia Chainey",
    "mobileNumber": "181-589-8314",
    "alternateNumber": "344-262-1686",
    "technicianType": "VEHICLEBODYREPAIR",
    "vehicleType": "CAR"
}, {
    "name": "Avril Firk",
    "mobileNumber": "356-742-0615",
    "alternateNumber": "138-724-9882",
    "technicianType": "ELECTICIAN",
    "vehicleType": "CAR"
}, {
    "name": "Bevon Cricket",
    "mobileNumber": "756-954-6468",
    "alternateNumber": "859-208-6855",
    "technicianType": "VEHICLEBODYREPAIR",
    "vehicleType": "BUS"
}, {
    "name": "Dell Trownson",
    "mobileNumber": "861-227-6231",
    "alternateNumber": "278-163-9031",
    "technicianType": "SPAREPARTSHOP",
    "vehicleType": "TRUCK"
}, {
    "name": "Rolf Clementi",
    "mobileNumber": "722-754-8548",
    "alternateNumber": "920-238-7924",
    "technicianType": "ELECTICIAN",
    "vehicleType": "BUS"
}, {
    "name": "Meghann Charlson",
    "mobileNumber": "914-699-0786",
    "alternateNumber": "304-880-4469",
    "technicianType": "BATTERYSERVICES",
    "vehicleType": "CAR"
}, {
    "name": "Eartha Franken",
    "mobileNumber": "852-221-6728",
    "alternateNumber": "373-479-0710",
    "technicianType": "MECHANIC",
    "vehicleType": "CAR"
}, {
    "name": "Joscelin Cosely",
    "mobileNumber": "524-434-4466",
    "alternateNumber": "366-239-0137",
    "technicianType": "MECHANIC",
    "vehicleType": "CAR"
}]

export const columnsForVehicles = [
    { id: 'number', label: 'Number' },
    { id: 'seatingCapacity', label: 'Seating Capacity' },
    { id: 'model', label: 'Model' },
    { id: 'bodyType', label: 'Body' },
    { id: 'contactNumber', label: 'Contact' },
    { id: 'location', label: 'Location' },
    { id: "type", label: "Type" },
    { id: "isForRent", label: "For Rent" },
    { id: "isForSell", label: "For Sell" },
    { id: "photos", label: "Photos" },
]

export const dataForVehicles = [{
    "number": "5GAKVCKD6FJ821832",
    "seatingCapacity": "69-686-0106",
    "model": 2010,
    "bodyName": "Maserati",
    "chassIsBrand": "car",
    "location": "Apt 1512",
    "contactNumber": "333-724-4212",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": true,
    "isForSell": true,
    "type": "TRUCK"
}, {
    "number": "1D7CE5GK7AS309236",
    "seatingCapacity": "24-965-0188",
    "model": 2006,
    "bodyName": "Toyota",
    "chassIsBrand": "car",
    "location": "Room 428",
    "contactNumber": "527-839-7527",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": false,
    "isForSell": false,
    "type": "TAMPO"
}, {
    "number": "1N6AF0KX6FN288824",
    "seatingCapacity": "71-469-2728",
    "model": 1991,
    "bodyName": "Buick",
    "chassIsBrand": "car",
    "location": "Suite 62",
    "contactNumber": "619-417-2763",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": true,
    "isForSell": true,
    "type": "TAMPO"
}, {
    "number": "5UXFG43588L945131",
    "seatingCapacity": "63-661-8540",
    "model": 2001,
    "bodyName": "Honda",
    "chassIsBrand": "car",
    "location": "PO Box 44629",
    "contactNumber": "304-118-4389",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": false,
    "isForSell": false,
    "type": "CAR"
}, {
    "number": "WAUEH78E96A247623",
    "seatingCapacity": "80-150-9004",
    "model": 2002,
    "bodyName": "GMC",
    "chassIsBrand": "car",
    "location": "19th Floor",
    "contactNumber": "529-183-5047",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": true,
    "isForSell": false,
    "type": "TAMPO"
}, {
    "number": "3GYEK62N94G898444",
    "seatingCapacity": "05-749-6091",
    "model": 1997,
    "bodyName": "Chrysler",
    "chassIsBrand": "car",
    "location": "Suite 10",
    "contactNumber": "115-770-5195",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": true,
    "isForSell": true,
    "type": "CAR"
}, {
    "number": "WAUHE98P29A614918",
    "seatingCapacity": "62-864-9997",
    "model": 2009,
    "bodyName": "Ford",
    "chassIsBrand": "car",
    "location": "Suite 96",
    "contactNumber": "986-254-1038",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": true,
    "isForSell": true,
    "type": "TAMPO"
}, {
    "number": "SCFHDDBT7EG716626",
    "seatingCapacity": "88-180-3639",
    "model": 2002,
    "bodyName": "Dodge",
    "chassIsBrand": "car",
    "location": "PO Box 20266",
    "contactNumber": "650-887-1042",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": true,
    "isForSell": true,
    "type": "CAR"
}, {
    "number": "1G6DP1E34C0333413",
    "seatingCapacity": "36-402-8616",
    "model": 1986,
    "bodyName": "Suzuki",
    "chassIsBrand": "car",
    "location": "Suite 36",
    "contactNumber": "170-835-3372",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": false,
    "isForSell": false,
    "type": "TRUCK"
}, {
    "number": "3C63D3HL8CG059788",
    "seatingCapacity": "30-662-5277",
    "model": 1999,
    "bodyName": "Jeep",
    "chassIsBrand": "car",
    "location": "14th Floor",
    "contactNumber": "110-370-3132",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": true,
    "isForSell": false,
    "type": "BUS"
}, {
    "number": "WAUKF78EX6A688461",
    "seatingCapacity": "25-744-5196",
    "model": 1994,
    "bodyName": "Oldsmobile",
    "chassIsBrand": "car",
    "location": "Room 1537",
    "contactNumber": "576-810-6902",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": true,
    "isForSell": true,
    "type": "TRUCK"
}, {
    "number": "WAUK2AFD8FN276440",
    "seatingCapacity": "86-793-3945",
    "model": 2008,
    "bodyName": "Infiniti",
    "chassIsBrand": "car",
    "location": "Apt 1823",
    "contactNumber": "883-441-6545",
    "photos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
    "isForRent": false,
    "isForSell": true,
    "type": "TAMPO"
}]

export const columnsForRentVehicles = [
    { id: 'number', label: 'Number' },
    { id: 'seatingCapacity', label: 'Seating Capacity' },
    { id: 'model', label: 'Model' },
    { id: 'bodyType', label: 'Body' },
    { id: 'contactNumber', label: 'Contact' },
    { id: 'location', label: 'Location' },
    { id: "type", label: "Type" },
    { id: "photos", label: "Photos" },
]

export const dataForRentVehicles = dataForVehicles
.filter(vehicle => vehicle.isForRent === true)
.map(({ isForRent, isForSell, ...rest }) => rest);

export const columnsForSellVehicles = [
    { id: 'number', label: 'Number' },
    { id: 'seatingCapacity', label: 'Seating Capacity' },
    { id: 'model', label: 'Model' },
    { id: 'bodyType', label: 'Body' },
    { id: 'contactNumber', label: 'Contact' },
    { id: 'location', label: 'Location' },
    { id: "type", label: "Type" },
    { id: "photos", label: "Photos" },
]

export const dataForSellVehicles = dataForVehicles
.filter(vehicle => vehicle.isForSell === true)
.map(({ isForRent, isForSell, ...rest }) => rest);


export const columnsForCreatedDailyRoutes = [
    { id: 'vehicle', fieldId : "number" , label: 'Vehicle Number' },
    { id: 'departurePlace', label: 'Departure Place' },
    { id: 'destinationPlace', label: 'Destination Place' },
    { id: 'departureTime', label: 'Departure Time' },
]

export const columnsForFinalizedDailyRoutes = [
    { id: 'vehicle', fieldId : "number" , label: 'Vehicle Number' },
    { id: 'departurePlace', label: 'Departure Place' },
    { id: 'destinationPlace', label: 'Destination Place' },
    { id: 'primaryDriver', fieldId : "name", label: 'Primary Driver' },
    { id: 'secondaryDriver', fieldId : "name", label: 'Secondary Driver' },
    { id: 'cleaner', fieldId : "name", label: 'Cleaner' },
    { id: 'departureTime', label: 'Departure Time' },
]

export const dataForDailyRoutes = [{
    "_id" : "1",
    "vehicle": dataForVehicles[0],
    "departurePlace": "Room 181",
    "destinationPlace": "PO Box 93739",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "6/3/2024",
    "instructions": "パーティーへ行かないか",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "2",
    "vehicle": dataForVehicles[0],
    "departurePlace": "7th Floor",
    "destinationPlace": "Apt 115",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "6/24/2023",
    "instructions": "-1E+02",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "3",
    "vehicle": dataForVehicles[0],
    "departurePlace": "PO Box 70104",
    "destinationPlace": "18th Floor",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "7/7/2023",
    "instructions": "␢",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "4",
    "vehicle": dataForVehicles[0],
    "departurePlace": "Room 1678",
    "destinationPlace": "Apt 1200",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "2/13/2024",
    "instructions": "../../../../../../../../../../../etc/passwd%00",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "5",
    "vehicle": dataForVehicles[0],
    "departurePlace": "PO Box 41069",
    "destinationPlace": "Room 948",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "4/1/2024",
    "instructions": "''",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "6",
   "vehicle": dataForVehicles[0],
    "departurePlace": "15th Floor",
    "destinationPlace": "Apt 1773",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "4/18/2024",
    "instructions": "-1E+02",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "7",
    "vehicle": dataForVehicles[0],
    "departurePlace": "PO Box 42597",
    "destinationPlace": "Suite 33",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "2/16/2024",
    "instructions": "사회과학원 어학연구소",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "8",
    "vehicle": dataForVehicles[0],
    "departurePlace": "PO Box 9801",
    "destinationPlace": "14th Floor",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "7/13/2023",
    "instructions": "ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ ",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "9",
    "vehicle": dataForVehicles[0],
    "departurePlace": "PO Box 2747",
    "destinationPlace": "9th Floor",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "1/11/2024",
    "instructions": "$1.00",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "10",
    "vehicle": dataForVehicles[0],
    "departurePlace": "PO Box 67585",
    "destinationPlace": "PO Box 82967",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "12/31/2023",
    "instructions": "パーティーへ行かないか",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "11",
    "vehicle": dataForVehicles[0],
    "departurePlace": "Room 1917",
    "destinationPlace": "Suite 57",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "11/8/2023",
    "instructions": "🚾 🆒 🆓 🆕 🆖 🆗 🆙 🏧",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }, {
    "_id" : "12",
    "vehicle": dataForVehicles[0],
    "departurePlace": "PO Box 17183",
    "destinationPlace": "Room 1563",
    "primaryDriver": dataForDrivers[0],
    "secondaryDriver": dataForDrivers[0],
    "cleaner": dataForCleaners[0],
    "departureTime": "11/1/2023",
    "instructions": "-$1.00",
        "beforeJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
        "afterJourneyPhotos": ["http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000", "http://dummyimage.com/156x100.png/dddddd/000000"],
  }]


  export const columnsForPackageBooking = [
    { id: 'vehicle', fieldId : "number" , label: 'Vehicle Number' },
    { id: 'customerName', label: 'Customer Name' },
    { id: 'mobileNumber', label: 'Mobile Number' },
    { id: 'alternateNumber', label: 'Alternate Number' },
    { id: 'advancePlace', label: 'Advance Place' },
    { id: 'departurePlace', label: 'Departure Place' },
    { id: 'destinationPlace', label: 'Destination Place' },
    { id: 'departureTime', label: 'Departure Time' },
    { id: 'tollInINR', label: 'Toll in INR' },
    { id: 'otherStateTaxInINR', label: 'State Taxes' },
    { id: 'returnTime', label: 'Return Time' },
    { id: 'kmStarting', label: 'KM Starting' },
    { id: 'perKmRateInINR', label: 'per KM rate in INR' },
    { id: 'advanceAmountInINR', label: 'Advance in INR' },
    { id: 'remainingAmountInINR', label: 'Remaining in INR' },
    { id: 'note', label: 'Note' },
    { id: 'instructions', label: 'Instructions' },

]

export const dataForPackageBooking = [{
    "vehicle": dataForVehicles[0],
    "customerName": "Constantino Copper",
    "mobileNumber": "828-987-0703",
    "alternateNumber": "628-835-4711",
    "advancePlace": "11th Floor",
    "departurePlace": "Room 1543",
    "destinationPlace": "PO Box 93321",
    "departureTime": "1/28/2024",
    "tollInINR": 67,
    "otherStateTaxInINR": 23,
    "returnTime": "10/22/2023",
    "kmStarting": "PO Box 23689",
    "perKmRateInINR": 100,
    "advanceAmountInINR": 6880,
    "remainingAmountInINR": 5234,
    "note": "̦Keep it up",
    "instructions": "1E+02"
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Thom Grills",
    "mobileNumber": "661-406-2180",
    "alternateNumber": "773-548-5765",
    "advancePlace": "20th Floor",
    "departurePlace": "Apt 1157",
    "destinationPlace": "Apt 1323",
    "departureTime": "5/21/2024",
    "tollInINR": 38,
    "otherStateTaxInINR": 30,
    "returnTime": "12/1/2023",
    "kmStarting": "Room 1685",
    "perKmRateInINR": 1,
    "advanceAmountInINR": 1371,
    "remainingAmountInINR": 4433,
    "note" : "Keep it going",
    "instructions": "''"
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Josephine Badcock",
    "mobileNumber": "106-665-0708",
    "alternateNumber": "885-328-5449",
    "advancePlace": "Suite 82",
    "departurePlace": "Apt 965",
    "destinationPlace": "Apt 74",
    "departureTime": "5/26/2024",
    "tollInINR": 53,
    "otherStateTaxInINR": 72,
    "returnTime": "7/29/2023",
    "kmStarting": "Apt 1073",
    "perKmRateInINR": 8,
    "advanceAmountInINR": 5325,
    "remainingAmountInINR": 7038,
    "note": "__ﾛ(,_,*)",
    "instructions": "\"\""
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Gilberta Martinet",
    "mobileNumber": "812-185-0629",
    "alternateNumber": "610-610-4056",
    "advancePlace": "PO Box 10230",
    "departurePlace": "Suite 42",
    "destinationPlace": "Apt 453",
    "departureTime": "2/19/2024",
    "tollInINR": 68,
    "otherStateTaxInINR": 96,
    "returnTime": "2/6/2024",
    "kmStarting": "Apt 457",
    "perKmRateInINR": 74,
    "advanceAmountInINR": 8070,
    "remainingAmountInINR": 268,
    "note": "᠎",
    "instructions": "ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ "
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Myrtia Eisenberg",
    "mobileNumber": "183-165-6016",
    "alternateNumber": "601-185-5599",
    "advancePlace": "Suite 65",
    "departurePlace": "Apt 37",
    "destinationPlace": "Suite 38",
    "departureTime": "3/21/2024",
    "tollInINR": 72,
    "otherStateTaxInINR": 33,
    "returnTime": "10/28/2023",
    "kmStarting": "Suite 68",
    "perKmRateInINR": 15,
    "advanceAmountInINR": 9398,
    "remainingAmountInINR": 5259,
    "note": "Ω≈ç√∫˜µ≤≥÷",
    "instructions": "__ﾛ(,_,*)"
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Haleigh Qualtro",
    "mobileNumber": "933-601-1574",
    "alternateNumber": "312-285-4090",
    "advancePlace": "Suite 14",
    "departurePlace": "PO Box 60882",
    "destinationPlace": "Apt 1063",
    "departureTime": "7/21/2023",
    "tollInINR": 24,
    "otherStateTaxInINR": 25,
    "returnTime": "9/8/2023",
    "kmStarting": "Room 1155",
    "perKmRateInINR": 52,
    "advanceAmountInINR": 9071,
    "remainingAmountInINR": 7260,
    "note": "パーティーへ行かないか",
    "instructions": "\"''''\"'\""
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Claretta Salmond",
    "mobileNumber": "228-755-9490",
    "alternateNumber": "413-511-4243",
    "advancePlace": "Room 1405",
    "departurePlace": "20th Floor",
    "destinationPlace": "PO Box 55343",
    "departureTime": "5/13/2024",
    "tollInINR": 86,
    "otherStateTaxInINR": 76,
    "returnTime": "12/8/2023",
    "kmStarting": "Apt 1747",
    "perKmRateInINR": 93,
    "advanceAmountInINR": 4192,
    "remainingAmountInINR": 8576,
    "note": "-1/2",
    "instructions": "・(￣∀￣)・:*:"
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Ibrahim Bensusan",
    "mobileNumber": "374-249-9643",
    "alternateNumber": "850-216-7346",
    "advancePlace": "PO Box 25883",
    "departurePlace": "Suite 73",
    "destinationPlace": "11th Floor",
    "departureTime": "12/13/2023",
    "tollInINR": 9,
    "otherStateTaxInINR": 13,
    "returnTime": "8/9/2023",
    "kmStarting": "Suite 68",
    "perKmRateInINR": 94,
    "advanceAmountInINR": 135,
    "remainingAmountInINR": 4961,
    "note": "1E2",
    "instructions": "👾 🙇 💁 🙅 🙆 🙋 🙎 🙍 "
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Orin Steade",
    "mobileNumber": "206-950-4032",
    "alternateNumber": "156-521-9015",
    "advancePlace": "PO Box 80268",
    "departurePlace": "16th Floor",
    "destinationPlace": "Apt 1363",
    "departureTime": "1/6/2024",
    "tollInINR": 58,
    "otherStateTaxInINR": 54,
    "returnTime": "7/3/2023",
    "kmStarting": "Apt 220",
    "perKmRateInINR": 36,
    "advanceAmountInINR": 2406,
    "remainingAmountInINR": 5604,
    "note": "NULL",
    "instructions": "1"
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Cordelia Lemme",
    "mobileNumber": "944-379-9765",
    "alternateNumber": "376-962-5237",
    "advancePlace": "PO Box 5075",
    "departurePlace": "Apt 1091",
    "destinationPlace": "16th Floor",
    "departureTime": "1/31/2024",
    "tollInINR": 87,
    "otherStateTaxInINR": 43,
    "returnTime": "5/14/2024",
    "kmStarting": "Apt 1658",
    "perKmRateInINR": 57,
    "advanceAmountInINR": 4244,
    "remainingAmountInINR": 5414,
    "note": "-1E02",
    "instructions": "-1/2"
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Shamus Beranek",
    "mobileNumber": "305-129-2583",
    "alternateNumber": "224-188-2956",
    "advancePlace": "Suite 67",
    "departurePlace": "Apt 827",
    "destinationPlace": "6th Floor",
    "departureTime": "10/18/2023",
    "tollInINR": 33,
    "otherStateTaxInINR": 23,
    "returnTime": "1/4/2024",
    "kmStarting": "Suite 66",
    "perKmRateInINR": 31,
    "advanceAmountInINR": 6099,
    "remainingAmountInINR": 4614,
    "note": "\"''''\"'\"",
    "instructions": " "
  }, {
    "vehicle": dataForVehicles[0],
    "customerName": "Isidore Longfut",
    "mobileNumber": "310-338-2326",
    "alternateNumber": "961-789-7246",
    "advancePlace": "Apt 233",
    "departurePlace": "Room 1724",
    "destinationPlace": "Apt 1184",
    "departureTime": "2/15/2024",
    "tollInINR": 99,
    "otherStateTaxInINR": 36,
    "returnTime": "5/17/2024",
    "kmStarting": "Suite 51",
    "perKmRateInINR": 42,
    "advanceAmountInINR": 8315,
    "remainingAmountInINR": 5591,
    "note": "1/2",
    "instructions": "() { 0; }; touch /tmp/blns.shellshock1.fail;"
  }]


export const columnsForAgencies = [
    { id: 'userName', label: 'User Name' },
    { id: 'companyName', label: 'Company Name' },
    { id: 'email', label: 'Email' },
    { id: 'mobileNumber', label: 'Mobile' },
    { id: 'whatsappNumber', label: 'Whatsapp' },
    { id: 'state', label: 'State' },
    { id: 'city', label: 'City' },
    { id: 'isSubsciptionValid', label: 'Subscription' },
    { id: 'noOfDrivers', label: 'No. Of Drivers' },
    { id: 'noOfVehicles', label: 'No. Of Vehicles' },
]

  export const activeDailyRoute = (id) => {
    const active = dataForDailyRoutes.filter(route => route._id === id)[0]
    return active
  }