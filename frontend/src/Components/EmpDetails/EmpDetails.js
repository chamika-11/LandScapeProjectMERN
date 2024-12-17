import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './EmpDetails.css'
const URL="http://localhost:5000/employees"

const fetchHandler = async () => {
    try {
        const response = await axios.get(URL);
        console.log("API Response:", response.data); // Debugging the response
        return response.data;
    } catch (err) {
        console.error("Error fetching data:", err);
    }
};

function EmpDetails() {

    const [users,setUsers] = useState();
    useEffect(() => {
        fetchHandler().then((data) => {
            console.log("Fetched Data from API:", data); // Debug response from fetchHandler
            if (data && data.employ) {
                console.log("Setting users state:", data.users); // Debugging state update
                setUsers(data.employ);
            } else {
                console.log("No users found in API response");
            }
        });
        console.log("Data Enne na pako");
    },[])
    
  return (
    <div className="reviews-container">
    <h1>Our Employees</h1>
    {users && users.length > 0 ? (
        <ul>
            {users.map((user) => (
                <li key={user._id}>
                    <div className="user-info">
                    
                        <div>
                            <strong>{user.name}</strong>
                            <div className="rating">
                                {"★".repeat(5)} {/* Or use actual rating */}
                            </div>
                        </div>
                    </div>
                    <p>{user.description}</p>
                    <p>{user.post}</p>
                </li>
            ))}
        </ul>
    ) : (
        <p className="loading">Data Is Loading....</p>
    )}
</div>
  )
}

export default EmpDetails
