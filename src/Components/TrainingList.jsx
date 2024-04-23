import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import require from 'dayjs';
import dayjs from 'dayjs';



export default function TrainingList() {

    const [trainings, setTrainings] = useState([]); // State variable for holding customers
    const dayjs = require('dayjs');


    useEffect(() => fetchData(), []);

    const fetchData = () => {

        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings') // Fetch data from the REST API vaihda osoite
        .then(response => response.json())
        .then(data => dayjs(data.date).toDate()) // Convert date to a readable format, en tiedä vielä toimiiko
        .then(data => setTrainings(data)) // Set the state variable to the data fetched from the REST API
        .catch(error => console.error(error))

    }
    


    const deleteTrainings = href => { // Function to delete a training
        if (window.confirm('Are you sure?')) {
    const options = {
        method: 'DELETE'

    }
        fetch(href, options)
        .then(() => fetchData())
        .catch(error => console.error(error))
        

      }
    }

  /*  const saveTraining = (training) => { // Function to add a new customer
        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(() => fetchData())
        .catch(error => console.error(error))
    }

    const updateCustomer = (customer, link) => { // Function to update a customer
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(() => fetchData())
        .catch(error => console.error(error))
    }

    */

    const [columnDefs, setColumnDefs] = useState([ // Column definitions for the grid
        {field: 'id', filter: true},
        {field: 'date', filter: true},
        {field: 'duration', filter: true},
        {field: 'activity', filter: true},
        {field: 'customer.firstname', filter: true},
        {field: 'customer.lastname', filter: true}
 //       {field: 'edit', sortable: false, filter: false,
  //  cellRenderer: ({ data }) => <EditCustomer customer={data} updateCustomer={updateCustomer} />
  //  },
 //       {field: '_links.self.href', sortable: false, filter: false, 
   //     headerName: '', 
     //   cellRenderer: ({ value }) => <Button color="secondary" size="small" onClick={() => deleteCustomer(value)}>Delete</Button>}
      ]);

     


    return (

    <div className="ag-theme-material" style={{width: 1600, height: 1800}}>
    
    
        <AgGridReact 
        rowData={trainings}
        columnDefs={columnDefs}
      />
    </div> 
       
    );
    }