import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


export default function Customers() {
    const [customers, setCustomers] = useState([]);
    

    useEffect(() => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(responseData => {
                setCustomers(responseData.content)
            })
            .catch(err => console.error(err))
    }, [])

    /*const customerRows = customers.map((content) => 
     <tr key={content.firstname}>
         <td>{content.firstname}</td>
         <td>{content.lastname}</td>
     </tr>
     )
 
     return (
         <div>
             <h2>DIPPA</h2>
             <table>
                 <tbody>
                     <tr><th>LOL</th></tr>
                     {customerRows}
                 </tbody>
             </table>
         </div>
     )*/

    const columns = [
        { headerName: 'Firstname', field: "firstname", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Lastname', field: "lastname", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Address', field: "streetaddress", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Area Code', field: "postcode", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'City', field: "city", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Email', field: "email", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Phone', field: "phone", sortable: true, filter: true, floatingFilter: true },
    ]

    return (
        <div className="ag-theme-material"
                style={{height: '700px', width: '100%', margin: 'auto'}} >
      <h1>Customers</h1>
      <AgGridReact
            columnDefs={columns}
            rowData={customers}
            animateRows={true}
            >
            </AgGridReact>
        </div>
    )

}





