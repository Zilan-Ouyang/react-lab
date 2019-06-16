import React from 'react';
import data from './random.json';



class ListRender extends React.Component {
    constructor(props){
        super(props); 
        this.state ={data, isToggleOn: true, isClicked: true};
        // this.activateFunc = this.activateFunc.bind(this);
        // this.deactivateFunc = this.deactivateFunc.bind(this);
        this.theInactiveList=this.theInactiveList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.theActiveList = this.theActiveList.bind(this);
    }
   

    
    
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
    }
    handleClick2(){
        this.setState(state => ({
            isClicked: !state.isClicked
          }));
    }
    theActiveList(){
        
        const lists =this.state.data.filter(index=>index.isActive).map(index => 
            <div key = {index.index}>
                <ul>
                     <li>First Name: {index.name.first}</li>
                     <li>Last Name: {index.name.last}</li>
                       <li>Balance: {index.balance}</li>
                         <li>Status: {index.isActive? 'ACTIVE' : 'INACTIVE'}</li>
                    </ul>
                </div>
        )
        return lists;
        
    }
    
  theInactiveList(){
    const lists =this.state.data.filter(index=>index.isActive === false).map(index => 
        <div key = {index.index}>
            <ul>
                 <li>First Name: {index.name.first}</li>
                 <li>Last Name: {index.name.last}</li>
                   <li>Balance: {index.balance}</li>
                     <li>Status: {index.isActive? 'ACTIVE' : 'INACTIVE'}</li>
                </ul>
            </div>
    )
    return lists;
  }
    render(){
        
        return(
            <div>
            <button onClick={this.handleClick}>{this.state.isToggleOn ? null : this.theActiveList()}Click Here for Active List</button>
            <button onClick={this.handleClick2}>{this.state.isClicked ? null : this.theInactiveList()}Click Here for Inactive List</button>
            </div> 
           
         ) }

}
export default ListRender;

