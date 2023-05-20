import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Comments.css";

const Comments = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const renderTableHeaders = () => {
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    );
  };

  const renderTableData = () => {
    return comments.map((comment) => (
      <tr key={comment.id}>
        <td>{comment.id}</td>
        <td>{comment.name}</td>
        <td>{comment.email}</td>
      </tr>
    ));
  };

  return (
    <>
     <div>
      {isLoading ? (
        <p>Loading user...</p>
      ) : (
        <div className="user-card">
           <div className="userContent"> 
          <h2>User Details</h2>
          <div>
            <strong>ID:</strong> {user.id}
          </div>
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>Username:</strong> {user.username}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          </div>
        </div>
      )}
    </div>
    <div className="comments-container">
      <h2 style={{textAlign:'center',color:'gainsboro'}}>Comments</h2>
      <table className="comments-table">
        <thead>{renderTableHeaders()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
    </>
  );
};

export default Comments;
