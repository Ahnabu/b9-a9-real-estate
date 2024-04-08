import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Route/Route';
import Provider from './Providers/Provider';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
      
    </ThemeProvider>
  </React.StrictMode>
);
