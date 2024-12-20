

// const RadioComponent = () => {
//   return (
//     <div>
//       <div className="input-control radio-groups">
//           <label htmlFor="">Gender</label>
//           <div>
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               id="male"
//               onChange={onHandleChange}
//               onBlur={isFormValidOnBlur}
//             />
//             <label htmlFor="male" className="radio-btns">
//               Male
//             </label>
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               id="female"
//               onChange={onHandleChange}
//               onBlur={isFormValidOnBlur}
//             />
//             <label htmlFor="female" className="radio-btns">
//               Female
//             </label>
//           </div>
//         </div>
//         {errorFields.gender && <p className='danger'>gender is required</p>}
//     </div>
//   )
// }
import React from 'react';

const RadioComponent = ({label, value, name, options=[], onChange, error}) => {
  return (
    <div>
      <div className="input-control radio-groups">
      <label >{label}: </label>
        <div>
        {options.map((option) => (
        <div key={option.value}>
        <input
              type="radio"
              name={name}
              value={option.value}
              id={option.value}
              checked={value===option.value}
              onChange={onChange} />

            <label htmlFor={option.value} className='radio-btns'>{option.label}
            </label>
            </div>
        ))}
        </div>
        </div>
        {error && <p className='danger'>{label} is required</p>}
    </div>
)}

export default RadioComponent

