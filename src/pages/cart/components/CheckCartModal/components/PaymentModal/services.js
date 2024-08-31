/** @format */

import { notification } from 'antd'

import moment from 'moment'
import 'moment/locale/es'

import { CartPrice, FirtsUppercase } from '../../../../../../components/Hooks/GeneralFuncions'

import { db } from '../../../../../../firebase'

const UpdateStock = async (i) => {
	let response
	const data = db.collection('laniakea-store-db')

	await data
		.get()
		.then((r) => {
			if (r.docs.length > 0) {
				r.docs.forEach((item) => {
					i.forEach((element) => {
						if (item.id === element.id) {
							let updateStock = data.doc(element.id)
							updateStock.update({ stock: item.data().stock - element.quantity })
							response = true
						}
					})
				})
			} else {
				notification['warning']({
					message: 'Aviso:',
					description: '¡Error, problemas con la consulta!.',
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

const Payment = async (i, cart, cartQuantity) => {
	let response

	const order = db.collection('laniakea-store-orders')

	moment.locale('es')
	const date = FirtsUppercase(moment(new Date()).format('LLLL'))

	const dataOrder = {
		user_info: { ...i },
		fecha: date,
		cart_items: cart,
		products_ordered: cartQuantity,
		total: CartPrice(cart),
	}

	await order
		.add(dataOrder)
		.then(async (r) => {
			if (r) {
				await UpdateStock(cart).then((e) => {
					if (e) {
						response = e
					}
				})
			}
			notification['success']({
				message: `Notificación`,
				description: `Su orden ha sido procesada exitosamente.`,
			})
		})
		.catch(() => {
			notification['error']({
				message: `Aviso:`,
				description: `Ha ocurrido un error, intente más tarde`,
			})
		})
	return response
}
export default Payment
