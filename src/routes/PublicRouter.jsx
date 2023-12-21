import Layouts from "../components/Layouts/Layouts";
import Auth from "../pages/Auth/Auth";
import _404page from "../pages/error/_404page";

const publicRouter = [
    {
        element: <Layouts />,
        children: [
            {
                path: "/auth",
                element: <Auth />,
            },
            {
                path: "*",
                element: <_404page />,
            },
        ],
    },
];
export default publicRouter;
