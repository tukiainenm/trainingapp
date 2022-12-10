import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import dayjs from 'dayjs';

export default function Trainings() {
    const [trainings, setTrainings] = useState([]);

    /*useEffect(() => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {method: 'GET'})
            .then(response => response.json())
            .then(responseData => {
                setTrainings(responseData)
            })
            .catch(err => console.error(err))
    }, [])*/

    useEffect(() => getTrainings(), []);

    

    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings',
        {method: 'GET'})
        
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
        
    }

    const columns = [
        {
            headerName: 'Date', field: "date", sortable: true, filter: true, floatingFilter: true, valueFormatter: field =>
                dayjs(field.data.date).format("DD.MM.YYYY")
        },
        { headerName: 'Duration (minutes)', field: "duration", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Activity', field: "activity", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Customer', field: "customer.firstname", sortable: true, filter: true, floatingFilter: true },
    ]

    return (
        <div className="ag-theme-material"
            style={{ height: '700px', width: '100%', margin: 'auto' }} >
            <header>
                <h1>Training activities</h1>
            </header>
            <AgGridReact
                columnDefs={columns}
                rowData={trainings}
                animateRows={true}
            >
            </AgGridReact>
        </div>
    )
}