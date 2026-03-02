import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import { Check } from "lucide-react";
import EnrollHero from "./EnrollHero";

const STORAGE_KEY = "school_enrollment_form";

const stepDescriptions = [
  { title: "Basic Information", description: "Enter the student's core identity information" },
  { title: "Contact & Location", description: "Provide address and location details" },
  { title: "Background Information", description: "Optional demographic and background details" },
  { title: "Parent/Guardian Information", description: "Provide guardian contact and details" },
  { title: "Previous Schooling Information", description: "Educational background and admission details" },
  { title: "Basic Medical Information", description: "Optional medical information" },
  { title: "Detailed Medical Information", description: "Optional detailed medical information" },
];

export default function EnrollNow() {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const steps = stepDescriptions.map((s) => s.title);
  const [currentStep, setCurrentStep] = useState(0);

  const [form, setForm] = useState({
    surname: "",
    otherName: "",
    sex: "",
    dob: "",
    studentEmail: "",
    password: "",
    residentialAddress: "",
    postalAddress: "",
    stateOfOrigin: "",
    homeTown: "",
    localGovernment: "",
    nationality: "",
    tribe: "",
    bloodGroup: "",
    guardianName: "",
    guardianAddress: "",
    guardianOccupation: "",
    guardianPhone: "",
    guardianEmail: "",
    guardianHomeAddress: "",
    gradeApplying: "",
    lastSchool: "",
    lastClass: "",
    basicMedicalInfo: "",
    medicalDetails: "",
  });

  const [errors, setErrors] = useState({});
  const classes = [
    "Nursery","KG1","KG2","Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6",
    "JSS1","JSS2","JSS3","SSS1","SSS2","SSS3"
  ];

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setForm(parsed.form);
      setCurrentStep(parsed.currentStep);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ form, currentStep }));
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [form, currentStep]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateStep = (step) => {
    const errs = {};
    const req = (field, label) => { if (!form[field]) errs[field] = `${label} is required`; };
    switch (step) {
      case 0:
        req("surname","Surname");
        req("otherName","Other Name");
        req("sex","Sex");
        req("studentEmail","Email");
        if (form.studentEmail && !/^[^@]+@[^@]+\.[^@]+$/.test(form.studentEmail)) errs.studentEmail="Invalid email";
        req("password","Password");
        if (form.password && form.password.length < 6) errs.password="Password must be at least 6 characters";
        req("dob","Date of Birth");
        break;
      case 1:
        req("residentialAddress","Residential Address");
        req("stateOfOrigin","State of Origin");
        req("localGovernment","Local Government");
        req("homeTown","Home Town");
        break;
      case 2:
        req("nationality","Nationality");
        req("bloodGroup","Blood Group");
        break;
      case 3:
        req("guardianName","Guardian Name");
        req("guardianPhone","Guardian Phone");
        break;
      case 4:
        req("gradeApplying","Grade Applying For");
        req("lastClass","Last Class Attended");
        break;
      default: break;
    }
    setErrors(errs);
    return Object.keys(errs).length===0;
  };

  const nextStep = () => { if (currentStep < steps.length-1 && validateStep(currentStep)) setCurrentStep(currentStep+1); };
  const prevStep = () => currentStep>0 && setCurrentStep(currentStep-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i=0;i<steps.length;i++){
      if(!validateStep(i)){ setCurrentStep(i); return; }
    }
    const student = { email:form.studentEmail, password:form.password, role:"student", profile:form };
    registerUser(student);
    localStorage.removeItem(STORAGE_KEY);
    alert("Enrollment submitted successfully 🎉");
    navigate("/login");
  };

  const progressPercentage = Math.round(((currentStep+1)/steps.length)*100);
  const inputClass="w-full p-3 border rounded-lg";
  const gridClass="grid grid-cols-1 md:grid-cols-2 gap-4";

  const renderStep = () => {
    switch(currentStep){
      case 0:
        return (
          <div className={gridClass}>
            <div>
              <label className="block mb-1 font-medium">Surname</label>
              <input name="surname" value={form.surname} onChange={handleChange} className={inputClass} />
              {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Other Name</label>
              <input name="otherName" value={form.otherName} onChange={handleChange} className={inputClass} />
              {errors.otherName && <p className="text-red-500 text-sm">{errors.otherName}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Sex</label>
              <select name="sex" value={form.sex} onChange={handleChange} className={inputClass}>
                <option value="">Select Sex</option><option>Male</option><option>Female</option>
              </select>
              {errors.sex && <p className="text-red-500 text-sm">{errors.sex}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" name="studentEmail" value={form.studentEmail} onChange={handleChange} className={inputClass} />
              {errors.studentEmail && <p className="text-red-500 text-sm">{errors.studentEmail}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} className={inputClass} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Date of Birth</label>
              <input type="date" name="dob" value={form.dob} onChange={handleChange} className={inputClass} />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            </div>
          </div>
        );
      case 1:
        return (
          <div className={gridClass}>
            <div><label className="block mb-1 font-medium">Residential Address</label>
              <input name="residentialAddress" value={form.residentialAddress} onChange={handleChange} className={inputClass} />
              {errors.residentialAddress && <p className="text-red-500 text-sm">{errors.residentialAddress}</p>}
            </div>
            <div><label className="block mb-1 font-medium">Postal Address</label>
              <input name="postalAddress" value={form.postalAddress} onChange={handleChange} className={inputClass} />
            </div>
            <div><label className="block mb-1 font-medium">State of Origin</label>
              <input name="stateOfOrigin" value={form.stateOfOrigin} onChange={handleChange} className={inputClass} />
              {errors.stateOfOrigin && <p className="text-red-500 text-sm">{errors.stateOfOrigin}</p>}
            </div>
            <div><label className="block mb-1 font-medium">Local Government</label>
              <input name="localGovernment" value={form.localGovernment} onChange={handleChange} className={inputClass} />
              {errors.localGovernment && <p className="text-red-500 text-sm">{errors.localGovernment}</p>}
            </div>
            <div><label className="block mb-1 font-medium">Home Town</label>
              <input name="homeTown" value={form.homeTown} onChange={handleChange} className={inputClass} />
              {errors.homeTown && <p className="text-red-500 text-sm">{errors.homeTown}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className={gridClass}>
            <div><label className="block mb-1 font-medium">Nationality</label>
              <input name="nationality" value={form.nationality} onChange={handleChange} className={inputClass} />
              {errors.nationality && <p className="text-red-500 text-sm">{errors.nationality}</p>}
            </div>
            <div><label className="block mb-1 font-medium">Tribe</label>
              <input name="tribe" value={form.tribe} onChange={handleChange} className={inputClass} />
            </div>
            <div><label className="block mb-1 font-medium">Blood Group</label>
              <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className={inputClass}>
                <option value="">Select Blood Group</option>
                <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
              </select>
              {errors.bloodGroup && <p className="text-red-500 text-sm">{errors.bloodGroup}</p>}
            </div>
          </div>
        );
      case 3:
        return (
          <div className={gridClass}>
            <div><label className="block mb-1 font-medium">Guardian Name</label>
              <input name="guardianName" value={form.guardianName} onChange={handleChange} className={inputClass} />
              {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName}</p>}
            </div>
            <div><label className="block mb-1 font-medium">Guardian Phone</label>
              <input name="guardianPhone" value={form.guardianPhone} onChange={handleChange} className={inputClass} />
              {errors.guardianPhone && <p className="text-red-500 text-sm">{errors.guardianPhone}</p>}
            </div>
            <div><label className="block mb-1 font-medium">Guardian Address</label>
              <input name="guardianAddress" value={form.guardianAddress} onChange={handleChange} className={inputClass} />
            </div>
            <div><label className="block mb-1 font-medium">Guardian Email</label>
              <input name="guardianEmail" value={form.guardianEmail} onChange={handleChange} className={inputClass} />
            </div>
            <div><label className="block mb-1 font-medium">Guardian Home Address</label>
              <input name="guardianHomeAddress" value={form.guardianHomeAddress} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        );
      case 4:
        return (
          <div className={gridClass}>
            <div><label className="block mb-1 font-medium">Grade Applying For</label>
              <select name="gradeApplying" value={form.gradeApplying} onChange={handleChange} className={inputClass}>
                <option value="">Select Grade</option>
                {classes.map(c => <option key={c}>{c}</option>)}
              </select>
              {errors.gradeApplying && <p className="text-red-500 text-sm">{errors.gradeApplying}</p>}
            </div>
            <div><label className="block mb-1 font-medium">Last School Attended</label>
              <input name="lastSchool" value={form.lastSchool} onChange={handleChange} className={inputClass} />
            </div>
            <div><label className="block mb-1 font-medium">Last Class Attended</label>
              <select name="lastClass" value={form.lastClass} onChange={handleChange} className={inputClass}>
                <option value="">Select Class</option>
                {classes.map(c => <option key={c}>{c}</option>)}
              </select>
              {errors.lastClass && <p className="text-red-500 text-sm">{errors.lastClass}</p>}
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <label className="block mb-1 font-medium">Basic Medical Information</label>
            <textarea name="basicMedicalInfo" value={form.basicMedicalInfo} onChange={handleChange} rows={4} className={inputClass} />
          </div>
        );
      case 6:
        return (
          <div>
            <label className="block mb-1 font-medium">Detailed Medical Information</label>
            <textarea name="medicalDetails" value={form.medicalDetails} onChange={handleChange} rows={4} className={inputClass} />
          </div>
        );
      default: return null;
    }
  };

  return (
    <>
    <EnrollHero/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 lg:py-20  px-2 py-10 lg:px-10 lg:p-20 ">
      <form onSubmit={handleSubmit} className="bg-white w-full lg:w-[70%] max-w-5xl lg:py-20 py-10 px-2 lg:px-20 lg:p-2 rounded-xl shadow-lg space-y-2 lg:space-y-8">

        {/* Progress bar with numbers/icons */}
        <div className="relative mb-6 justify-center flex">
          <div className="w-[90%] lg:w-full h-2 bg-gray-200 rounded relative">
            <div className="h-2 bg-blue-600 rounded transition-all" style={{ width: `${progressPercentage}%` }} />
            {steps.map((_, index) => {
              const completed = currentStep > index;
              const isActive = currentStep === index;
              return (
                <div
                  key={index}
                  className={`absolute top-0 -mt-2 lg:-mt-4 w-5 h-5 lg:w-10  lg:h-10 ring-2 ring-gray-400 rounded-full flex items-center justify-center 
                  ${completed ? "bg-white text-white" : isActive ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 "}`}
                  style={{ left: `${(index/(steps.length-1))*100}%`, transform: "translateX(-50%)" }}
                  >
                  {completed ? <Check className="w-6 h-6 text-green-500" /> : index+1}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Title & Description */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold">{stepDescriptions[currentStep].title}</h2>
          <p className="text-gray-600">{stepDescriptions[currentStep].description}</p>
        </div>

        <div ref={scrollRef} />
        {renderStep()}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          {currentStep>0 && <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-300 rounded">Previous</button>}
          {currentStep<steps.length-1 ?
            <button type="button" onClick={nextStep} className="px-6 py-2 bg-indigo-600 text-white rounded">Next</button>
            :
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded">Submit</button>
          }
        </div>

      </form>
    </div>
            </>
  );
}