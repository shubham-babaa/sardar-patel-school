"use client";
import React, { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import emailjs from "@emailjs/browser";
import {
  User,
  Home,
  Phone,
  GraduationCap,
  FileText,
  Upload,
} from "lucide-react";

const initialFormState = {
  fullName: "",
  admittedClass: "",
  stream: "",
  dateOfBirth: "",
  gender: "",
  residentialAddress: "",
  fatherName: "",
  occupation: "",
  motherName: "",
  contactNoFather: "",
  previousSchoolName: "",
  lastClassPassed: "",
  category: "",
  termsAccepted: false,
};

const AdmissionForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [birthCertificateFile, setBirthCertificateFile] = useState<File | null>(
    null
  );

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (file: File | null) => {
    setBirthCertificateFile(file);
    if (file) {
      setFormData((prev) => ({ ...prev, birthCertificate: true }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      setIsSubmitting(false);
      return;
    }

    // Create form data with file attachment
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("admittedClass", formData.admittedClass);
    formDataToSend.append("stream", formData.stream);
    formDataToSend.append("dateOfBirth", formData.dateOfBirth);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("residentialAddress", formData.residentialAddress);
    formDataToSend.append("fatherName", formData.fatherName);
    formDataToSend.append("occupation", formData.occupation);
    formDataToSend.append("motherName", formData.motherName);
    formDataToSend.append("contactNoFather", formData.contactNoFather);
    formDataToSend.append("previousSchoolName", formData.previousSchoolName);
    formDataToSend.append("lastClassPassed", formData.lastClassPassed);
    formDataToSend.append("category", formData.category);

    if (birthCertificateFile) {
      formDataToSend.append("birthCertificateFile", birthCertificateFile);
    }

    try {
      // Send form data with file attachment
      const form_dataElement = {
        fullName: formData.fullName,
        admittedClass: formData.admittedClass,
        stream: formData.stream,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        residentialAddress: formData.residentialAddress,
        fatherName: formData.fatherName,
        occupation: formData.occupation,
        motherName: formData.motherName,
        contactNoFather: formData.contactNoFather,
        previousSchoolName: formData.previousSchoolName,
        lastClassPassed: formData.lastClassPassed,
        category: formData.category,
      };
      
      await emailjs.send(
        "service_aouox0n",        // ✅ Your EmailJS service ID
        "template_yofm0rk",       // ✅ Your EmailJS template ID
        form_dataElement,         // ✅ JS object with template variables
        "EqQjN_xQknj_-AddN"       // ✅ Your EmailJS public key
      );

      alert("Form submitted successfully!");
      // Reset form after submission
      formRef.current.reset();
      setFormData(initialFormState);
      setBirthCertificateFile(null);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 md:px-10">
      <div className="">
        <Card className="border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <div className="text-center">
              <CardTitle className="text-2xl font-bold mb-2">
                SARDAR PATEL HR SEC SCHOOL
              </CardTitle>
              <p className="text-blue-100">
                ADARSH NAGAR, NAI BASTI, WARD NO. 12, SATNA
              </p>
              <p className="text-blue-100 font-semibold">ENGLISH MEDIUM</p>
              <div className="mt-4 bg-white/20 rounded-lg p-3">
                <h2 className="text-xl font-semibold">
                  ADMISSION FORM - 2025-2026
                </h2>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="space-y-8"
            >
              {/* Student Information Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Student Information
                    </h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name of the Child *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    required
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fatherName">Father's Name *</Label>
                  <Input
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={(e) =>
                      handleInputChange("fatherName", e.target.value)
                    }
                    required
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motherName">Mother's Name *</Label>
                  <Input
                    id="motherName"
                    name="motherName"
                    value={formData.motherName}
                    onChange={(e) =>
                      handleInputChange("motherName", e.target.value)
                    }
                    required
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation *</Label>
                  <Input
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={(e) =>
                      handleInputChange("occupation", e.target.value)
                    }
                    required
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previousSchoolName">
                    Name of Previous School
                  </Label>
                  <Input
                    id="previousSchoolName"
                    name="previousSchoolName"
                    value={formData.previousSchoolName}
                    onChange={(e) =>
                      handleInputChange("previousSchoolName", e.target.value)
                    }
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastClassPassed">Last Class Passed *</Label>
                  <Input
                    id="lastClassPassed"
                    name="lastClassPassed"
                    value={formData.lastClassPassed}
                    onChange={(e) =>
                      handleInputChange("lastClassPassed", e.target.value)
                    }
                    required
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="flex items-start justify-start space-x-10">
                  <div className="md:col-span-2 space-y-2 flex-1">
                    <Label htmlFor="residentialAddress">
                      Residential Address *
                    </Label>
                    <Textarea
                      id="residentialAddress"
                      name="residentialAddress"
                      value={formData.residentialAddress}
                      onChange={(e) =>
                        handleInputChange("residentialAddress", e.target.value)
                      }
                      required
                      className="border-gray-300 focus:border-blue-500"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Gender *</Label>
                    <RadioGroup
                      name="gender"
                      value={formData.gender}
                      onValueChange={(value) =>
                        handleInputChange("gender", value)
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap items-center justify-between">
                  <div className="space-y-2">
                    <Label htmlFor="admittedClass">Admitted Class *</Label>
                    <Select
                      name="admittedClass"
                      value={formData.admittedClass}
                      onValueChange={(value) =>
                        handleInputChange("admittedClass", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="1">Class 1</SelectItem>
                        <SelectItem value="2">Class 2</SelectItem>
                        <SelectItem value="3">Class 3</SelectItem>
                        <SelectItem value="4">Class 4</SelectItem>
                        <SelectItem value="5">Class 5</SelectItem>
                        <SelectItem value="6">Class 6</SelectItem>
                        <SelectItem value="7">Class 7</SelectItem>
                        <SelectItem value="8">Class 8</SelectItem>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="11">Class 11</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stream">Stream</Label>
                    <Select
                      name="stream"
                      value={formData.stream}
                      onValueChange={(value) =>
                        handleInputChange("stream", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select stream" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="commerce">Commerce</SelectItem>
                        <SelectItem value="arts">Arts</SelectItem>
                        <SelectItem value="na">Not Applicable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      name="category"
                      value={formData.category}
                      onValueChange={(value) =>
                        handleInputChange("category", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="obc">OBC</SelectItem>
                        <SelectItem value="sc">SC</SelectItem>
                        <SelectItem value="st">ST</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactNoFather">
                      Contact No. (Father) *
                    </Label>
                    <Input
                      id="contactNoFather"
                      name="contactNoFather"
                      value={formData.contactNoFather}
                      onChange={(e) =>
                        handleInputChange("contactNoFather", e.target.value)
                      }
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Birth Certificate Upload */}
                
              </div>

              {/* Terms and Conditions */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Terms & Conditions</h4>
                <div className="text-sm text-gray-700 space-y-2 mb-4">
                  <p>
                    • All information provided must be accurate and complete.
                  </p>
                  <p>
                    • Required documents must be submitted within the specified
                    time.
                  </p>
                  <p>• Fee payment must be made as per school policy.</p>
                  <p>
                    • The school reserves the right to cancel admission if any
                    information is found false.
                  </p>
                  <p>• Uploaded documents should be clear and legible.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="termsAccepted"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) =>
                      handleInputChange("termsAccepted", checked)
                    }
                    required
                  />
                  <Label htmlFor="termsAccepted" className="text-sm">
                    I accept the terms and conditions *
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdmissionForm;
