import AdminCategory from "../features/admin/CategoryForm";
import NavBar from "../features/Navbar/Navbar";

function AdminCategoryPage() {
    return ( 
        <div>
            <NavBar>
                <AdminCategory
                ></AdminCategory>
            </NavBar>
            
        </div>
     );
}

export default AdminCategoryPage;