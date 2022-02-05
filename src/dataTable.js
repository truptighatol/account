import React from 'react';
import data from './data.json';

const DataTable = () => {

   return ( 
        <div>
            <table id= 'table'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                </tr>
                <tr>
                {data.map(id=>{
                        console.log(id);
                    <td>{{id}}</td>
                })}
                </tr>
            </table>
        </div>
    )
}
export default DataTable;