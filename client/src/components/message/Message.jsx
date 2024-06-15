

import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthUser from "../../auth/getUser";
import { auth } from "../../firebase";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CiStar } from "react-icons/ci";

function Message() {
  const { user } = useAuthUser(auth);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // New state for showing search input
  const [favorites, setFavorites] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newMessages, setNewMessages] = useState([]);
  const [userMessageTimes, setUserMessageTimes] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get("http://localhost:8080/v1/api/userdata");
        const fetchedUsers = result.data; // Assuming result.data is the array of user data

        if (fetchedUsers.length > 0) {
          setSelectedUser(fetchedUsers[0]);
        }

        // Initialize userMessageTimes with zero timestamps
        const initialMessageTimes = fetchedUsers.reduce((acc, curr) => {
          acc[curr._id] = 0;
          return acc;
        }, {});

        setUserMessageTimes(initialMessageTimes);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser && user) {
        try {
          const response = await axios.get(
            `http://localhost:8080/v1/api/message/${user._id}/${selectedUser._id}`
          );
          setMessages(response.data);
          setFilteredMessages(response.data);

          // Update the latest message timestamp for the selected user
          if (response.data.length > 0) {
            const lastMessage = response.data[response.data.length - 1];
            setUserMessageTimes((prevTimes) => ({
              ...prevTimes,
              [selectedUser._id]: new Date(lastMessage.timestamp).getTime(),
            }));
          }
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };
    fetchMessages();
  }, [selectedUser, user]);

  useEffect(() => {
    const fetchNewMessages = async () => {
      if (user) {
        try {
          const response = await axios.get(
            `http://localhost:8080/v1/api/message/new/${user._id}`
          );
          setNewMessages(response.data);

          // Update the latest message timestamp for each user in new messages
          response.data.forEach((message) => {
            setUserMessageTimes((prevTimes) => ({
              ...prevTimes,
              [message.sender._id]: new Date(message.timestamp).getTime(),
            }));
          });
        } catch (error) {
          console.error("Error fetching new messages:", error);
        }
      }
    };

    const intervalId = setInterval(fetchNewMessages, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, [user]);

  // Sort users based on the timestamp of the latest message
  const sortedUsers = [...users].sort((a, b) => {
    const timeA = userMessageTimes[a._id] || 0;
    const timeB = userMessageTimes[b._id] || 0;
    return timeB - timeA;
  });

  const sendMessage = async () => {
    if (messageText.trim() !== "" && user && selectedUser) {
      const newMessage = {
        sender: user._id,
        receiver: selectedUser._id,
        text: messageText,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/v1/api/message",
          newMessage
        );
        setMessages([...messages, response.data]);
        setFilteredMessages([...messages, response.data]);
        setMessageText("");

        // Update the latest message timestamp for the selected user
        setUserMessageTimes((prevTimes) => ({
          ...prevTimes,
          [selectedUser._id]: new Date(response.data.timestamp).getTime(),
        }));
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      setFilteredMessages(messages);
    } else {
      setFilteredMessages(
        messages.filter((message) =>
          message.text.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const toggleFavorite = (message) => {
    if (favorites.includes(message._id)) {
      setFavorites(favorites.filter((id) => id !== message._id));
    } else {
      setFavorites([...favorites, message._id]);
    }
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchText("");
    setFilteredMessages(messages);
  };

  const markAsRead = async (messageId) => {
    try {
      await axios.patch(`http://localhost:8080/v1/api/message/read/${messageId}`);
      setNewMessages(newMessages.filter(message => message._id !== messageId));
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <ul>
          {sortedUsers.map((user) => (
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
                src={"data:image/jpeg;base64,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"} // Ensure each user has an image property
                alt=""
                className="w-10 h-10 rounded-full mr-2"
              />
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col bg-white p-4">
        <div className="flex-1 overflow-y-auto p-4 ">
          <div className="flex justify-between  border-b-[1px]">
            <div className="">
              <h2 className="text-2xl font-bold mb-4">
                {selectedUser ? selectedUser.name : "Select a user to chat"}{" "}
              </h2>
            </div>
            <div className="flex gap-3">
              <CiStar className="text-2xl cursor-pointer" onClick={() => {}} />
              <IoIosSearch className="text-2xl cursor-pointer" onClick={toggleSearch} />
              <HiOutlineDotsVertical
                className="text-2xl cursor-pointer"
                onClick={toggleOptions}
              />
              {showOptions && (
                <div className="absolute top-12 right-4 bg-white border rounded-md shadow-lg z-10">
                  <ul>
                    <li className="p-2 cursor-pointer">Option 1</li>
                    <li className="p-2 cursor-pointer">Option 2</li>
                    <li className="p-2 cursor-pointer">Option 3</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {showSearch && (
            <input
              type="text"
              placeholder="Search messages"
              className="w-full p-2 mt-4 border border-gray-300 rounded-md"
              value={searchText}
              onChange={handleSearch}
            />
          )}

          <div className="space-y-4 mt-4 flex flex-col justify-end">
            {filteredMessages.map((message) => (
              <div
                key={message._id}
                className={`p-2 rounded-md ${
                  message.sender === user._id
                    ? "bg-blue-200 w-[50%] self-end"
                    : "bg-red-200 w-[50%] self-start "
                }`}
              >
                <div className="flex justify-between">
                  <span>{message.text}</span>
                  <CiStar
                    className={`text-2xl cursor-pointer ${
                      favorites.includes(message._id) ? "text-yellow-500" : ""
                    }`}
                    onClick={() => toggleFavorite(message)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center p-2 mt-3 border-t-2">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 p-2 mt-5 border border-gray-300 rounded-md"
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

        {newMessages.length > 0 && (
          <div className="p-4 bg-yellow-100 border-t-2 border-yellow-500">
            <h3 className="text-xl font-bold">New Messages</h3>
            <ul>
              {newMessages.map((message) => (
                <li
                  key={message._id}
                  className="p-2 bg-white border-b cursor-pointer"
                  onClick={() => markAsRead(message._id)}
                >
                  {message.sender.name}: {message.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
