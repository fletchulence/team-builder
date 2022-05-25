import React from 'react';

export default function PersonForm(props){

  const { vals, update, submit } = props;

  const onChange = (evt) => {
   const name = evt.target.name
   const value = evt.target.value
    update(name, value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }

  // const initialFormVals = {
  //   username: '',
  //   email: '',
  //   role: '',
  // }

  return(
    <form className='personForm' onSubmit={onSubmit}>
      <div className='inputs'>
        <label> Username
          <input 
            type='text'  //
            name='username'
            value={vals.username}
            onChange={onChange}
          />
        </label>
        <label> Email
          <input 
            type='text'  //TODO: change this back to email
            name='email'
            value={vals.email}
            onChange={onChange}
          />
        </label>
        <label> Favorite Sport
          <select
            /* type='unneeded' */
            name='role'
            value={vals.role}
            onChange={onChange}
          >
            <option value=''> -- Select A Role -- </option>
            <option value='Basketball'> Basketball </option>
            <option value='Baseball'> Baseball </option>
            <option value='Cricket'> Cricket </option>
            <option value='Foosball'> Foosball </option>
            <option value='Tennis'> Tennis </option>

          </select>
        </label>

        {/* <label> First Name
          <input 
            type='text'  //
            name='username'
            value={vals.username}
            onChange={onChange}
          />
        </label>
        <label> Last Name
          <input 
            type='text'  //
            name='username'
            value={vals.username}
            onChange={onChange}
          />
        </label> */}
        <div className="sumbit">
          <button> S u b m i t </button>
        </div>
      </div>
    </form>
  )


}