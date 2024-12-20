import React from 'react'

const DropDownComp = ({label, value, name, Countries, error, onChange, onBlur}) => {
  return (
    <div>
      <div className='input-control dropdown-section'>
         <label>{label} </label>
         <select onChange={onChange} name={name} onBlur={onBlur}>
             {Countries.map((country) => (
              <option key={country.value} value={country.value}>{country.label}</option>
             ))}
         </select>
        </div>
          {error && <p className='danger'>{label} is required</p>}
    </div>
  )
}

export default DropDownComp
