import Home from "./pages/home/Home";
import Index from "./pages/HomeIndex/Index";
import Doctor from "./pages/Doctor/ListOfDoctors";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Destination from "./pages/destinations/DestinationList";
import SchedulesList from "./pages/Schedules/Schedules";
import Appoint from "./pages/HomeIndex/Appoint";
import AppointmentList from "./pages/Appointment/AppointmentList";
import Login from "./pages/login/Login";
import NewDoctor from "./pages/New_doctor/NewDoctor";
import NewSchedule from "./pages/new_schedule/New";
import List from "./pages/List_Appointment/List";
import ListOfDoctors from "./pages/Doctor/ListOfDoctors";
import Single from "./pages/single/Single";
import New from "./pages/new_department/New";
import NewDestination from "./pages/new_destionation/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import BookingList from "./pages/booking/BookingList";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Index />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="appointment" element={<AppointmentList />} />
            <Route path="appoint" element={<Appoint />} />
            <Route path="departments">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>



            <Route path="trip">
              <Route index element={<Destination/>} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<NewDestination inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="schedule">
              <Route index element={<SchedulesList/>} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<NewSchedule inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="bookings" element={<BookingList />} />


            <Route path="doctor">
              <Route index element={<ListOfDoctors />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="newDoctor"
                element={<NewDoctor inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
