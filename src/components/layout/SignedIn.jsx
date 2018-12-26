import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/action/authActions';
import ReactTooltip from 'react-tooltip';

const SignedIn = (props) => {
  console.log(props)
  return (
    <ul className="right">
      <li><NavLink to='/addnote'>New Notes</NavLink></li>
      <li><a href='/' onClick={props.signOut}>Sign Out</a></li>
      <li><NavLink to='/' className="btn btn-floating pink lighten-1" data-tip='' data-for='init'>
      { props.profile.initials }</NavLink><ReactTooltip id='init' 
      getContent={()=> { 
        const a = [props.profile.firstname, props.profile.lastname]
        const b = a.join().replace(',',' ')
        return b}} /></li>
    </ul>
    
  );
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signOut: ()=> dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedIn);
