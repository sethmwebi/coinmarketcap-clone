import React from 'react'
import converter from "../assets/converter.png"
import btc from "../assets/btc.png"
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'
import Image from "next/image"

const styles = {
	converter: `flex items-center justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl `,
	convertButton: `bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60`
}

const CMCPriceConverter = ({ from, to, fromSymbol, toSymbol, fromLogo, toLogo, price}) => {
	const coinIcon = () => {
		switch(from){
			case 'Bitcoin':
				return (
					<Image src={btc} className="rounded-full" width={50} height={50}/>
				)
			case 'Ethereum':
				return (
					<Image src={eth} className="rounded-full" width={50} height={50}/>
				)
			case 'Tether':
				return (
					<Image src={usdt} className="rounded-full" width={50} height={50}/>
				)
			case 'BNB':
				return (
					<Image src={bnb} className="rounded-full" width={50} height={50}/>
				)
			case 'USD Coin':
				return (
					<Image src={usdc} className="rounded-full" width={50} height={50}/>
				)
			case 'XRP':
				return (
					<Image src={xrp} className="rounded-full" width={50} height={50}/>
				)
			case 'Cardano':
				return (
					<Image src={cardano} className="rounded-full" width={50} height={50}/>
				)
			case 'Terra':
				return (
					<Image src={terra} className="rounded-full" width={50} height={50}/>
				)
			case 'Solana':
				return (
					<Image src={solana} className="rounded-full" width={50} height={50}/>
				)
			case 'Avalanche':
				return (
					<Image src={avalanche} className="rounded-full" width={50} height={50}/>
				)
			default:
				return (
					<Image src={btc} className="rounded-full" height={50} width={50} alt=''/>
				)
		}
	}
	return (
		<div>
			<h2>{fromSymbol} to {toSymbol} Converter</h2>
			<br />
			<div className={styles.converter}>
				<div>
					<div className='flex'>
						<div className='avatar-container'>
							{fromLogo && coinIcon()}
						</div>
						&nbsp; &nbsp;
						<div>
							<p>{fromSymbol}</p>
							<h4>{from}</h4>
						</div>
					</div>
				</div>
				<div className='flex'>
					<p className="text-3xl">1</p>
					&nbsp; &nbsp;
					<div>
						<Image src={converter} width={40} height={40} alt=''/>
					</div>
					&nbsp;&nbsp;
					<div className="flex">
						{toLogo}
						&nbsp;&nbsp;
						<div>
							<p>{toSymbol}</p>
							<h4>{to}</h4>
						</div>
					</div>
				</div>
				<p className="text-3xl">${price}</p>
			</div>
			<div className={styles.convertButton}>Convert</div>
		</div>
	)
}

export default CMCPriceConverter