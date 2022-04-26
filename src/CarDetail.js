
import { useParams } from "react-router-dom";
import useAxios from "./hooks/useAxios";

export default function CarDetail() {
  const params = useParams();
  const { loading, response: { data }, error } = useAxios(`https://rent-cars-api.herokuapp.com/customer/car/${params.id}`);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {(!loading && !error) && (
        <>
          <div>Car Detail</div>
          <img src={data.image} alt={data.name} width="300"/>
          <div>{data.name}</div>
          <div>{data.price}</div>
        </>
      )}
    </div>
  )
}