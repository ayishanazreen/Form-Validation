import React from 'react'

const CheckBoxComp = ({label, name, skills=[], onChange, onBlur,error}) => {
  return (
    <div>
      <div className='input-control checkbox-control'>
        <label>{label}</label>
        {skills.map((skill) => (
        <div key={skill.value}>
          <input type='checkbox'
          name={name}
          value={skill.value}
          onChange={onChange}
          onBlur={onBlur}/>
          <label className='checkbox-label'>{skill.label}</label>
      </div>
    ))}
</div>
    {error && <p className='danger'>Choose atleast one skill</p>}
    </div>
  )}

export default CheckBoxComp
