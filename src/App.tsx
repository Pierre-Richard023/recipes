import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {router} from "./utils/router.tsx";


const App = () => {

    return (
        <main className="min-h-screen px-8 md:px-20 dark:bg-dark dark:text-white">
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </main>
    )
}

export default App
