import {directories} from '../datas/directory';

const Home = () => {

  return (
    <div className="root">
      <nav className="p-5 flex flex-row justify-between">
        <div className="max-w-logo-max">
          <img src="/images/sextoy.png"/>
        </div>
        <ul className="flex flex-row">
          { directories.map(item => (
            <li className='px-2' key={item.name}>
              <a>
                <span className="capitalize text-xl text-500">
                  {item.name}
                </span>
              </a>
            </li>
          )) }
        </ul>
      </nav>

      <section>
        <div className="mt-10 flex flex-col justify-center">
          <div>
            <h3 className="">Token Address: gfdsg345frs4tregs4t4s4t4g</h3>
          </div>
          <div>
            <h3>The threesome of celestial bodies to send you to the heavens</h3>
          </div>
          <div>
            <img src="/images/about.png"/>
          </div>
        </div>
      </section>
            

    </div>  
  )
}

export default Home;