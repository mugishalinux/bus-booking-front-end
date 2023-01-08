import axios from "axios";
import { useNavigate } from "react-router-dom";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Departmet Name",
    headerName: "Departmet Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const depColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 40,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.id}</div>;
    },
  },
  {
    field: "Departmet Name",
    headerName: "Departmet Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.name}</div>;
    },
  },
];

export const appointColumns = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "Patient Names",
    headerName: "Departmet Name",
    width: 140,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.patientName}</div>;
    },
  },
  {
    field: "Patient Email",
    headerName: "Patient Email",
    width: 190,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.patientEmail}</div>;
    },
  },
  {
    field: "Sickness Overview",
    headerName: "Sickness Overview",
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">{params.row.patientSicknessDetail}</div>
      );
    },
  },
  {
    field: "Appointment Date & Hour",
    headerName: "Appointment Date & Hour",
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.appointmentDate +
            " | " +
            params.row.appointmentHour +
            ":00"}
        </div>
      );
    },
  },
  {
    field: "App Status",
    headerName: "App Status",
    width: 100,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.appointmentStatus}</div>;
    },
  },

  {
    field: "Doctor Choosen",
    headerName: "Doctor Choosen",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.doctor.firstName +
            " " +
            params.row.doctor.lastName +
            " " +
            "[" +
            params.row.doctor.department.name +
            "]"}
        </div>
      );
    },
  },
];

export const tripColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 40,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.id}</div>;
    },
  },
  {
    field: "Destination Name",
    headerName: "Destination Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.tripName}</div>;
    },
  },
];

export const scheduleColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 40,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.id}</div>;
    },
  },
  {
    field: "Schedule time",
    headerName: "Destination Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.schedule_time}</div>;
    },
  },
];

export const bookingColumns = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "id",
    headerName: "id",
    width: 140,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.id}</div>;
    },
  },
  {
    field: "First Name",
    headerName: "First Name",
    width: 190,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.firstName}</div>;
    },
  },
  {
    field: "Last Name",
    headerName: "Last Name",
    width: 170,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.lastName}</div>;
    },
  },
  {
    field: "Email",
    headerName: "Email",
    width: 210,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.email}</div>;
    },
  },
  {
    field: "Destination",
    headerName: "Destination",
    width: 170,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.trip.tripName}</div>;
    },
  },
  {
    field: "schedule",
    headerName: "schedule",
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">{params.row.schedules.schedule_time}</div>
      );
    },
  },
];
