import { Card, Rate } from 'antd'
import Index from './index'

const fakeData = [
	{
		"id": 1001,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	},
	{
		"id": 2002,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	},
	{
		"id": 3003,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	},
	{
		"id": 4004,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	},
	{
		"id": 5005,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	}
]

export default () => (
	<Index>
		{
			fakeData.map((data, index) => (
				<div key={data.id} className="item-group">
					<Card title={`${data.id} - ${data.biz_name}`} extra={<a href="#">More</a>} style={{ width: 500 }}>
						<img src="//via.placeholder.com/140x100" />
						<p>{ data.price_range }</p>
						<div>
							<span>
								<Rate onChange={()=> {}} value={data.rating} />
								{data.rating && <span className="ant-rate-text">{data.rating} stars</span>}
							</span>
						</div>
						<p>{ data.city }</p>
					</Card>
				</div>
			))
		}
	</Index>
)
