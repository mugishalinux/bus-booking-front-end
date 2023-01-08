import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import BookList from "../../components/datatable/BookList"

const BookingList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
         <BookList/> 
      </div>
    </div>
  )
}

export default BookingList