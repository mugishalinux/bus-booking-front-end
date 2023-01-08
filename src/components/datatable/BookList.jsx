import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  appointColumns,
  userColumns,
  depColumns,
  userRows,
  bookingColumns,
} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

const BookList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [appointment, setAppointment] = useState([]);
  const [booking, setBooking] = useState([]);
  const [appointmentPending, setAppointmentPending] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/booking").then((response) => {
      setBooking(response.data);
    });
  }, []);
  // const [data, setData] = useState(userRows);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              // onClick={}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="datatable">
        <div className="upper-section">
          <div className="title">
            <h3>List Of Booking</h3>
          </div>
          <div className="search">
            <form>
              <input
                type="text"
                onChange={
                  (e) => setSearch(e.target.value)
                  // console.log(e)
                }
                name="search"
                placeholder="searching place"
              />
            </form>
          </div>
        </div>
        <DataGrid
          className="datagrid"
          rows={booking.filter((item) => {
            return search.toLocaleLowerCase() === ""
              ? item
              : item.firstName.toLocaleLowerCase().includes(search); 
          })}
          columns={bookingColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default BookList;
