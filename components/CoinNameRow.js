import { useContext } from "react"
import { CoinMarketContext } from "../context/context"
import Image from 'next/image'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'

const styles = {
	coinNameRow: `flex items-center`,
	buyButton: `bg-[#1a1f3a] text-[#6188ff] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
}
const CoinNameRow = ({ name, icon, clicked }) => {
	const { openModal } = useContext(CoinMarketContext)
	const coinIcon = () => {
		switch (name) {
			case 'Bitcoin':
				return (
					<Image src={btc} className="rounded-full" width={20} height={20} />
				)
			case 'Ethereum':
				return (
					<Image src={eth} className="rounded-full" width={20} height={20} />
				)
			case 'Tether':
				return (
					<Image src={usdt} className="rounded-full" width={20} height={20} />
				)
			case 'BNB':
				return (
					<Image src={bnb} className="rounded-full" width={20} height={20} />
				)
			case 'USD Coin':
				return (
					<Image src={usdc} className="rounded-full" width={20} height={20} />
				)
			case 'XRP':
				return (
					<Image src={xrp} className="rounded-full" width={20} height={20} />
				)
			case 'Cardano':
				return (
					<Image
						src={cardano}
						className="rounded-full"
						width={20}
						height={20}
					/>
				)
			case 'Terra':
				return (
					<Image src={terra} className="rounded-full" width={20} height={20} />
				)
			case 'Solana':
				return (
					<Image src={solana} className="rounded-full" width={20} height={20} />
				)
			case 'Avalanche':
				return (
					<Image
						src={avalanche}
						className="rounded-full"
						width={20}
						height={20}
					/>
				)
			default:
				return (
					<Image
						src={btc}
						className="rounded-full"
						height={20}
						width={20}
						alt=""
					/>
				)
		}
	}
	return (
		<div className={styles.coinNameRow}>
			<div className="mr-3 flex" onClick={clicked}>
				<div className="mr-2">{coinIcon()}</div>
				{name}
			</div>

			<p>
				{(name === 'Bitcoin' ||
					name === 'Tether' ||
					name === 'Ethereum') && (
						<span className={styles.buyButton} onClick={() => openModal()}>Buy</span>
					)}
			</p>
		</div>
	)
}

export default CoinNameRow
