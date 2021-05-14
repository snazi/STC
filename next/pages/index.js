import {directories} from '../datas/directory';

const Home = () => {

  return (
    <div className="root">
      <nav className="p-5 flex flex-row justify-between">
        <div className="max-w-logo-max">
          <img src="/sextoy.png"/>
        </div>
        <ul className="flex flex-row">
          { directories.map(item => (
            <li className='px-2' key={item.name}>
              <a>
                <span className="capitalize text-xl text-red-500">
                  {item.name}
                </span>
              </a>
            </li>
          )) }
        </ul>
      </nav>
    </div>  
  )
}

export default Home;