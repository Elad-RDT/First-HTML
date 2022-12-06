import React,{Component} from "react";
import OnlyRow from "./onlyRow";
class OnlyTable extends Component {
    state = {  
        arr:[{ number:1,name:'Spider-Man', id:122,gener:'action'}, {number:2,name:'Shauli', id:123,gener:'comedy'},{number:3,name:'david', id:124,gener:'stam'}]
    } 
    

    render() { 
        return (
            <React.Fragment>
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
               
              

                    { this.state.arr.map(val=>{
                        return <OnlyRow key={val.id} number={val.number} name={val.name} id={val.id} gener={val.gener}></OnlyRow> 
                        
                    }
                    )
                }
              </table>
                        
            </React.Fragment>
        )
}

  
}



// export function stam(props) {
//     return (
//         <div>
//     <td>{props.name}</td>
//     <td>{props.id}</td>
//     <td>{props.genre}</td>
//     </div>
// )}

 
export default OnlyTable;
