import ConfirmCourse from "../pages/basic components/courses compo/ConfirmCourse/ConfirmCourse";
import CourseDetails from "../pages/basic components/courses compo/CourseDeatails/CourseDetails";
import Courses from "../pages/basic components/courses compo/Courses/Courses";
import Homes from "../pages/basic components/Home/Homes";
import Blogs from "../pages/basic components/Blogs/Blogs";
import Contacts from "../pages/basic components/Contacts/Contacts";
import Faq from "../pages/basic components/Faq/Faq";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Homes></Homes>
            },
            {
                path: '/courses',
                element:<Courses></Courses>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/courseDetail/:id',
                element:<CourseDetails></CourseDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/course-confirmed/:id',
                element:<PrivateRoutes> <ConfirmCourse></ConfirmCourse> </PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:5000/course-confirmed/${params.id}`)
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/contacts',
                element:<Contacts></Contacts>
            }
        ]
    }
])