import { useGlobalContext } from '../context';

const Favorite = () => {
  
  const { favorites, removeFav, select } = useGlobalContext();

  return <section className='favorites'>
      <div className='favorites-content'>
        <h5>Favorites</h5>
          <div className='favorites-container'>
          {favorites.map((item) => {
            const { idMeal, strMeal: title, strMealThumb: image } = item;
            return <div key={idMeal} className='favorites-item'>
              <img src={image} className='favorites-img img' onClick={() => select(idMeal, true)} />
              <button className='remove-btn' onClick={() => removeFav(idMeal)}>Remove</button>
            </div>
           })
         } </div>
        </div>
    </section>
};

export default Favorite;

//Here we have a problem we are looking directly from all the meals when choosing the favorites.
// So we need to call the favorites array into the other in context 
            