import React, { useState } from 'react'

const Input = () => {
  const [description, setDescription] = useState<string>('')

  const clearInput = () => {
    setDescription('')
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const data = new FormData(target)
    console.log(description)
    console.log(data)
    clearInput()
  }

  const handleChange = (e: any) => {
    setDescription(e.target.value)
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        id="description"
        type="text"
        value={description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  )
}

export default Input
