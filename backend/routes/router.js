
import { Router } from "express";
import { Contact} from "../models/Schema.js";
import { Student } from "../models/StudentSchema.js";
const router = Router();

// Save Contact
router.post("/save", async (req, res) => {
  try {
    const data = new Contact({
      name: req.body.name,
      Feedback: req.body.Feedback,
    });
    await data.save();
    res.json({ status: "saved", savedData: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Backend error" });
  }
});

// Save Student Details
router.post("/details", async (req, res) => {
  try {
    const { studentId, department, Year } = req.body.form;
    const data = new Student({ studentId, department, Year });
    await data.save();
    res.json({ status: "saved", savedData: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Backend error" });
  }
});

export default router;
