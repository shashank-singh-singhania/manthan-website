import { useEffect, useState } from "react";
import { apiCall } from "@/utils/api";
import { useRouter } from "next/navigation";
import { endpoints } from "@/constants/urls";
const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const response = await apiCall("get", endpoints.LOGIN);
      if (!response.success) {
        router.push("/login");
      } else {
        setAuthenticated(true);
      }
    };
    checkAuthentication();
  }, [router]);
  if (!authenticated) {
    return null;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
