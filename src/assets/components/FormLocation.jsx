import getRandonNumber from "../../utils/getRandomNumber"

const FormLocation = ({setIdLocation}) => {
   
    const handleSubmit = e =>{
     e.preventDefault()  
     const inputValue = e.target.inputId.value.trim()
     if(inputValue ==='' || inputValue==='0'){
      setIdLocation(getRandonNumber(126))                       
    } else {
      setIdLocation(inputValue)
    }
      e.target.inputId.value = ''
   }
     return (
    <form className="cuadrar__form" onSubmit={handleSubmit}>
        <input id="inputId"  type="text" />
        <button >Search</button>
    </form>
  )
}

export default FormLocation