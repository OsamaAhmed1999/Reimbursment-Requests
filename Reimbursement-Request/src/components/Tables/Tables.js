import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead ,MDBCardBody,MDBCardHeader ,MDBCard ,MDBBtn  } from 'mdbreact';

const Tables = (props) => {
  return(

    <MDBCard>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-3 mx-4 mb-3  ">

    <div>
     
      <MDBBtn onine rounded size="sm" color="white" className="px-2">
      <i href="#win" className="fa fa-th-large mt-0"></i>
      </MDBBtn>

      <MDBBtn outline rounded size="sm" color="white" className="px-2">
      <i className="fa fa-columns mt-0"></i>
      </MDBBtn>

    </div>

  <h4><b>{props.Mainheading}</b></h4>

    <div>


      <MDBBtn outline rounded size="sm" color="white" className="px-2 py-2">
      <i  onClick ={props.toggle} className="fas fa-plus mt-0"> {props.formheading}</i>
      </MDBBtn>

    </div>

  </MDBCardHeader>

    
    <MDBCardBody cascade>
    
    <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={props.search} />
    <br/>
    <MDBTable bordered reponsive fixed striped  searchTop>
    
    <MDBTableHead >
    
      <tr>
        <th> {props.ID} </th>
        <th>{props.Date}</th>
        <th>{props.Reason}</th>
        <th>{props.Comments}</th>
        <th>{props.money}</th>
        <th>{props.Status}</th>
        {props.Actions ?(<th>{props.Actions}</th>):("")}
        
      </tr>
      
    </MDBTableHead>
    
    <MDBTableBody>
      
      {props.data}
      
    </MDBTableBody>
  </MDBTable>

        </MDBCardBody>
  </MDBCard>
          
  );
};

export default Tables;