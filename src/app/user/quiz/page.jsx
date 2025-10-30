"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Quiz() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Quiz Page</h2>
        </div>
      </div>
    </ProtectedRoute>
  );
}
