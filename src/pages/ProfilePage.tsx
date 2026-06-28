import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

type ProfileData = {
  name: string;
  email: string;
};

const ProfilePage = () => {
  const { userid } = useParams<"userid">();
  const [userData, setUserData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      if (!userid) {
        toast.error("User id is missing.");
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await axios.get<ProfileData>(
          `${import.meta.env.VITE_API_URL}/profile/${userid}`,
        );

        setUserData(data);
      } catch (error: unknown) {
        toast.error("Failed to load profile.");
        console.log(
          "Error: ",
          error instanceof Error ? error.message : String(error),
        );
      } finally {
        setIsLoading(false);
      }
    };

    getUserData();
  }, [userid]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424]">
        <h1 className="text-white">Loading profile...</h1>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424]">
        <h1 className="text-white">Profile not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424]">
      <h1 className="text-white">Profile Page</h1>
      <div className="mt-4 text-white">
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
