import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid


import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import AddTraining from './AddTraining';
import DownloadCSV from './DownloadCSV';
import DeleteIcon from '@mui/icons-material/Delete'





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
        if (window.confirm('Are you sure you want to delete a customer?')) {
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

    const saveTraining = (training) => { // Function to add a new Training to a customer
        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        })
        .then(() => fetchData())
        .catch(error => console.error(error))
    }


    const [columnDefs, setColumnDefs] = useState([ // Column definitions for the grid
        {field: 'firstname', filter: true, width: 150},
        {field: 'lastname', filter: true, width: 150},
        {field: 'streetaddress', filter: true, width: 200},
        {field: 'postcode', filter: true, width: 120},
        {field: 'city', filter: true, width: 150},
        {field: 'email', filter: true, width: 200},
        {field: 'phone', filter: true, width: 150},
     {field: 'edit', sortable: false, filter: false, width: 80,
   cellRenderer: ({ data }) => <EditCustomer customer={data} updateCustomer={updateCustomer} />
  },
      {field: '_links.self.href', sortable: false, filter: false, 
        headerName: 'Delete', width: 100,
       cellRenderer: ({ value }) => <DeleteIcon onClick={() => deleteCustomer(value)} />
    },
   // {field: '_links.trainings.href', sortable: false, filter: false,
   // headerName: 'Customers Trainings',
   // cellRenderer: ({ value }) => <Button color="primary" size="small" onClick={() => console.log(value)}>Trainings</Button>
   // },
    {field: '_links.self.href', sortable: false, filter: false,
    headerName: 'Add Training', width: 120,
    cellRenderer: ({ data }) => <AddTraining training={data} saveTraining={saveTraining}/>
   }//,
  // {field: 'Download CSV', sortable: false, filter: false,
  // cellRenderer: ({ data }) => <DownloadCSV data={data} fileName="customers"/>
 // },


      ]);

     


    return (

    <div className="ag-theme-material" style={{width: 1450, height: 800, float: 'left'}}>
        <DownloadCSV data={customers} fileName="customers"/>
        <AddCustomer saveCustomer={saveCustomer} />
        <AgGridReact 
        rowData={customers}
        columnDefs={columnDefs}
      />
    </div>
       
    );
    }