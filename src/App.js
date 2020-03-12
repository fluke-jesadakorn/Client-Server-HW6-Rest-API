import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [bears, setBears] = useState({
    id: "",
    name: "",
    surname: "",
    Major: "",
    GPA: "",
  })
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [Major, setMajor] = useState();
  const [GPA, setGPA] = useState();

  const getBears = async () => {
    const result = await axios.get('http://localhost:3000/api/students');
    setBears(result)
  }
  const addBear = async (bear) => {
    const result = await axios.post('http://localhost:3000/api/students', {
      name,
      surname,
      Major,
      GPA
    });
  }
  const putBear = (id) => {
    axios.post();
  }
  const deleteBear = () => {
    axios.delete();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBear();
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleSurname = (e) => {
    setSurname(e.target.value)
  }
  const handleMajor = (e) => {
    setMajor(e.target.value)
  }
  const handleGPA = (e) => {
    setGPA(e.target.value)
  }

  useEffect(() => {
    getBears();
  })

  return (
    <>
      <pre>{JSON.stringify(bears)}</pre>
      <pre>{name}</pre>
      <pre>{surname}</pre>
      <pre>{Major}</pre>
      <pre>{GPA}</pre>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleName} />
        </label>
      </form>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Surname:
          <input type="text" name="name" onChange={handleSurname} />
        </label>
      </form>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Major:
          <input type="text" name="name" onChange={handleMajor} />
        </label>
      </form>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          GPA:
          <input type="text" name="name" onChange={handleGPA} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
