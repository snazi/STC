import {tokenomicsDirectories} from '../../datas/directory';

const Tokenomics = () => {
  return (
    <div className="third-page">
      <section>
        <div className="p-5 flex flex-row justify-center">
          {tokenomicsDirectories.map(item => (
            <button className={`
              max-h-20 shadow-2xl mr-3 mb-6
              border-2 border-${item.color} bg-${item.color} 
              text-2xl p-4 w-80 rounded-r-full text-red-500`
            } key={item.name}>
              {item.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Tokenomics;