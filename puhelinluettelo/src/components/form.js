import React from 'react'

const Form = ({onSubmit,inputValue1,inputValue2,onChangeName,onChangeNumber,text}) =>
  <form onSubmit={onSubmit}>
        <div>
          name: <input value={inputValue1} onChange={onChangeName}/>
        </div>
        <div>
          number: <input value={inputValue2} onChange={onChangeNumber}/>
        </div>
        <div>
          <button type="submit">{text}</button>
        </div>
      </form>

export default Form
