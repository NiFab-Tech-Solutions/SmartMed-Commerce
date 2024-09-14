"use client"

import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";

export function ShippingAddressForm() {
  const [form] = Form.useForm();
  
  const [remember, setRemember] = useState(true);

  const onFinish = (values: string) => {
    console.log("Received values:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        province: "",
        district: "",
        sector: "",
        cell: "",
        firstName: "",
        lastName: "",
        phone: "",
        remember: true,
      }}
    >
      <div className="flex gap-3">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "First Name must be at least 2 characters.", min: 2 }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Last Name must be at least 2 characters.", min: 2 }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
      </div>

      <Form.Item
        label="Province"
        name="province"
        rules={[{ required: true, message: "Province must be at least 2 characters.", min: 2 }]}
      >
        <Input placeholder="Province" />
      </Form.Item>

      <Form.Item
        label="District"
        name="district"
        rules={[{ required: true, message: "District must be at least 2 characters.", min: 2 }]}
      >
        <Input placeholder="District" />
      </Form.Item>

      <Form.Item
        label="Sector"
        name="sector"
        rules={[{ required: true, message: "Sector must be at least 2 characters.", min: 2 }]}
      >
        <Input placeholder="Sector" />
      </Form.Item>

      <Form.Item
        label="Cell"
        name="cell"
        rules={[{ required: true, message: "Cell must be at least 2 characters.", min: 2 }]}
      >
        <Input placeholder="Cell" />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Phone must be at least 10 digits.", min: 10 }]}
      >
        <Input placeholder="Phone (optional)" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox onChange={() => setRemember(!remember)}>
          Keep Information for next time
        </Checkbox>
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}
