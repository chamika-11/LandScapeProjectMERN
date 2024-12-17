const employee=require("../Model/EmpModel");


//Display Data
const getAllEmp=async(req,res,next)=>{
    let employ;//create variable

    //return data from database(getallemp)
    try{
        employ=await employee.find();
    }catch(err){
        console.log(err)
    }

    //if there no data
    if(!employee){
        return res.status(404).json({message:"user not found"});
    }

    //display employee details
    return res.status(200).json({employ});
};


//insert
const addEmployee=async(req,res,next)=>{
    const {name,description,post}=req.body;
    let employees;

    try{
        employees=new employee({name,description,post});
        await employees.save(); 
    }catch (err){
        console.log(err);
    }

    //if data insert unsuccesfull
    if(!employees){
        return res.status(404).json({message:"Unable to add user details!"});
    }
    return res.status(200).json({employees});

}


//Data retrieval(GetById)
const GetById=async(req,res,next)=>{
    //id for the routers
    const id=req.params.id;
    let employ;

    try{
        employ=await employee.findById(id);
    }catch(err){
        console.log(err)
    }

    //if data insert unsuccesfull
    if(!employ){
        return res.status(404).json({message:"Unable to Find the employee!"});
    }
    //Display User details
    return res.status(200).json({employ});

    }


//Update the employee
const updateemployee=async(req,res,next)=>{
    const id=req.params.id;
    const {name,description,post}=req.body;
    let employ;
    try{
         employ=await employee.findByIdAndUpdate(id,{name,description,post},{new:true});
    }catch(err){
        console.log(err);
    }

    //if data insert unsuccesfull
    if(!employ){
        return res.status(404).json({message:"Unable to update the employee!"});
    }
    //Display User details
    return res.status(200).json({employ});

}


//Delete the employee
const deleteEmployee=async(req, res, next)=>{
    const id=req.params.id;
    let employ;
    try{
        employ=await employee.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    //if data insert unsuccesfull
    if(!employ){
        return res.status(404).json({message:"Unable to delete the employee!"});
    }
    //Display User details
    return res.status(200).json({message:"Employee deleted successfully!"});
 
}



exports.getAllEmp=getAllEmp;
exports.addEmployee=addEmployee;
exports.GetById=GetById;
exports.updateemployee=updateemployee;
exports.deleteEmployee=deleteEmployee;