import React, { useState } from 'react'

const AutoCompleteComp = () => {
    let users=['aju', 'rahul', 'john']
    const [input, setInput]=useState("");
    const[filteredText, setFilteredText]=useState("");

    const handleInputChange=(event)=>{
        const Text=event.target.value;
        setInput(Text);
        
    }
    const onHandleClick =()=>{
        const filterdInput =users.filter((data)=>{
            if(data==="")
            {
              return;
            }
            else
            {
               return data.startsWith(input);
            }});
            setFilteredText(filterdInput);
            // console.log(filterdInput);
            // console.log(input);
    
    }
  return (
    <>   
        <h1>Searching</h1>
        <input type="text" name='search' value={input} onChange={handleInputChange}/>
        <button className='search-btn' onClick={onHandleClick}>Search</button>
        <ul>
            {users.map((user) => (
                <li>{user}</li>
            ))}
        </ul>

       <p>Search Results: {filteredText}</p>
    </>
  )
}

export default AutoCompleteComp;
