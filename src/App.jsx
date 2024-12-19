import './App.css'
import Body from './components/body/Body'
import { Provider } from 'react-redux'
import store from './utils/redux/store'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './components/body/MainContainer'
import WatchPage from './components/body/watch/WatchPage'
import SearchResults from './components/body/search/SearchResults'
import Error from './components/Error';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <MainContainer />,
            },
            {
                path: "watch",
                element: <WatchPage />
            },
            {
                path: "results",
                element: <SearchResults />
            },
        ],
    },
]);

function App() {

    return (
        // Redux store provider
        <Provider store={store}>
            {/* router provider for routing */}
            <RouterProvider router={appRouter} />
        </Provider>
    );
}

export default App
