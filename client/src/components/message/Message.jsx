// // src/Message.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Message() {
  
//   const [data, setData] = useState([]);
//   console.log(data);
//   const [messages, setMessages] = useState([]);
//   const [messageText, setMessageText] = useState("");
//   const [selectedUser, setSelectedUser] = useState(data[0].name);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get("http://localhost:8080/v1/api/userdata");
//         setData(result.data); // Assuming result.data is the array of user data
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   useEffect(() => {
//     const fetchMessages = async () => {
//       const response = await axios.get(
//         `http://localhost:8080/v1/api/message/${selectedUser}`
//       );
//       setMessages(response.data);
//     };
//     fetchMessages();
//   }, [selectedUser]);

//   const sendMessage = async () => {
//     if (messageText.trim() !== "") {
//       const newMessage = {
//         user: selectedUser,
//         text: messageText,
//       };

//       const response = await axios.post(
//         "http://localhost:8080/v1/api/message",
//         newMessage
//       );
//       setMessages([...messages, response.data]);
//       setMessageText("");
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
//         <h2 className="text-2xl font-bold mb-4">Users</h2>
//         <ul>
//           {data.map((user, index) => (
//             <li
//               key={index}
//               className={`p-2 cursor-pointer flex items-center ${
//                 selectedUser === user.name
//                   ? "bg-blue-500 text-white"
//                   : "bg-white text-black"
//               }`}
//               onClick={() => setSelectedUser(user.name)}
//             >
//               <img
//                 src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRG5ioMIl08g6eZpbVytnRAv1Pb-WkiF_jntm5dMm9orVnSXpGcTcZAhn8Rg&simages/anirban.jpg"}
//                 alt={user.name}
//                 className="w-10 h-10 rounded-full mr-2"
//               />
//               {user.name}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex-1 flex flex-col bg-white p-4">
//         <div className="flex-1 overflow-y-auto p-4 border-b-2">
//           <h2 className="text-2xl font-bold mb-4">{selectedUser}</h2>
//           <div className="space-y-4">
//             {messages.map((message, index) => (
//               <div key={index} className="p-2 bg-gray-200 rounded-md">
//                 {message.text}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center p-2 border-t-2">
//           <input
//             type="text"
//             placeholder="Type a message"
//             className="flex-1 p-2 border border-gray-300 rounded-md"
//             value={messageText}
//             onChange={(e) => setMessageText(e.target.value)}
//           />
//           <button
//             className="ml-2 bg-blue-500 text-white p-2 rounded-md"
//             onClick={sendMessage}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Message;

// src/Message.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function Message() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [currentUser, setCurrentUser] = useState(null); // Assuming you have a way to get the current user
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get("http://localhost:8080/v1/api/userdata");
        setUsers(result.data); // Assuming result.data is the array of user data
        if (result.data.length > 0) {
          setSelectedUser(result.data[0]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser && currentUser) {
        try {
          const response = await axios.get(
            `http://localhost:8080/v1/api/message/${currentUser._id}/${selectedUser._id}`
          );
          setMessages(response.data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };
    fetchMessages();
  }, [selectedUser, currentUser]);

  const sendMessage = async () => {
    if (messageText.trim() !== "" && currentUser && selectedUser) {
      const newMessage = {
        sender: currentUser._id,
        receiver: selectedUser._id,
        text: messageText,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/v1/api/message",
          newMessage
        );
        setMessages([...messages, response.data]);
        setMessageText("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user._id}
              className={`p-2 cursor-pointer flex items-center ${
                selectedUser && selectedUser._id === user._id
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRG5ioMIl08g6eZpbVytnRAv1Pb-WkiF_jntm5dMm9orVnSXpGcTcZAhn8Rg&simages/anirban.jpgv"} // Ensure each user has an image property
                alt={user.name}
                className="w-10 h-10 rounded-full mr-2"
              />
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col bg-white p-4">
        <div className="flex-1 overflow-y-auto p-4 border-b-2">
          <h2 className="text-2xl font-bold mb-4">
            {selectedUser ? selectedUser.name : "Select a user to chat"}
          </h2>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message._id}
                className={`p-2 rounded-md ${
                  message.sender === currentUser._id
                    ? "bg-blue-200 self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center p-2 border-t-2">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 p-2 border border-gray-300 rounded-md"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button
            className="ml-2 bg-blue-500 text-white p-2 rounded-md"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
