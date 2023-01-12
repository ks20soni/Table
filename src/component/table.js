import { useState } from "react";
import tableData1 from "../tableData1.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {
 const [tableData, setTableData] = useState(tableData1);

 const columns = [
  { label: "First Name", accessor: "first_name", sortable: true },
  { label: "Last Name", accessor: "last_name" },
  { label: "Email", accessor: "email" },
  { label: "Gender", accessor: "gender" },
  { label: "IP address", accessor: "ip_address" },
  { label: "Airport Code", accessor: "airport code" },
  { label: "Time", accessor: "time" },
  { label: "Status", accessor: "status" },
  { label: "Mobile", accessor: "mobile" },
  { label: "Area", accessor: "area" },
  { label: "Show", accessor: "show" },
  { label: "Edit", accessor: "edit" },
 ];

 const handleSorting = (sortField, sortOrder) => {
  if (sortField) {
    const sorted = [...tableData].sort((a, b) => {
     return (
      a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
       numeric: true,
      }) * (sortOrder === "asc" ? 1 : -1)
     );
    });
    setTableData(sorted);
   }
   };

 return (
  <>
   <table className="table">
    <caption>
     Column headers are sortable.
    </caption>
    <TableHead columns={columns} handleSorting={handleSorting}/>
    <TableBody columns={columns} tableData={tableData} />
   </table>
  </>
 );
};

export default Table;