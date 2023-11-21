export function addCategory(category) {
    return new Promise(async (resolve) =>{
      //TODO: we will not hard-code server URL here
      const response = await fetch('http://localhost:8081/category',{
        method: 'POST',
        body: JSON.stringify(category),
        headers: { 'content-type': 'application/json' },
      }) 
      const data = await response.json()
      resolve({data})
    }
    );
  }

  export function updateCategory(category) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8081/category/'+category.id, {
        method: 'PATCH',
        body: JSON.stringify(category),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }