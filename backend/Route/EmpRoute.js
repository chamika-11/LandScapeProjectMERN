const express=require("express");
const router=express.Router();

//insert model
const empmodel=require("../Model/EmpModel");

//insert controller
const empcontroller=require("../Controllers/EmpController");

router.get("/",empcontroller.getAllEmp);
router.post("/",empcontroller.addEmployee);
router.get("/:id",empcontroller.GetById);
router.put("/:id",empcontroller.updateemployee);
router.delete("/:id",empcontroller.deleteEmployee);

//export
module.exports=router;