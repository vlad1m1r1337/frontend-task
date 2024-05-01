import React from 'react';
import './css/Form.css'
import {Form} from "./components/Form";
import {Table} from "./components/Table";
import {PrimeReactProvider} from "primereact/api";
import 'primeicons/primeicons.css';
import {QueryClient, QueryClientProvider} from "react-query";
function App() {

    const queryClient = new QueryClient();
    return (
      <>
        <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
                <div style={{padding: "0 10px 0 10px"}}>
                    <Form/>
                    <Table/>
                </div>
            </PrimeReactProvider>
        </QueryClientProvider>
      </>
    );
}

export default App;
