import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

export default function CarDetail() {
  const params = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    // console.log(params);
    // axios.get(`https://rent-cars-api.herokuapp.com/customer/car/${params.id}`)
    //   .then((response) => {
        
    //   })
  }, [params]);

  return (
    <div>Car Detail</div>
  )
}