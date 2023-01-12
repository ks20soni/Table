import { useState } from "react";
import * as React from 'react';
import ToggleMenu from "./ToggleMenu";

const TableHead = ({ columns, handleSorting }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");
    const handleSortingChange = (accessor) => {
        const sortOrder =
        accessor === sortField && order === "asc" ? "desc" : "asc";
       setSortField(accessor);
       setOrder(sortOrder);
       handleSorting(accessor, sortOrder);
       };

    return (
     <thead>
      <tr>
       {columns.map(({ label, accessor, sortable }) => {
        const cl = sortable
     ? sortField === accessor && order === "asc"
      ? "up"
      : sortField === accessor && order === "desc"
      ? "down"
      : "default"
     : "";
        return <th className={cl} key={accessor}  onClick={sortable ? () => handleSortingChange(accessor) : null}>{label}{sortable ? <ToggleMenu columns={columns} handleSorting={handleSorting}/> : ""}</th>;
       })}
      </tr>
     </thead>
    );
   };
   
   export default TableHead;
