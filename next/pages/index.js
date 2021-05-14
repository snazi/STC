import { directories, socialDirectory } from '../datas/directory';

const Home = () => {

  return (
    <div className="first-page">
      <nav className="p-5 flex flex-row justify-between">
        <div className="max-w-logo-max">
          <img src="/images/sextoy.png" />
        </div>
        <ul className="flex flex-row">
          {directories.map(item => (
            <li className='px-2' key={item.name}>
              <a>
                <span className="capitalize text-xl text-red-500">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section>
        <div className="container mx-8 flex flex-row mb-24">
          <div className="pt-14">
            <p className="capitalize text-3xl text-red-500">play with</p>
            <div className="max-w-6xl pt-3">
              <img src="/images/sextoy.png" alt="sextoy logo"/>
            </div>
            <div className="pt-3">
              <p className="text-3xl text-red-500 text-justify">
                Sextoy is community driven, fair launched DeFi Token for adults.<br/>
                With each Sextoy trade.
              </p>
              <p className="text-3xl text-red-500 text-justify">
                - we stick passive yield rewards into... your wallet <br/>
                - liquidity is generated and sent to the Pancake Swap LP <br/>
                - burns to bring you to climax
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r to-green-400 from-blue-500">
        <div className="flex flex-row h-96 content-around justify-center items-end">
          {socialDirectory.map(item => (
            <button className={`
              max-h-20 shadow-2xl mr-3 mb-6
              border-2 border-${item.color} bg-${item.color} 
              text-3xl p-4 w-80 rounded-r-full text-white`
            } key={item.name}>
              {item.name}
            </button>
          ))}
        </div>
      </section>
    </div>  
  )
}

export default Home;