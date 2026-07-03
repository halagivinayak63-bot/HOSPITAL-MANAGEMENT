const express = require("express");

// Import data arrays
const doctors = require("./routes/Doctor");
const patients = require("./routes/Patient");
const staff = require("./routes/staff");
const medicines = require("./routes/Pharmacy");

const app = express();
const PORT = 3000;

// Doctor
app.get("/doctor/:id", (req, res) => {
    const doctor = doctors.find(d => d.DoctorId == req.params.id);

    if (!doctor)
        return res.status(404).json({ message: "Doctor Not Found" });

    res.json(doctor);
});

// Patient
app.get("/patient/:id", (req, res) => {
    const patient = patients.find(p => p.patientId == req.params.id);

    if (!patient)
        return res.status(404).json({ message: "Patient Not Found" });

    res.json(patient);
});

// Staff
app.get("/staff/:id", (req, res) => {
    const employee = staff.find(s => s.staffId == req.params.id);

    if (!employee)
        return res.status(404).json({ message: "Staff Not Found" });

    res.json(employee);
});

// Medicine
app.get("/medicine/:id", (req, res) => {
    const medicine = medicines.find(m => m.medicineId == req.params.id);

    if (!medicine)
        return res.status(404).json({ message: "Medicine Not Found" });

    res.json(medicine);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});