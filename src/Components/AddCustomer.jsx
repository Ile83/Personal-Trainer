import React from "react";
import { Button, useThemeProps } from "@mui/material";
import { TextField } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";



export default function AddCustomer(props) {

    const [open, setOpen] = React.useState(false); // State variable for opening and closing the dialog
    const [customer, setCustomers] = React.useState({ // State variable for holding the customer data
        firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''
    });

    const handleClickOpen = () => { // Function to open the dialog
        setOpen(true);
    };

    const handleClose = () => { // Function to close the dialog
        setOpen(false);
    };

    const handleInputChange = (event) => { // Function to handle input changes
        setCar({...car, [event.target.name]: event.target.value});

    }

    const addCustomer = () => { // Function to add a new customer
        props.saveCar(car)
        handleClose();
    }


    return (
        <div>
        <Button style= {{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}> 
          Add customer
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">

          <DialogTitle id="form-dialog-title">New Customer</DialogTitle>
            <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              name="firstname"
               value={customer.firstname}
              onChange={e => handleInputChange(e)}
              label="brand"
              fullWidth
            />
            <TextField
              required
              margin="dense"
              name="lastname"
            value={customer.lastname}
              onChange={e => handleInputChange(e)}
              label="model"
              fullWidth
            />
            <TextField
              required
              margin="dense"
              name="streetaddress"
            value={customer.streetaddress}
              onChange={e => handleInputChange(e)}
              label="color"
              fullWidth
            />
                     <TextField
            required
            margin="dense"
            name="postcode"
            value={customer.postcode}
            onChange={e => handleInputChange(e)}
            label="fuel"
            fullWidth
            />
            <TextField
            required
            margin="dense"
            name="city"
            value={customer.city}
            onChange={e => handleInputChange(e)}
            label="year"
            fullWidth
            />
            <TextField
            required
            margin="dense"
            name="email"
           value={customer.email}
            onChange={e => handleInputChange(e)}
            label="price"
            fullWidth
            />
        <TextField
            required
            margin="dense"
            name="phone"
           value={customer.phone}
            onChange={e => handleInputChange(e)}
            label="price"
            fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={addCustomer} color="primary">
                Save
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    );
}