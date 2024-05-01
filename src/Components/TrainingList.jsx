import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'

import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';



export default function TrainingList() {

    const [trainings, setTrainings] = useState([]); // State variable for holding customers
    /*const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""}) // State variable for holding the new event
    const [allEvents, setAllEvents] = useState(events) // State variable for holding all events
*/

    useEffect(() => fetchData(), []); //, showTrainings(), []); // Lisätty showTrainings() funktio, joka hakee treenit ja tallentaa ne allEvents muuttujaan

    const fetchData = () => {

        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings') // Fetch data from the REST API
        .then(response => response.json())
        .then(date => date.map((training) => ({...training, date: dayjs(training.date).format('DD/MM/YYYY')}))) // Convert the date string to a Date object //Lähde: javakurssin map esimerkki, iteroitu koodiriviä github copilotilla. Koodi siis muokkaa treeenien päivämäärän oikeaan muotoon ja tallentaa sen date muuttujaan training objektin sisälle. itseasiassa tallennus tapahtuu tuossa riviä alempana.
        .then(data => setTrainings(data)) // Set the state variable to the data fetched from the REST API
        .catch(error => console.error(error))
        
    }


   /* const showTrainings = () => { // Function to show trainings. Doesn't work
        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings') // Fetch data from the REST API
        .then(response => response.json())    
        .then(data => data.map((training) => ({title: training.activity, start: new Date(training.date), end: new Date(training.date)})))// this is to parse the data only containing start and end date and titlte to the format that the calendar can understand
        console.log(data)
        .then(data => setAllEvents(data))
        .catch(error => console.error(error))
    }

    */


    const deleteTrainings = href => { // Function to delete a training
        if (window.confirm('Are you sure you want to delete training?')) {
    const options = {
        method: 'DELETE'

    }
        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings/' + href, options) // Fetch data from the REST API with ID + options (delete)
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
    
        {field: 'date', filter: true},
        {field: 'duration', filter: true},
        {field: 'activity', filter: true},
        {field: 'customer.firstname', filter: true},
        {field: 'customer.lastname', filter: true},
        {field: 'id', sortable: false, filter: false, 
    headerName: 'Delete',
   cellRenderer: ({ value }) => <DeleteIcon  onClick={() => deleteTrainings(value)} />
}
       
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