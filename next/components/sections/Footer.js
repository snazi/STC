const Footer = () => {
  return (
    <div className="bg-red-400 footer px-80 relative">
      <div className="p-10">
        <nav className="p-5 flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="max-w-logo-max mb-10">
              <img src="/images/sextoy_black.png" />
            </div>
            <div className="text-base">
              <p className="text-justify">
                Sextoy is community driven, fair launched DeFi Token for adults.<br/>
                With each Sextoy trade.
              </p>
              <p className="text-justify">
                - we stick passive yield rewards into... your wallet <br/>
                - liquidity is generated and sent to the Pancake Swap LP <br/>
                - burns to bring you to climax
              </p>
            </div>
          </div>
          <ul className="flex flex-row">
            <li className='px-16 uppercase text-xl'>
              <div className="flex flex-col">
                <span className="font-bold mb-10">
                  community
                </span>
                <span>
                  Telegram
                </span>
              </div>         
            </li>
            <li className='px-16 uppercase text-xl'>
              <div className="flex flex-col">
                <span className="font-bold mb-10">
                  Social
                </span>
                <span>
                  Twitter
                </span>
              </div> 
            </li>
            <li className='px-16 uppercase text-xl'>
              <div className="flex flex-col">
                <span className="font-bold mb-10">
                  Resources
                </span>
                <span>
                  Contract
                </span>
                <span>
                  Token
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-base px-16 py-10">
        <p>
          Copyright 2021 Sextoy
        </p>
      </div>
      <img className="hand-job" src="/images/footer.png"/>
    </div>
  )
}

export default Footer;