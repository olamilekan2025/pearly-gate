import { useState, useEffect } from "react";

const STORAGE_KEY = "school_enrollment_form";

export default function EnrollNow() {
  const steps = [
    "Basic Info",
    "Contact",
    "Background",
    "Guardian",
    "Schooling",
    "Medical",
    "Medical Details",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const [form, setForm] = useState({
    // Basic Info
    surname: "",
    otherName: "",
    sex: "",
    studentEmail: "",
    dob: "",

    // Contact
    residentialAddress: "",
    postalAddress: "",
    stateOfOrigin: "",
    localGovernment: "",
    homeTown: "",

    // Background
    nationality: "",
    tribe: "",
    bloodGroup: "",

    // Guardian
    guardianName: "",
    guardianAddress: "",
    guardianOccupation: "",
    guardianPhone: "",
    guardianEmail: "",
    guardianHomeAddress: "",

    // Schooling
    gradeApplying: "",
    lastSchool: "",
    lastClass: "",

    // Medical
    basicMedicalInfo: "",
    medicalDetails: "",
  });

  /* ---------- LOAD SAVED DATA ---------- */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setForm(parsed.form);
      setCurrentStep(parsed.currentStep);
    }
  }, []);

  /* ---------- AUTO SAVE ---------- */
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ form, currentStep })
    );
  }, [form, currentStep]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", form);
    localStorage.removeItem(STORAGE_KEY);
    alert("Enrollment submitted successfully 🎉");
    setCurrentStep(0);
  };

  const progressPercentage = Math.round(
    ((currentStep + 1) / steps.length) * 100
  );

  const input = "w-full p-3 border rounded-lg";
  const grid = "grid grid-cols-1 md:grid-cols-2 gap-4";

  /* ---------- STEP CONTENT ---------- */
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className={grid}>
            <input name="surname" placeholder="Surname" className={input} value={form.surname} onChange={handleChange} />
            <input name="otherName" placeholder="Other Name" className={input} value={form.otherName} onChange={handleChange} />
            <select name="sex" className={input} value={form.sex} onChange={handleChange}>
              <option value="">Sex</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="studentEmail" placeholder="Student Email" className={input} value={form.studentEmail} onChange={handleChange} />
            <input type="date" name="dob" className={input} value={form.dob} onChange={handleChange} />
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <input name="residentialAddress" placeholder="Residential Address" className={input} value={form.residentialAddress} onChange={handleChange} />
            <input name="postalAddress" placeholder="Postal Address (If different)" className={input} value={form.postalAddress} onChange={handleChange} />
            <input name="stateOfOrigin" placeholder="State of Origin" className={input} value={form.stateOfOrigin} onChange={handleChange} />
            <input name="localGovernment" placeholder="Local Government" className={input} value={form.localGovernment} onChange={handleChange} />
            <input name="homeTown" placeholder="Home Town" className={input} value={form.homeTown} onChange={handleChange} />
          </div>
        );

      case 2:
        return (
          <div className={grid}>
            <input name="nationality" placeholder="Nationality" className={input} value={form.nationality} onChange={handleChange} />
            <input name="tribe" placeholder="Tribe" className={input} value={form.tribe} onChange={handleChange} />
            <input name="bloodGroup" placeholder="Blood Group" className={input} value={form.bloodGroup} onChange={handleChange} />
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <input name="guardianName" placeholder="Parent / Guardian Name" className={input} value={form.guardianName} onChange={handleChange} />
            <input name="guardianOccupation" placeholder="Occupation" className={input} value={form.guardianOccupation} onChange={handleChange} />
            <input name="guardianPhone" placeholder="Telephone Number" className={input} value={form.guardianPhone} onChange={handleChange} />
            <input name="guardianEmail" placeholder="Guardian Email" className={input} value={form.guardianEmail} onChange={handleChange} />
            <input name="guardianAddress" placeholder="Guardian Address" className={input} value={form.guardianAddress} onChange={handleChange} />
            <input name="guardianHomeAddress" placeholder="Home Address" className={input} value={form.guardianHomeAddress} onChange={handleChange} />
          </div>
        );

      case 4:
        return (
          <div className={grid}>
            <input name="gradeApplying" placeholder="Grade / Class Applying For" className={input} value={form.gradeApplying} onChange={handleChange} />
            <input name="lastSchool" placeholder="Last School Attended" className={input} value={form.lastSchool} onChange={handleChange} />
            <input name="lastClass" placeholder="Last Class Attended" className={input} value={form.lastClass} onChange={handleChange} />
          </div>
        );

      case 5:
        return (
          <textarea name="basicMedicalInfo" rows={4} placeholder="Basic Medical Information" className={input} value={form.basicMedicalInfo} onChange={handleChange} />
        );

      case 6:
        return (
          <textarea name="medicalDetails" rows={4} placeholder="Detailed Medical Information" className={input} value={form.medicalDetails} onChange={handleChange} />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-3xl">
        
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Enroll Now</h2>

        {/* STEP COUNT & PERCENTAGE (TOP) */}
        <div className="flex justify-between mb-3 text-sm">
          <span className="text-gray-600 dark:text-gray-300">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="font-semibold text-indigo-600">
            {progressPercentage}% Complete
          </span>
        </div>

        {/* PROGRESS BAR & STEPS */}
        <div className="relative mb-8">
          <div className="absolute top-4 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded">
            <div className="h-1 bg-indigo-600 rounded transition-all duration-500" style={{ width: `${progressPercentage}%` }} />
          </div>

          <div className="flex justify-between relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-xs">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  i <= currentStep ? "bg-indigo-600 text-white border-indigo-600" : "bg-white dark:bg-gray-700 border-gray-300"
                }`}>
                  {i + 1}
                </div>
                <span className="mt-1 text-center">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {renderStep()}

        {/* NAVIGATION */}
        <div className="flex justify-between  mt-6">
          {currentStep > 0 && (
            <button type="button" onClick={prevStep} className="mr-2 px-6 py-2 bg-gray-300 rounded">
              Back
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button type="button" onClick={nextStep} className="px-6 py-2 bg-indigo-600 text-white rounded">
              Next
            </button>
          ) : (
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded">
              Submit
            </button>
          )}
        </div>

      </form>
    </div>
  );
}