// import React,{useState ,useEffect} from "react";

// function app(){
//   const[formData ,setFormData]=useSate({
//     name:"",
//     email:"",
//     password:""
//   });
// // useEffect
// useEffect(()=>{
//   console.log("Form submitted Successfully!", formData)
// },[fromData])

// // input change

// }

import React,{useState ,useEffect} from "react";

const App = () => {
  return (
    <div>
      <form>
        <label>
            Name:<input type="text"></input>
        </label>
        <br/>
        <label>
          Email: <input type="email"></input>
        </label>
        <br />
        <label>
          Password: <input type="password"></input>
        </label>

      </form>


    </div>
  )
}

export default App