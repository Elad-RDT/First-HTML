import React,{Component} from "react";
class OnlyRow extends Component {
    state = { 
      
        
     } 
    render() { 
        return (
                 
       
            
            <tbody>

                  <tr>
                <td>{this.props.number}</td>
                <td>{this.props.name}</td>
                <td>{this.props.id}</td>
                <td>{this.props.gener}</td>
                <td><button onClick={this.props.del}>hey</button></td>
                
                    </tr>
            </tbody>
           
                    
                
         
            
        );
    }
}
 
export default OnlyRow;
