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
  const [form, setForm] = useState();

  const getBears = async () => {
    const result = await axios.get('http://localhost:3000/api/students');
    setBears(result)
  }
  const addBear = (bear) => {
    axios.post(bear);
  }
  const putBear = (id) => {
    axios.post();
  }
  const deleteBear = () => {
    axios.delete();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChange = (e) => {
    setForm(e.target.value)
  }

  useEffect(() => {
    getBears();
  })

  return (
    <>
      <pre>{JSON.stringify(bears)}</pre>
      <pre>{form}</pre>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
