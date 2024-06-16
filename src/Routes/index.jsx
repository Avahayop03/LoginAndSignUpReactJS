import React from 'react';
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
import Main from "../Pages/Main";
import PatientMedication from "../Pages/PatientMedication";
import SavePageMed from '../Pages/SavePageMed'; // Assuming this is correct
import WardRequisition from "../Pages/WardRequisition";
import AddWardRequisition from "../Pages/AddWardRequisition"; // Add this import
import StocksAndSupplies from "../Pages/StocksAndSupplies";
import Wards from "../Pages/Wards";
import Patient from "../PatientsPages/Patient";
import Appointment from "../Pages/Appointment";
import OutPatient from "../PatientsPages/OutPatient";
import WaitingLists from "../PatientsPages/WaitingLists";
import CurrentInPatient from "../PatientsPages/CurrentInPatient";
<<<<<<< HEAD
import PrivateRoute from '../Components/PrivateRoute';
import PatientLists from "../PatientsPages/PatientLists";
import DischargePatient from "../PatientsPages/DischargePatient";
import MainInPatient from "../PatientsPages/MainInPatient";
=======
import StaffAllocation from "../Pages/StaffAllocation";
<<<<<<< HEAD
import LocalDoctor from "../Pages/LocalDoctor"; // Adjust the import path as per your file structure
import HomePage from "../Pages/HomePage"; // Add this import
=======
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
>>>>>>> a3110c38df82852ba54f8c41ac60c3e6f09cc2c1

const routes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signUp",
        element: <SignUp />
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: "patientMed",
<<<<<<< HEAD
                element: <PatientMedication />
            },
            {
                path: "staffAlloc",
                element: <StaffAllocation />
=======
                element: <PatientMedication />,
                children: [
                    {
                        path: "edit",
                        element: <SavePageMed /> // Updated component name if this is the correct component
                    }
                ]
            },
            {
                path: "staffAlloc",
                element: <StaffAllocation />,
                children: [
                    {
                        path: "edit",
                        element: <SavePageMed /> // Updated component name if this is the correct component
                    }
                ]
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
            },
            {
                path: "wardReq",
                element: <WardRequisition />,
                children: [
                    {
                        path: "add",
                        element: <AddWardRequisition />
                    }
                ]
            },
            {
                path: "stocksAndSupplies",
                element: <StocksAndSupplies />
            },
            {
                path: "wards",
                element: <Wards />
            },
            {
                path: "appointment",
                element: <Appointment />
            },
<<<<<<< HEAD
           
=======
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
            {
                path: "patient",
                element: <Patient />,
                children: [
                    {
<<<<<<< HEAD
                        index:true,
                        element:<PatientLists/>
                    },
                    {
                        path:"allPatientLists",
                        element:<PatientLists/>
                    },
                                       
                    {
                        path: "outPatient",
                        element: <OutPatient />
                    },
                    {
                        path: "waitingLists",
                        element: <WaitingLists />
                    },
                    {
                        path: "currentInPatient",
                        element: <MainInPatient />,
                        children: [
                            {
                                index:true,
                                element: <CurrentInPatient/>
                            },
                            {
                                path:'dischargePatient',
                                element:<DischargePatient/>
                            }
                        ]
=======
                        path: "outPatient",
                        element: <OutPatient />
                    },
                    {
                        path: "waitingLists",
                        element: <WaitingLists />
                    },
                    {
                        path: "currentInPatient",
                        element: <CurrentInPatient />
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
                    }
                ]
            },
            {
                path: "local-doctor",
                element: <LocalDoctor />
            }
        ]
    }
];

export default routes;
