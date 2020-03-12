import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
const App = () => {
  const [students, setStudents] = useState({
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

  const getStudents = async () => {
    const result = await axios.get('http://localhost:3000/api/students');
    setStudents(result.data)
  }
  const addBear = async (bear) => {
    axios.post('http://localhost:3000/api/students', {
      name,
      surname,
      Major,
      GPA
    });
    getStudents();
  }
  const putStudent = (id) => {
    axios.put(`http://localhost:3000/api/students/${id}`, {
      name,
      surname,
      Major,
      GPA
    });
    getStudents()
  }
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:3000/api/students/${id}`);
    getStudents()
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
  const printStudents = () => {
    if (students && students.length) {
      return (
        students.map((item) => (
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Major</th>
              <th>GPA</th>
              <th>Method</th>
            </tr>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.Major}</td>
              <td>{item.GPA}</td>
              <td><button onClick={() => putStudent(item.id)}>update</button>
                <button onClick={() => deleteStudent(item.id)}>delete</button></td>
            </tr>
          </table>

        ))
      )
    }
  }
  useEffect(() => {
    getStudents();
  })
  return (
    <>
      {printStudents()}
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
        <br />
        <button type="submit">add </button>
      </form>
    </>
  );
}

export default App;
