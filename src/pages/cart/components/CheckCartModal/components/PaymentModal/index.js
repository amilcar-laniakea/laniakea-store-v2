/** @format */

import React, { useState } from 'react'

import { useHistory } from 'react-router'

import { Button, Modal, Form, Input, Row, Col } from 'antd'

import { ContextGlobalConsumer } from '../../../../../../context/Global'

import { Rules } from '../../../../../../components/Hooks/InputRules'

import Payment from './services'

import './style.scss'

const PaymentModal = (props) => {
	const history = useHistory()
	const { isCart, isCartQuantity, HandleClearCart } = ContextGlobalConsumer()
	const [paymentForm] = Form.useForm()
	const { TextArea } = Input
	const [isLoading, setLoading] = useState(false)

	const handleSetPayment = async (i) => {
		setLoading(true)
		await Payment(i, isCart, isCartQuantity).then(async (r) => {
			setLoading(false)
			props.handleModalPayment(false)
			if (r) {
				paymentForm.resetFields()
				await HandleClearCart()
				history.push('/order-success')
			}
		})
	}

	return (
		<>
			<Modal
				wrapClassName='cart-payment-modal-container'
				maskClosable={true}
				width='1024px'
				centered
				visible={props.visible}
				onCancel={() => props.handleModalPayment(false)}
				okText='Confirmar'
				cancelButtonProps={{ style: { display: 'none' } }}
				okButtonProps={{ style: { display: 'none' } }}>
				<br />
				<h2 className='cart-payment-modal-title'>Formulario de pago:</h2>
				<h4 className='cart-payment-modal-subtitle'>
					Complete los siguientes datos para finalizar su pedido
				</h4>
				<br />
				<Form name='paymentForm' onFinish={handleSetPayment} form={paymentForm}>
					<Row>
						<Col span={12}>
							<div className='cart-payment-input-container'>
								<h4 className='cart-payment-input-title'>Nombre:</h4>
								<Form.Item name={'first_name'} rules={Rules.required}>
									<Input size='large' type='text' placeholder={'Nombre'} />
								</Form.Item>
							</div>
						</Col>
						<Col span={12}>
							<div className='cart-payment-input-container'>
								<h4 className='cart-payment-input-title'>Apellido:</h4>
								<Form.Item name={'last_name'} rules={Rules.required}>
									<Input size='large' type='text' placeholder={'Apellido'} />
								</Form.Item>
							</div>
						</Col>
						<Col span={12}>
							<div className='cart-payment-input-container'>
								<h4 className='cart-payment-input-title'>Documento ID:</h4>
								<Form.Item name={'document_id'} rules={Rules.required}>
									<Input size='large' type='text' placeholder={'Documento de Identidad'} />
								</Form.Item>
							</div>
						</Col>
						<Col span={12}>
							<div className='cart-payment-input-container'>
								<h4 className='cart-payment-input-title'>Teléfono:</h4>
								<Form.Item name={'phone'} rules={Rules.required}>
									<Input size='large' type='text' placeholder={'Teléfono'} />
								</Form.Item>
							</div>
						</Col>
						<Col span={24}>
							<div className='cart-payment-input-container'>
								<h4 className='cart-payment-input-title'>Dirección:</h4>
								<Form.Item name={'address'} rules={Rules.required}>
									<TextArea
										size='large'
										type={'text'}
										placeholder={'Dirección'}
										rows={4}
									/>
								</Form.Item>
							</div>
						</Col>
						<Col span={24}>
							<div className='cart-payment-set-button-container'>
								<Button
									htmlType='submit'
									loading={isLoading}
									className='cart-payment-set-button'>
									Procesar pago
								</Button>
							</div>
						</Col>
					</Row>
				</Form>
			</Modal>
		</>
	)
}
export default PaymentModal
