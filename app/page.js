'use client'
import axios from "axios";

export default function Home() {


  async function check_api() {
    
    await axios.post( 'http://localhost:3000/api/testing-api' , {name:'Umair Jamaat Ali'} )
    .then((result) => {
        console.log(result.data)
    }).catch((err) => {
        console.log(err)
    });
 }


 async function check_get_api() {
  await axios.get(`http://localhost:3000/api/testing-api?cars=honda&color=red`)
  .then((result) => {
      console.log(result.data)
  }).catch((err) => {
      console.log(err)
  });
}


// async function check_get_api_next() {
//   let data = { cars: ['honda vr' ,'bmw'] , type: 'auto' }
//   // let jsonobj = JSON.stringify(obj)
//   let queryParams = new URLSearchParams(data).toString();

//   //  await axios.get(`http://localhost:3000/api/testing-api?cars=honda&type=auto`)
//   await axios.get(`http://localhost:3000/api/testing-api${queryParams}`)
//  .then((result) => {
//       console.log(result.data)
//   }).catch((err) => {
//       console.log(err)
//   });
// }

async function check_get_api_next() {
  let data = { cars: ['honda vr', 'bmw'], type: 'auto' };
  let queryParams = new URLSearchParams(data).toString();

  try {
    const response = await axios.get(`http://localhost:3000/api/testing-api?${queryParams}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


async function otherApis() {
  let data = {classes: [1,2,3,4,5,6,7,8,9,10], students: 353, teachers: ["umair", "kamran","suleman","azeem","khadija"]}
  let paramsData = new URLSearchParams(data).toString();

  try {
    let response = await axios.get(`http://localhost:3000/api/testing-api?${paramsData}`);
    console.log(response.data)
  } catch (error) {
    console.error(error);
  }
}

  return (
    <>
    <div>
      <h1>Testing API</h1>
    </div>
    <div>
      <button onClick={check_api}>Check Post Api</button>
      <br/>
      <button onClick={check_get_api}>Check Get Api</button>
      <br/>
      <button onClick={check_get_api_next}>Check Get Api through Object</button>
      <br/>
      <button onClick={otherApis}>Check Get Api through Object an other example</button>
    </div>
    </>
  );
}
