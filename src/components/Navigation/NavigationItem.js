const NavigationItem = ({ id, title, isActive }) => {
  return (
    <li>
      <div className='nav-item'>
        <div className='nav-item-circle'>{id}</div>
        <div className='nav-item-info'>
          <p className='nav-item-step'>step {id}</p>
          <p className='nav-item-title'>{title}</p>
        </div>
      </div>
    </li>
  );
};

export default NavigationItem;
