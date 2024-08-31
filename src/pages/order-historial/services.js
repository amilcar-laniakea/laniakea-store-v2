/** @format */

import { notification } from 'antd'

import { db } from '../../firebase'

const GetOrders = async () => {
	let response

	const orders = db.collection('laniakea-store-orders')

	await orders
		.get()
		.then((r) => {
			if (r.docs.length > 0) {
				let array = []
				r.docs.map((item) => {
					return array.push({ ...item.data(), id: item.id })
				})
				response = array
			} else {
				notification['warning']({
					message: 'Aviso:',
					description: '¡No se encontraron registros!.',
				})
			}
		})
		.catch(() => {
			notification['error']({
				message: 'Aviso:',
				description: '¡Revisa tu servicio de internet!.',
			})
		})
	return response
}
export default GetOrders
