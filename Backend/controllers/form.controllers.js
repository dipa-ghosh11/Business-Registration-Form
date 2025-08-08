import Form from "../models/form.model.js";

export const createForm = async (req, res) => {
    try {
        const { companyname, url, firstname, lastname, companymail, jobtitle, phone } = req.body;

        const isAlreadyExists = await Form.findOne({ companyname });
        const isEmailExists = await Form.findOne({ companymail });

        if (isAlreadyExists || isEmailExists) {
            return res.status(400).json({ success: false, message: "Comapny mail and company name already exists" });
        }

        const newUser = await Form.create({
            companyname, url, firstname, lastname,companymail, jobtitle, phone
        });

        return res.status(201).json({ success: true, message: "Form created successfully", newUser });
    }

    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }

}

export const getUsers=async (req, res)=>{
    try{
        const users=await Form.find({});
        if(!users){
            return res.status(400).json({success: false, message: "No users found"});
        }

        return res.status(200).json({success: true, message: "User fetched successfully", users})
    }

    catch(error){
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}