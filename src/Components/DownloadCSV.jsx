

import React from 'react';
import { Button } from '@mui/material';
import fetchData from '../Components/CustomerList';




const DownloadCSV = ({ data, fileName }) => {

  const convertToCSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    array.forEach((element) => {  //to delete the last _links object from the array
      delete element._links;
    });

    let str = '';
    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in array[i]) {
        if (line !== '') line += ',';
        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  };

  const downloadCSV = () => {
    const csvData = new Blob([convertToCSV(data)], { type: 'text/csv' })
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = csvURL;
    link.download = `${fileName}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };



  return (
    <Button onClick={downloadCSV}>Download Customer Data</Button>
  );
}

export default DownloadCSV;


// Source: https://medium.com/@gb.usmanumar/how-to-export-data-to-csv-json-in-react-js-ea45d940652a
// Source: https://stackoverflow.com/questions/46859574/reactjs-if-object-has-length