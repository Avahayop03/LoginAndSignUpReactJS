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
import PrivateRoute from '../Components/PrivateRoute';
import PatientLists from "../PatientsPages/PatientLists";
import DischargePatient from "../PatientsPages/DischargePatient";
import MainInPatient from "../PatientsPages/MainInPatient";
import StaffAllocation from "../Pages/StaffAllocation";
import LocalDoctor from "../Pages/LocalDoctor"; // Adjust the import path as per your file structure
import HomePage from "../Pages/HomePage"; // Add this import


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

                element: <PatientMedication />
            },
            {
                path: "staffAlloc",
                element: <StaffAllocation />
            },
            {
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

            {
                path: "patient",
                element: <Patient />,
                children: [
                    {
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
