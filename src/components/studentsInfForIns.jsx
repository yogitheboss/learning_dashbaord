import * as React from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./timepass/index.jsx";
import { FaBookOpen } from "react-icons/fa";

// Sample data for demonstration
const courseData = [
  {
    course: "Ethical Hacking",
    students: [
      { name: "Aarav Patel", email: "aarav.patel@example.com" },
      { name: "Isha Sharma", email: "isha.sharma@example.com" },
    ],
  },
  {
    course: "Network Security",
    students: [
      { name: "Vihaan Gupta", email: "vihaan.gupta@example.com" },
      { name: "Ananya Reddy", email: "ananya.reddy@example.com" },
    ],
  },
  {
    course: "Cryptography",
    students: [
      { name: "Aditya Deshmukh", email: "aditya.deshmukh@example.com" },
      { name: "Kavya Nair", email: "kavya.nair@example.com" },
    ],
  },
  {
    course: "Cyber Forensics",
    students: [
      { name: "Rohan Kumar", email: "rohan.kumar@example.com" },
      { name: "Sanya Singh", email: "sanya.singh@example.com" },
    ],
  },
  {
    course: "Application Security",
    students: [
      { name: "Arjun Menon", email: "arjun.menon@example.com" },
      { name: "Meera Joshi", email: "meera.joshi@example.com" },
    ],
  },
  {
    course: "Security Operations",
    students: [
      { name: "Siddharth Agarwal", email: "siddharth.agarwal@example.com" },
      { name: "Nidhi Kapoor", email: "nidhi.kapoor@example.com" },
    ],
  },
];


export function CourseContainer() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-blue-50 mb-10">
        Students Registered for Courses
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courseData.map((course) => (
          <Card key={course.course} className="max-w-xs mx-auto bg-white shadow-md rounded-lg">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold">
                <FaBookOpen className="inline-block mr-2" />
                {course.course}
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Registered Students
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              {course.students.map((student, index) => (
                <div key={index} className="flex items-center space-x-2 py-2">
                  <AiOutlineUser className="text-gray-500" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-700">{student.name}</div>
                    <div className="text-sm text-gray-500">{student.email}</div>
                  </div>
                  <AiOutlineMail className="text-gray-500" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
