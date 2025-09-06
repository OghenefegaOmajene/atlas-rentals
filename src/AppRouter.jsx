import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import PropertySearch from "./pages/PropertySearch/PropertySearch";
import Navbar from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'

const AppRouter = () => {
    const hideNavbarPaths = ["/ServiceProviderSignUp", "/ClientSignUp", "/Login", "/ProviderDashboard", "/ClientDashboard", "/AdminDashboard", "/Notifications", "/PasswordResetModal", "/Dashboard", "/PaymentPage"];
    const hideFooterPaths = ["/Home", "/ServiceProviderSignUp", "/ClientSignUp", "/Login", "/ProviderDashboard", "/ClientDashboard", "/AdminDashboard", "/Notifications", "/PasswordResetModal", "/Dashboard", "/PaymentPage"];
    const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);
    const shouldShowFooter = !hideFooterPaths.includes(location.pathname);

    return(
        <Router>
            {shouldShowNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/PropertySearch" index element={<PropertySearch/>}/>
            </Routes>
            {shouldShowFooter && <Footer />}
        </Router>
    );
}

export default AppRouter;