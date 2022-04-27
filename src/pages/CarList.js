
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';


export default function CarList() {
  const navigate = useNavigate();
  const { loading, response, error } = useAxios('https://rent-cars-api.herokuapp.com/customer/car');

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  }

  return (
    <div>
      <h3>Car List</h3>
      <ol>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {(!loading && !error) && response.data.map((car) => (
          // <Link to={`/detail/{car.id}`}>
          <li key={car.id} onClick={() => handleClick(car.id)}>
            <div>{car.name}</div>
            <img src={car.image} alt={car.name} width="300"/>
          </li>
          // </Link>
        ))}
      </ol>
    </div>
  )
}
