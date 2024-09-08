import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/user";

const UserRoleForm = ({ setProgress, userId }) => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (role) {
      await useUserStore.getState().setRole(role);
      setProgress(100);
      if (role === "Instructor") navigate(`/instructor/${userId}`);
      else if (role === "Student") navigate(`/student/${userId}`);
    } else {
      alert("Please select your role.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md sm:w-full md:w-[500px]"
    >
      <h2 className="text-xl text-center font-bold mb-6">Select Your Role</h2>

      <RadioGroup value={role} onValueChange={setRole} className="space-y-4">
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="Instructor" id="role-instructor" />
          <Label htmlFor="role-instructor" className="cursor-pointer">
            Instructor
          </Label>
        </div>

        <div className="flex items-center space-x-3">
          <RadioGroupItem value="Student" id="role-student" />
          <Label htmlFor="role-student" className="cursor-pointer">
            Student
          </Label>
        </div>
      </RadioGroup>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

export default UserRoleForm;
