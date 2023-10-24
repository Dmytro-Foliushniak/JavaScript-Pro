import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import HomePage, {usersLoader} from "./components/HomePage";
import Albums, {albumsLoader} from "./Page/Albuns";
import 'bootstrap/dist/css/bootstrap.min.css';
import Photos, {photosLoader} from "./Page/Photos";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        loader: usersLoader,
        children:[
            {
                path: "/users/:userId/albums",
                element: <Albums/>,
                id: 'albums',
                loader: albumsLoader,
                children: [
                    {
                        path: "/users/:userId/albums/:albumId/photos",
                        element: <Photos/>,
                        id: 'photos',
                        loader: photosLoader
                    }
                ]
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);