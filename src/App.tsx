import React from 'react';
import './css/Form.css'
import {Form} from "./components/Form";
import {Table} from "./components/Table";
import {fetchedData} from "./types/fetchedData";
function App() {

    return (
      <>
          <Form />
          <Table />
      </>
    );
}

export default App;
