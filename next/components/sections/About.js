import { directories, aboutDirectories} from '../../datas/directory';

const About = () => {
  return (
    <div className="second-page h-screen">
      <nav className="p-5 flex flex-row justify-between bg-white">
        <div className="max-w-logo-max grayscale">
          <img src="/images/sextoy_black.png"/>
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
        <div className="mt-10 flex flex-col content-center justify-center">
          <div className="p-5">
            <h3 className="text-5xl text-center text-white">Token Address: gfdsg345frs4tregs4t4s4t4g</h3>
          </div>
          <div className="p-5">
            <h3 className="text-7xl text-center text-white">The threesome of celestial bodies <br/> to send you to the heavens</h3>
          </div>
          <div className="p-5">
            <img src="/images/about.png"/>
          </div>
          <div className="p-3 mt-20">
            <h3 className="text-6xl text-center text-white">Use Protection</h3>
          </div>
          <div className="p-1">
            <h3 className="text-4xl text-center text-white">Dev wallet locked 90% vested over 1 year</h3>
          </div>
          <div className="p-5 flex flex-row justify-center">
            {aboutDirectories.map(item => (
              <button className={`
                max-h-20 shadow-2xl mr-3 mb-6
                border-2 border-${item.color} bg-${item.color} 
                text-3xl p-4 w-80 rounded-r-full text-black`
              } key={item.name}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>   
  )
}

export default About;