import React,{Component} from "react";
class Greet extends Component {
    state = {} 
    render() { 
        return (
           
                
                <div style={{width: 400, marginLeft:550, marginTop:200, }}>

                   <label>Name</label>
    <input type="text" className="form-control" id="iname"  placeholder="Enter name" ></input>
    <label>lastname</label>
    <input type="text" className="form-control" id="inlast" placeholder="Enter lastname" ></input>
    <br />
    <button  className="btn btn-primary" style={{ marginLeft:150}} onClick={this.fun}>Submit</button>
                </div >
            )
    }
    fun=()=>{
        alert(document.getElementById('iname').value+' '+document.getElementById('inlast').value)
    }



}
 
export default Greet;