import React from "react";
import { Button, duration} from "@mui/material";
import { TextField } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";



export default function AddTraining(props) {

    const [open, setOpen] = React.useState(false); // State variable for opening and closing the dialog
    const [training, setTraining] = React.useState({ // State variable for holding the customer data
        date: '', activity: '', duration: '', customer: '',
    });

    const handleClickOpen = () => { // Function to open the dialog
        setOpen(true);
    };

    const handleClose = () => { // Function to close the dialog
        setOpen(false);
    };

    const handleInputChange = (event) => { // Function to handle input changes
        setTraining({...training, [event.target.name]: event.target.value});

    }

    const addTraining = () => { // Function to add a new customer
        props.saveTraining({...training, customer: props.training._links.customer.href}) //Mietityttää tämä rivi, customer kenttä oli jo training objektissa, miksi se pitää erikseen lisätä?
        console.log(training) // This is for developer only
        handleClose();
    }



    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button color="primary" size="small" onClick={handleClickOpen}> 
          Add Traingin to customer
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">

          <DialogTitle id="form-dialog-title">Add training</DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                required
                margin="dense"
                name="firstname"
                 value={props.training.firstname}
                onChange={e => handleInputChange(e)}
                type="text"
                fullWidth
            />
              <TextField
                autoFocus
                required
                margin="dense"
                name="lastname"
                 value={props.training.lastname}
                onChange={e => handleInputChange(e)}
                type="text"
                fullWidth
            />

            <TextField
              autoFocus
              required
              margin="dense"
              name="date"
               value={training.date}
              onChange={e => handleInputChange(e)}

              type="date"
              fullWidth
            />
            <TextField
              required
              margin="dense"
              name="activity"
            value={training.activity}
              onChange={e => handleInputChange(e)}
              label="activity"
              type="text"
              fullWidth
            />
            <TextField
              required
              margin="dense"
              name="duration"
            value={training.duration}
              onChange={e => handleInputChange(e)}
              label="duration"
              type="number"
              fullWidth
            />
                     <TextField
            required
            margin="dense"
            name="customer"
            value={props.training._links.customer.href} // This is the customer id for developer only do not change
            onChange={e => handleInputChange(e)}
            label="add training to this customer id do not touch this field dev only"
            fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={addTraining} color="primary">
                Save
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    );
}