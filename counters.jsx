import React,{ Component } from "react";
import Counter from "./counter";
import Movies from "./movies";
class Counters extends Component {
    state = { 
        arr:[],


     } ;
            render() { 
        return(
            <div>
                    
 <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">number</th>
      <th scope="col">name</th>
      <th scope="col">id</th>
      <th scope="col">genare</th>
      <th scope="col">delete</th>
      <th scope="col">Patch</th>
    </tr>
  </thead>
        <Movies></Movies>
        

     
  </table>
                
               
                
            
            </div>
        )
                
            }

} 
export default Counters;
