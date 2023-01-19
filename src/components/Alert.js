import React from 'react'

function Alert(props) {
  const capitalize = (word)=>{
    const lower = word?.toLowerCase();
    //console.log(lower);
    return lower?.charAt(0).toUpperCase() + lower?.slice(1)
  }
  return (
    props.alert &&
    <div className='container mt-3'>
       <div className={`alert alert-${props.alert.type} alert-dismissible fad show`} role="alert">
            {capitalize(props.alert.type)} : {props.alert.msg}
        </div>    
    </div>
  )
}

export default Alert

