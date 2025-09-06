import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import PropertySearch from "./pages/PropertySearch/PropertySearch";


const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/PropertySearch" index element={<PropertySearch/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;