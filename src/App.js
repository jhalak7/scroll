
import './App.css';
import React from 'react';
import ist from './ist.jpg';

class App extends React.Component{
  constructor(props){
  super(props);
  this.state={text:10000,amount:'',x:1};
}
handle=(event)=>{
  this.setState({
    text:event.target.value
  }) 
 
} 
_onMouseMove(e) {
   let a=(1+1/3650);
  let b=this.state.x;
  if(b<=0)
  b=1;
  let ci=(this.state.text*(Math.pow(a,365*b)-1)).toFixed(2);
  this.setState({
    amount:ci
  })
  let coor=parseInt((e.clientX-e.target.offsetLeft+1)/13);
  if(coor<1)
  coor=1;
  this.setState({ x: coor });
  //console.log(this.state.x,e.clientX,e.target.offsetLeft)
}
make()
{
   var base_image = new Image();
  base_image.src = './ist.jpg';
  base_image.onload = function(){
  document.getElementById("mycanvas").getContext('2d').drawImage(base_image, 0, 0);
  }

}

render(){
  return (
      <div className="first">
        <div className="second">
          <p>Amount</p> 
          <div className="form-text">
      <input type="text" id="youridhere" defaultValue="10000" onChange={this.handle.bind(this)}/>
      <label htmlFor="youridhere" className="static-value">$</label>
    </div> 
          <p className="par">The calculator represents compounding
           interest earned of both the principle amount and
            earned interest.</p>
        </div>
        <div id="abc" className="loga">
          <div className="handler">
            <p className="timep">In {this.state.x} months you will have</p>
          <p className="amountp">${this.state.amount}</p>
          </div>
          <canvas onClick={this.make} onMouseMove={this._onMouseMove.bind(this)} id="mycanvas">
          </canvas>
          <div className="svgs">
          <svg className="stsvg" width="2" height="10" viewBox="0 0 2 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0V28" stroke="black"/>
</svg>
          <svg className="ndsvg" width="2" height="10" viewBox="0 0 2 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0V28" stroke="black"/>
</svg>
          <svg className="rdsvg" width="2" height="10" viewBox="0 0 2 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0V28" stroke="black"/>
</svg>
          <svg className="thsvg" width="2" height="10" viewBox="0 0 2 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0V28" stroke="black"/>
</svg>
          </div>
          <div className="ps">
          <p className="stp">1 month</p>
          <p className="ndp">12 months</p>
          <p className="rdp">24 months</p>
          <p className="thp">36 months</p>

          </div>
          </div>
      </div>
  );
}
} 


export default App;