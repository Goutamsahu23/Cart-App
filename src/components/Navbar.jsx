import { GiShoppingCart } from 'react-icons/gi'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Navbar = () => {

  const { cart } = useSelector((state) => state)
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to='/'>
          <div className='ml-5'>
            <img src="https://png2.cleanpng.com/sh/833af19fa911c109b8a9113a6c85d878/L0KzQYm3VMAyN5NsfZH0aYP2gLBuTfxwb5CyeuRqbnSwg8r0gv9tNZd0huY2cnHxdLF0Tflkd594RadqY0C8cYm5hMMza2c7RqI9M0m6Roa5UcUzOmY8Sas5Nki5RXB3jvc=/kisspng-logo-brand-symbol-font-random-icons-5ac09a82d32c66.043976521522571906865.png" width={50} className='h-14' />
          </div>
        </NavLink>


        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to='/'><p>Home</p></NavLink>
          <div className='relative'>
              <NavLink to='/cart'>
                <GiShoppingCart className='text-2xl' />
                {cart.length > 0 && <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>}   
              </NavLink>
          </div>

        </div>
      </nav>
    </div>
  )
};

export default Navbar;
