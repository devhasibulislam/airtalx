import { useState, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
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
    // if(user){

    //   setLoading(false);
    // }
  }, [firebaseUser]);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
  //     if (currentUser) {
  //       try {
  //         const response = await axios.get(
  //           `${process.env.REACT_APP_BASE_API}/userdata/email/${currentUser?.email}`
  //         );
  //         console.log("this is from get hook", response);

  //         setUser(response.data);
  //       } catch (error) {
  //         console.error("Error fetching user data:", error);
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, [auth]);

  return { user, loading };
};

export default useAuthUser;
