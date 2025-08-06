import './App.css';
import './index.css'
import React from 'react';
import { Button, Checkbox, Form, Cascader, Input, Select, Result} from 'antd';
import {useFormik} from 'formik';

const { Option } = Select;

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};



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

      const initialValues = {
        companyname: localStorage.getItem('companyname') || '',
        url: localStorage.getItem('url') || '',
        firstname: localStorage.getItem('firstname') || '',
        lastname: localStorage.getItem('lastname') || '',
        companymail: localStorage.getItem('companymail') || '',
        jobtitle: localStorage.getItem('jobtitle') || '',
        phone: localStorage.getItem('phone') || '' ,
      };
   
      const {handleSubmit}= useFormik({
        initialValues,
        onSubmit:(values) => {
          <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"/>
          console.log('Form submitted:', values);
        },

      });

      return(
        <>
          {/* <Result /> */}
        
        <Form   
          name="basic"
          labelCol={{ span: 8 }} 
          wrapperCol={{ span: 16 }}  
          style={{backgroundColor: '#635e223d',display:'flex', flexDirection: 'column', justifyContent:'center',alignItems: 'left', padding: '20px', borderRadius: '10px', width: '400px', margin: 'auto', marginTop: '200px'}}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Form.Item
            label="Company Name"
            name="companyname"
            rules={[{ required: true, message: 'Please input your company name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Website URL"
            name="url"
            rules={[{ required: true, message: 'Please input website url!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="First Name"
            name="firstname"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Company Email"
            name="companymail"
            rules={[{ required: true, message: 'Please input your company mail!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Job Title"
            name="jobtitle"
            rules={[{ required: true, message: 'Please input your job title!' }]}
          >
            <Input />
          </Form.Item>
          

          <Form.Item
              name="phone"
              label="Phone Number"
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
        </>
        
      )

}

export default App;