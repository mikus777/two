import React, { useState } from 'react'
import Content from "./components/content"
import Form from "./components/form"
import Header from "./components/header"
import Search from "./components/search"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const allPersons = persons

  const addPerson = (event) => {
    let isAlready=false
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].name == newName) {
        isAlready=true
      }
    }

    if (isAlready==true) {
      event.preventDefault()
      alert(`${newName} is already added to phonebook`)
      setPersons(persons)
    }

    else {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
    const regex = new RegExp( newSearch, 'i' );
    if (regex=='') {
      setPersons(allPersons)
    }
    else {
      const foundPersons = () => persons.filter(person => person.name.match(regex))
      setPersons(foundPersons)
    }
  }

  return (
    <div>
      <Search inputValue={newSearch} onChange={handleSearchChange}/>
      <Header title = "Phonebook"/>
      <Form onSubmit={addPerson} inputValue1={newName} inputValue2={newNumber} 
        onChangeName={handleNameChange} onChangeNumber={handleNumberChange} text="add"/>
      <Header title = "Numbers"/>
      <Content contents={persons}/>
    </div>
  )

}

export default App
