import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [savedData, setSavedData] = useState([])

  function changeFirstName(event){
    setFirstName(event.target.value)
  }
  function changeLastName(event){
    setLastName(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {firstName, lastName}
    const allData = [...savedData, formData]
    setSavedData(allData)
    setFirstName("")
    setLastName("")
    console.log(allData)
  }
  const submissions = savedData.map((data) => {
    return (
      <div>
        {data.firstName} {data.lastName}
      </div>
    );
  })
  return (
    <div>
    <form>
      <input type="text" onChange={changeFirstName} />
      <input type="text" onChange={changeLastName} />
      <button type="submit" onClick={handleSubmit} >Submit</button>
    </form>
    <h2>Submissions</h2>
    {submissions}
    </div>
  );
}

export default Form;
