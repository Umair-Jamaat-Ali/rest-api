'use client'
import axios from "axios";

export default function Home() {


  async function check_api() {
    
    await axios.post('http://localhost:3000/api/testing-api' , {name:'Umair Jamaat Ali'})
    .then((result) => {
        console.log(result.data)
    }).catch((err) => {
        console.log(err)
    });
 }

  return (
    <>
    <div>
      <h1>Testing API</h1>
    </div>
    <div>
      <button onClick={check_api}>Check Post Api</button>
    </div>
    </>
  );
}
