import mongoose from 'mongoose';
const formSchema = new mongoose.Schema({
    companyname: { type: String, required: true },
    url: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    companymail: { type: String, required: true },
    jobtitle: { type: String, required: true },
    phone: { type: String, required: true },

}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);
export default Form;