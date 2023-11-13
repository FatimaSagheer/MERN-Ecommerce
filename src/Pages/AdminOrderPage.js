import AdminOrders from "../features/admin/AdminOrderPage";
import NavBar from "../features/Navbar/Navbar";

function AdminOrdersPage() {
    return ( 
        <div>
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
        </div>
     );
}

export default AdminOrdersPage;