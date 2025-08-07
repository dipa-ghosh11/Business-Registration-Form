import './App.css';
import './index.css'
import React, { use, useEffect } from 'react';
import { useState } from 'react';
import { Button, Checkbox, Form, Cascader, Input, Select, Result } from 'antd';
import { useFormik } from 'formik';
import axios from 'axios';
const { Option } = Select;






const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <option value="+1">United States</option>
      <option value="+44">United Kingdom</option>
      <option value="+91">India</option>
      <option value="+61">Australia</option>
      <option value="+81">Japan</option>
      <option value="+49">Germany</option>
      <option value="+33">France</option>
      <option value="+39">Italy</option>
      <option value="+86">China</option>
      <option value="+7">Russia</option>
      <option value="+971">United Arab Emirates</option>
      <option value="+966">Saudi Arabia</option>
      <option value="+92">Pakistan</option>
      <option value="+880">Bangladesh</option>
      <option value="+234">Nigeria</option>
      <option value="+27">South Africa</option>
      <option value="+82">South Korea</option>
      <option value="+34">Spain</option>
      <option value="+55">Brazil</option>
      <option value="+20">Egypt</option>
      <option value="+90">Turkey</option>
      <option value="+31">Netherlands</option>
      <option value="+46">Sweden</option>
      <option value="+41">Switzerland</option>
      <option value="+47">Norway</option>
      <option value="+351">Portugal</option>
      <option value="+48">Poland</option>
      <option value="+358">Finland</option>
      <option value="+63">Philippines</option>
      <option value="+95">Myanmar</option>
      <option value="+66">Thailand</option>
      <option value="+62">Indonesia</option>

    </Select>
  </Form.Item>
);



const App = () => {

  const [isSubmit, setIsSubmit] = useState(false);
  const [companyData, setCompanyData] = useState({ companyname: '', url: '',   firstname: '', lastname: '', companymail: '', jobtitle: '', phone: '' });
  const [users, setUsers] = useState([]);




  const onFinish = (values) => {
    
    setTimeout(() => {
      setIsSubmit(true);
    }, 1000);

  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  const setValues = (e) => {
    // localStorage.setItem('companyname', e.target.value);
    // localStorage.setItem('url', e.target.value);
    // localStorage.setItem('firstname', e.target.value);
    // localStorage.setItem('lastname', e.target.value);
    // localStorage.setItem('companymail', e.target.value);
    // localStorage.setItem('jobtitle', e.target.value);
    // localStorage.setItem('phone', e.target.value);
  };

  const initialValues = {
    companyname: localStorage.getItem('companyname') || '',
    url: localStorage.getItem('url') || '',
    firstname: localStorage.getItem('firstname') || '',
    lastname: localStorage.getItem('lastname') || '',
    companymail: localStorage.getItem('companymail') || '',
    jobtitle: localStorage.getItem('jobtitle') || '',
    phone: localStorage.getItem('phone') || '',
  };

  // console.log("companyData", companyData);

  useEffect(() => {
    
      localStorage.setItem('companyname', companyData.companyname);
      localStorage.setItem('url', companyData.url);
      localStorage.setItem('companymail', companyData.companymail);
      localStorage.setItem('firstname', companyData.firstname);
      localStorage.setItem('lastname', companyData.lastname);
      localStorage.setItem('jobtitle', companyData.jobtitle);
      localStorage.setItem('phone', companyData.phone);
      // console.log("Data saved to localStorage:", companyData);
    

  }, [companyData]);

  useEffect(() => {
    axios.post('http://localhost:5000/api/createform', { withCredentials: true})
      .then((response)=>{
        // console.log("Response:", response);
        console.log("data post successfully");
        setUsers(response);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setUsers([]);
      })
  }, []);


    
  console.log("Users:", users);
  return (
    <>
      {isSubmit ?
        (<Result
          status="success"
          title="Form Submitted Successfully"
          subTitle="Thank you for registering your business with us. We will get back to you shortly."
        />) :
        (<Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ backgroundColor: '#635e223d', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', padding: '20px', borderRadius: '10px', width: '400px', margin: 'auto', marginTop: '200px' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"


        >
          <Form.Item
            label="Company Name"
            name="companyname"
            onChange={(e) => { setCompanyData({ ...companyData, companyname: e.target.value }) }}
            rules={[{ required: true, message: 'Please input your company name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Website URL"
            name="url"
            onChange={(e) => { setCompanyData({ ...companyData, url: e.target.value }) }}
            rules={[{ required: true, message: 'Please input website url!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="First Name"
            name="firstname"
            onChange={(e) => { setCompanyData({ ...companyData, firstname: e.target.value }) }}
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            onChange={(e) => { setCompanyData({ ...companyData, lastname: e.target.value }) }}
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Company Email"
            name="companymail"
            onChange={(e) => { setCompanyData({ ...companyData, companymail: e.target.value }) }}
            rules={[{ required: true, message: 'Please input your company mail!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Job Title"
            name="jobtitle"
            onChange={(e) => { setCompanyData({ ...companyData, jobtitle: e.target.value }) }}
            rules={[{ required: true, message: 'Please input your job title!' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item
            name="phone"
            label="Phone Number"
            onChange={(e) => { setCompanyData({ ...companyData, phone: e.target.value }) }}
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        )}



    </>
  );

}

export default App;