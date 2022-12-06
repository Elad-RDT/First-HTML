import React,{Component} from "react";
class Reactex extends Component {
    state = {
        label:'',
        label2:0,
        label3:0,
        label4:0,
        showmenu:false,
        selectedOption1: '',
        selectedOption2: '',

        arr:[{menu:'menu1'},{menu:'menu2', arr:[{one:'option1',two:'option2'}]},{menu:'menu3',arr:[{one:'option one',two:'option two', three:'option three'}]}]
      } 
    render() { 
        return (
            <div>
                <input type="text" id="in" onKeyDown={(ev)=>this.lab(ev)}/>
                <br />
                <label htmlFor="">here i will copy you : </label>
                <label htmlFor="">{this.state.label}</label>
                <br />

                <input type="text" name="" id="in2"  onChange={this.lab2b}/> <label htmlFor="">+</label><input type="text" id="in3" onChange={this.lab2a}/>
                <br />
                <label htmlFor="">{ parseInt(this.state.label2) + parseInt(this.state.label3)}</label>
                <br />
                <input type="text" id="in4" onChange={(ev)=>this.lab4(ev)}/>
                <br />
                <label htmlFor="">FizzyBizzy!!!: {this.state.label4} </label>
                <br />

<br /><br /><br />


 
            </div>
        );
    }

    lab=(ev)=>{
        this.state.label=ev.target.value;
        this.setState({label:this.state.label})
    }
    lab2a=(ev)=>{
        
        this.state.label2=ev.target.value;
        this.setState({label2:this.state.label2});
       
    }
    lab2b=(ev)=>{
        
        this.state.label3=ev.target.value;
        this.setState({label3:this.state.label3});
       
    }
    lab4=(ev)=>{
        this.state.label4=ev.target.value;
        if(this.state.label4==3){
            this.setState({label4:'fizz'});
        }else if(this.state.label4==5){
            this.setState({label4:'buzz'})

        }
        else
        this.setState({label4:this.state.label4})

    }
    
  handleChange1 = (e) => {
    this.setState({
      selectedOption1: e.target.value
    });
  }

  handleChange2 = (e) => {
    this.setState({
      selectedOption2: e.target.value
    });
  }


 
}
 
export default Reactex;








 