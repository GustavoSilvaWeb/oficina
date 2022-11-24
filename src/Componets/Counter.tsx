import { useState } from "react"
function Counter(){
    const [Counter, setCounter] = useState(0)

return(

<div>
 
 <button onClick={()=>setCounter(Counter + 1)}>Adicionar</button>
 <h1>{Counter}</h1>

</div>


)




}
export default Counter