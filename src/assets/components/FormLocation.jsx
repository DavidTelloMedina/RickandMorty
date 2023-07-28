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
        <input id="inputId" style={{boxShadow:'1px 1px 10px'}} type="text" />
        <button style={{background:'darkblue',color:'white'}}>Search</button>
    </form>
  )
}

export default FormLocation