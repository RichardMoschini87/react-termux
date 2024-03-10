import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from "react";

const App = ()=>{

  const [date, seDate] = useState()
  return (
    <div className="container">
      <div className="row">
<div className="col-6 pt-2">
<label htmlFor="dti">Data Inizio: </label>
<input type="date" onChange={(e)=>{seDate({...date,datai: e.currentTarget.value})}}
            id="dti" className="form-control"/>
      </div>
<div className="col-6 pt-2">
<label htmlFor="dtf">Data fine</label>
<input type="date" onChange={
            (e)=>{ seDate({...date,dataf: e.currentTarget.value})}} id="dtf" className="form-control"/>
      </div>
        <div className="col-12 pt-2 text-center">
          <button className="btn btn-success"
          onClick={()=> console.log(date)}>Vedi le date</button>
        </div>
      </div>
  </div>
)
}

export default App;
