import Layout from "./layouts/Layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import AllPost from "./pages/AllPost/AllPost";
import AddNew from "./pages/AddNew/AddNew";
import About from "./pages/About/About";
import Trashed from "./pages/AllPost/Trashed/Trashed";
import Published from "./pages/AllPost/Published/Published";
import Drafts from "./pages/AllPost/Drafts/Drafts";
import Hero from "./components/Globals/Hero/Hero";
import EditPost from "./pages/AllPost/Edit";

function App() {

  const router = createBrowserRouter([
    // Routing Main Page
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/articles",
      element: <AllPost />,
    },
    {
      path: "/new",
      element: <AddNew />,
    },
    // {
    //   path: "/about",
    //   element: <About />,
    // },

    // Routing Tab All Post
    {
      path: "/articles/published",
      element: <Published />,
    },
    {
      path: "/articles/drafts",
      element: <Drafts />,
    },
    {
      path: "/articles/trashed",
      element: <Trashed />,
    },

    // Routing Edit Post
    {
      path: "/articles/edit/:id",
      element: <EditPost />,
    },
  ]);


  return (
    <>
     <Layout>
      <RouterProvider router={router} />
     </Layout>
    </>
  );
}

export default App;
