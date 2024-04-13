import React from 'react';
import './css/Form.css'
import {Form} from "./components/Form";
import {Table} from "./components/Table";
import {PrimeReactProvider} from "primereact/api";
import 'primeicons/primeicons.css';
import {useAppSelector} from "./hooks";
function App() {

    return (
      <>
          <PrimeReactProvider>
              <div style={{padding: "0 10px 0 10px"}}>
                  <Form/>
                  <Table/>
              </div>
          </PrimeReactProvider>
      </>
    );
}

export default App;
