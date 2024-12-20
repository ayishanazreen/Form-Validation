import React, {useState} from 'react';
import './App.css';
import TextInput from './Components/TextInput';
import RadioComponent from './Components/RadioComponent';
import CheckBoxComp from './Components/CheckBoxComp';
import DropDownComp from './Components/DropDownComp';
import AutoCompleteComp from './Components/AutoCompleteComp';

function App() {
  const currentDate = new Date().toISOString().split("T")[0];
    const [input,setInput]= useState({
      f_name:"",
      email:"",
      gender:"",
      country:"",
      date:"",
      skills:[],
    });

    const [errorFields, setErrorFields]=useState({
      f_name:false,
      email:false,
      gender:false,
      country:false,
      date:false,
      skills:false,
    })

    const genderOptions=[
      {value: "male", label:"Male"},
      {value: "female", label:"Female"}
    ]

    const skillOptions=[
      {value: "JavaScript", label:"JavaScript"},
      {value: "React", label:"React"},
      {value: "HTML", label:"HTML"},
      {value: "css", label:"CSS"},
    ]

    const countryOptions=[
      {value:"",label:"Select"},
      {value:"india",label:"India"},
      {value:"uae",label:"UAE"},
      {value:"qatar",label:"Qatar"},
    ]
    const isFormValidOnSubmit=()=>{
      const errors={
        f_name:false,
        email:false,
        gender:false,
        country:false,
        date:false,
        skills:false,
      };
      if (input.f_name===""){
        errors.f_name=true;
      }
      if (input.email===""){
        errors.email=true;
      }
      if (input.gender===""){
        errors.gender=true;
      }
      if (input.country===""){
        errors.country=true;
      }
      const currentDate = new Date().toISOString().split("T")[0];
      if (input.date==="" || input.date < currentDate){
        errors.date=true;
      }
      if (input.skills.length === 0){
        errors.skills=true;
      }
      setErrorFields(errors);
    if(Object.values(errors).some((error) => error === true))
    {
      return false;
    }
     return true;
    }

    const isFormValidOnBlur=(event)=>{
      
      const {name, value}=event.target;
      let error=false;
      if(name==="f_name" && value ==="")
       {
       error=true;
       }
       else if(name==="email" && value==="")
       {
         error=true;
       }
       else if(name==="gender" && value==="")
       {
         error=true;
       }
       else if(name==="country" && value==="")
       {
         error=true;
       }
       else if(name==="date" && value==="" || value < currentDate ) 
       {
         error=true;
       }
       else if(name==="skill" && type==="checkbox")
       {
        error=input.skills.length===0;
       }
       setErrorFields((prev =>({
         ...prev,
         [name]:error
       })));
     }

    const onHandleChecked =(event)=>{
      let newSkills=[...input.skills];
      if(event.target.checked){
        newSkills.push(event.target.value);
      }
      else{
        newSkills=newSkills.filter((skill) =>skill!==event.target.value);
      }
    setInput((prev) =>({
      ...prev,
      [event.target.name]:newSkills,
      
    }));
    setErrorFields((prev)=>({
      ...prev,
      skills:newSkills.length==0,
    }))
    console.log(newSkills);
     };

    const onHandleChange =(event)=>{
      const {name, value} =event.target;
      setInput((prev) =>({
        ...prev,
         [name] : value}))
         isFormValidOnBlur(event);
    }

    const onHandleSubmit =(event)=>{
      event.preventDefault();
      if(isFormValidOnSubmit()){
        alert("form submitted");

        return;
      }
      // console.log("Input data:", input);
      // console.log(Array.from(isCheckedItems.entries()));
    }
  
    
    return (
      <div className='form-container'>
      <form onSubmit={onHandleSubmit}>
        <h1>Register</h1>
        <p className='caption'>Please fill the form</p>

        <TextInput label="FirstName"
         name ="f_name"
         value={input.f_name} 
         onChange={onHandleChange} 
         onBlur={isFormValidOnBlur}
         error={errorFields.f_name}
         />
        {/* <div className='input-control'>
          <label htmlFor="f_name">First Name:
          <input
              type="text"
              id="f_name"
              onChange={onHandleChange}
              onBlur={isFormValidOnBlur}
              name="f_name"
            />
          </label>
          </div>
          {errorFields.f_name && <p className='danger'>First Name is required</p>} */}
         
         <TextInput label="Email"
         name ="email"
         value={input.email} 
         onChange={onHandleChange} 
         onBlur={isFormValidOnBlur}
         error={errorFields.email}
         />


        {/* <div className='input-control'>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              onChange={onHandleChange}
              onBlur={isFormValidOnBlur}
              name="email"
            />
          </label>
          </div>
          {errorFields.email && <p className='danger'> Email is required</p>} */}
       <RadioComponent 
          label="Gender"
          name="gender"
          value={input.gender}
          options={genderOptions}
          onChange={onHandleChange} 
          error={errorFields.gender}/>

        {/* <div className="input-control radio-groups">
          <label htmlFor="">Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={onHandleChange}
              onBlur={isFormValidOnBlur}
            />
            <label htmlFor="male" className="radio-btns">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={onHandleChange}
              onBlur={isFormValidOnBlur}
            />
            <label htmlFor="female" className="radio-btns">
              Female
            </label>
          </div>
        </div>
        {errorFields.gender && <p className='danger'>gender is required</p>} */}

        <CheckBoxComp 
          label="Skills"
          name="skills"
          value={skillOptions.value}
          skills={skillOptions}
          onChange={onHandleChecked}
          checked={input.skills.includes(skillOptions.value)}
          onBlur={isFormValidOnBlur}
          error={errorFields.skills}
          />
          
        {/* <label>Skills</label>
       <div className='input-control checkbox-control'>
        <div>
          <input type='checkbox'
          name="skills"
          value="javascript"
          id="javascript"
          onChange={onHandleChecked}
          onBlur={isFormValidOnBlur}/>
          <label htmlFor='javascript' className='checkbox-label'>JavaScript</label>

          <input type='checkbox'
          name="skills"
          value="html"
          id="html"
          onChange={onHandleChecked}
          onBlur={isFormValidOnBlur}/>
          <label htmlFor='html' className='checkbox-label'>HTML</label>

          <input type='checkbox'
          name="skills"
          value="react"
          id="react"
          onChange={onHandleChecked}
          onBlur={isFormValidOnBlur}/>
          <label htmlFor='react' className='checkbox-label'>React</label>

          <input type='checkbox'
          name="skills"
          value="angular"
          id="angular"
          onChange={onHandleChecked}
          onBlur={isFormValidOnBlur}/>
          <label htmlFor='angular' className='checkbox-label'>Angular</label>
        </div> */}


            {/* {skills.map((item) => (
              <label key={item.id} className='checkbox-label'>
                <input
                  type="checkbox"
                  value={item.id}
                  className='checkbox-input'
                  onChange={onHandleChecked}
                  onBlur={isFormValidOnBlur}
                  checked={isCheckedItems.get(String(item.id)) || false}
                />
                {item.value}
              </label>
            ))} */}
         
           <DropDownComp 
            label ="Country"
            name="country"
            Countries={countryOptions}
            value={input.country}
            onChange={onHandleChange}
            onBlur={isFormValidOnBlur}
            error={errorFields.country}
           /> 
          {/* <div className='input-control dropdown-section'>
          <label>Country: </label>
            <select onChange={onHandleChange} 
            name="country" 
            onBlur={isFormValidOnBlur}>

              <option value="">Select</option>
              <option value="UAE">UAE</option>
              <option value="Qatar">Qatar</option>
              <option value="India">India</option>
            </select>
          </div>
          {errorFields.country && <p className='danger'>Country is required</p>}*/}

          <div className='input-control'>
          <label>Date:</label>
          <input type="date" onChange={onHandleChange} name="date" onBlur={isFormValidOnBlur}/>
          </div>
          {errorFields.date && <p className='danger'>date is required</p>}  
      
    
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <div className='auto-container'>
        <AutoCompleteComp/>
      </div>
      </div>
      )}

export default App
