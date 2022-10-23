import { useGlobalContext } from '../context';

const Favorite = () => {
  
  const { favorites } = useGlobalContext();
  const {strMeal: title, strMealThumb: image} = favorites;

  return (
    <div className=''>
      <h1>Favorites</h1>
        <div>
          <img src={image} />
          <p>{title}</p>
        </div>
    </div>
)
};

export default Favorite;