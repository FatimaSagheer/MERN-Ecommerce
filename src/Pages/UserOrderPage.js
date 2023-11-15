import React from "react";
import UserOrder from "../features/User/components/UserOrder";
import Navbar from "../features/Navbar/Navbar";

function UserOrderPage() {
  return (
    <div>
        <Navbar>
        <h1 className='mx-auto text-2xl text-white'>My Orders</h1>
            <UserOrder></UserOrder>
        </Navbar>
    </div>
  )
}

export default UserOrderPage;
