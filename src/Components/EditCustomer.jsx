import React from "react";
import { Button, useThemeProps } from "@mui/material";
import { TextField } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";



export default function Editcus(props) {

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({ // State variable for holding the customer data
        firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''
    });

    const handleClickOpen = () => {
        //console.log(props.car);
        setCustomer({firstnamee: props.customer.firstname, lastname: props.customer.lastname, streetaddress: props.customer.streetaddress, postcode: props.customer.postcode, city: props.customer.city, email: props.customer.email, phone: props.customer.phone});
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value});

    }

    const updateCustomer = () => {
        props.updateCustomer(customer, props.customer._links.customer.href);
        handleClose();
    }


    return (
        <div>
        <Button color="primary" onClick={handleClickOpen}>
          Edit customer
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">

          <DialogTitle id="form-dialog-title">Edit Customer</DialogTitle>
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
            <Button onClick={updateCustomer} color="primary">
                Save
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    );
}