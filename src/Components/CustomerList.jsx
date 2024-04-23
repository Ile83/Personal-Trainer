import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";


export default function CustomerList() {

    const [customers, setCustomers] = useState([]); // State variable for holding customers

    useEffect(() => fetchData(), []);

    const fetchData = () => {

        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/api/customers') // Fetch data from the REST API vaihda osoite
        .then(response => response.json())
        .then(data => setCustomers(data._embedded.customers)) // Set the state variable to the data fetched from the REST API
        .catch(error => console.error(error))
    }
    


    const deleteCustomer = href => { // Function to delete a customer
        if (window.confirm('Are you sure?')) {
    const options = {
        method: 'DELETE'

    }
        fetch(href, options)
        .then(() => fetchData())
        .catch(error => console.error(error))
        

      }
    }

    const saveCustomer = (customer) => { // Function to add a new customer
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

    const [columnDefs, setColumnDefs] = useState([ // Column definitions for the grid
        {field: 'firstname', filter: true},
        {field: 'lastname', filter: true},
        {field: 'streetaddress', filter: true},
        {field: 'postcode', filter: true},
        {field: 'city', filter: true},
        {field: 'email', filter: true},
        {field: 'phone', filter: true},
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
        rowData={customers}
        columnDefs={columnDefs}
      />
    </div>
       
    );
    }