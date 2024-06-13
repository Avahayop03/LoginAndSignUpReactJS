import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
import Main from "../Pages/Main";
import PatientMedication from "../Pages/PatientMedication";
import StaffAllocation from "../Pages/StaffAllocation";
import WardRequisition from "../Pages/WardRequisition";
import StocksAndSupplies from "../Pages/StocksAndSupplies";
import Wards from "../Pages/Wards";
import Patient from "../PatientsPages/Patient";
import Appointment from "../Pages/Appointment";
import OutPatient from "../PatientsPages/OutPatient";
import WaitingLists from "../PatientsPages/WaitingLists";
import CurrentInPatient from "../PatientsPages/CurrentInPatient";

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
        path: "/SignUp",
        element: <SignUp />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            
            {
                index: true,
                element:<Main/>
            },
            
            {
                path: "patientMed",
                element: <PatientMedication/>
            },

            {
                path: "staffAlloc",
                element: <StaffAllocation/>
            },
            {
                path: "wardReq",
                element: <WardRequisition/>
            },
            {
                path: "stocksAndSupplies",
                element: <StocksAndSupplies/>
            },
            {
                path: "wards",
                element: <Wards/>
            },
            {
                path:"appointment",
                element: <Appointment/>
            },
            
            {
                path:"patient",
                element: <Patient/>,
                children: [
                    
                    {
                        path:"outPatient",
                        element: <OutPatient/>
                    },
                    {
                        path:"waitingLists",
                        element: <WaitingLists/>
                    },
                    {
                        path:"currentInPatient",
                        element:<CurrentInPatient/>

                    }
                    
                ]
            }
            


        ]
    }
];


export default routes;
