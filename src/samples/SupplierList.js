import React from 'react'

function SupplierList({suppliers}) {

    // const { suppliers } = props;


  return (
    <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
        </tr>
    </thead>
     <tbody>
         {
             suppliers && suppliers.map((item) => {
                 
                return <tr key={item.id}>
                     <td>{item.id}</td>
                     <td>{item.companyName}</td>
                     <td>{item.contactName}</td>
                 </tr>

             })
         }
     </tbody>

 </table>

  )
}

export default SupplierList