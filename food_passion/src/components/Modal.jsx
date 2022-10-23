import { useGlobalContext } from '../context';

const Modal = () => {
  
  const { selected, deselect } = useGlobalContext();
  const { strMeal: title, strMealThumb: image, strInstructions: inst, strSource: source } = selected;

  return <aside className='modal-overlay' >
      <div className='modal-container'>
      <img src={image} className='img modal-img'/>
        <div className='modal-content'>
          <h1>{title}</h1>
          <p>Cooking Instructions :</p>
          <p>{inst}</p>
          <a href={source} target='_blank'>Original Source</a>
          <button className='btn btn-hipster clos-btn' onClick={deselect}>Close</button>
        </div>
      </div>
    </aside>
};

export default Modal;

