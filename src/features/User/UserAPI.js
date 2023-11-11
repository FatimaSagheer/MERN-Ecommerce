export function fetchLoggedInUserOrders(userId) {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8081/orders/?user.id='+userId) 
      const data = await response.json()
      resolve({data})
    }
    );
  }