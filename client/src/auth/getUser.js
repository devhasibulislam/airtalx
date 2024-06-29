import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

const useAuthUser = (auth) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user: firebaseUser } = useContext(AuthContext);
  // const { user } = useContext(AuthContext);

  console.log("user from hookkkkkkk", user)

  useEffect(() => {
    const loader = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API}/userdata/email/${firebaseUser?.email}`
      );
      if(response?.data){
        setUser(response?.data)
        setLoading(false)
      }
    };

    if (firebaseUser) {
      loader();
    }
  }, [firebaseUser]);

  return { user, loading };
};

export default useAuthUser;
