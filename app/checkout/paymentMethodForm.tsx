"use client"

import { Form, Input, Button, Modal, Select } from 'antd';
import { useState } from "react";

const { Option } = Select;

export function PaymentMethodForm() {
  const [paymentValue, setPaymentValue] = useState("mobilemoney");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (value: string) => {
    setPaymentValue(value);
  };

  const showModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values : string) => {
    console.log('Received values:', values);
  };

  return (
    <div>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Payment Method"
          name="paymentMethod"
          initialValue="mobilemoney"
          rules={[{ required: true, message: 'Please select a payment method' }]}
        >
          <Select onChange={onChange} style={{ width: 200 }}>
            <Option value="mobilemoney">Mobile Money</Option>
            <Option value="bank">Bank</Option>
            <Option value="creditcard">Credit Card</Option>
          </Select>
        </Form.Item>

        {paymentValue === "mobilemoney" ? (
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: 'Phone number is required' },
              { min: 10, message: 'Phone number must be at least 10 digits' },
            ]}
          >
            <Input placeholder="Please Enter Telephone Number" />
          </Form.Item>
        ) : paymentValue === "bank" ? (
          <Form.Item
            label="Bank Account"
            name="bank"
            rules={[
              { required: true, message: 'Bank account is required' },
              { min: 4, message: 'Bank account must be at least 4 characters' },
            ]}
          >
            <Input placeholder="Please Enter Bank Account" />
          </Form.Item>
        ) : (
          <>
            <Form.Item
              label="Card Number"
              name="cardnumber"
              rules={[
                { required: true, message: 'Card number is required' },
                { min: 2, message: 'Card number must be at least 2 characters' },
              ]}
            >
              <Input placeholder="Card Number" />
            </Form.Item>
            <div className="ant-row ant-form-item">
              <Form.Item
                label="Expiration Date (MM/YY)"
                name="date"
                className="ant-col ant-col-12"
                rules={[
                  { required: true, message: 'Expiration date is required' },
                  { min: 4, message: 'Expiration date must be at least 4 characters' },
                ]}
              >
                <Input placeholder="Expiration Date (MM/YY)" />
              </Form.Item>
              <Form.Item
                label="Security Code"
                name="code"
                className="ant-col ant-col-12"
                rules={[
                  { required: true, message: 'Security code is required' },
                  { min: 2, message: 'Security code must be at least 2 characters' },
                ]}
              >
                <Input placeholder="Security Code" />
              </Form.Item>
            </div>
            <Form.Item
              label="Name on Card"
              name="name"
              rules={[
                { required: true, message: 'Name on card is required' },
                { min: 2, message: 'Name must be at least 2 characters' },
              ]}
            >
              <Input placeholder="Name on Card" />
            </Form.Item>
          </>
        )}

        <Button type="primary" htmlType="submit" onClick={showModal}>
          Pay Now
        </Button>

        <Modal
          footer={null}
          open={isModalOpen}
          closable={false}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p className="text-center py-5 text-lg">Confirm Payment Amount: 30000</p>
          <div className="flex gap-5 mt-5">
            <Button className="bg-red-400 text-white" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="bg-blue-400 text-white" onClick={handleOk}>
              Pay
            </Button>
          </div>
        </Modal>
      </Form>
    </div>
  );
}
