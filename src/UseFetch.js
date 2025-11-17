import { useEffect, useState } from "react"


 export  const useFetch= (url) => {
   
  const [finalData , setFinalData] = useState({});

   async function getdeDetails() {
    const respose = await fetch(url);
    const json = await respose.json()
   setFinalData(json)
   
   }

  useEffect(()=>{
    getdeDetails()
  },[])

  return {
    finalData
  }

 }

 export default useFetch