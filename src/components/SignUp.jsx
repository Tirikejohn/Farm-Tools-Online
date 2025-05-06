import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    // State variables
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");
    
    const navigate = useNavigate();

    // Form submission handler
    const submitForm = async (e) => {
        e.preventDefault();

        // Input validation
        if (!email.includes('@')) {
            setError("Please enter a valid email address");
            return;
        }
        if (phone.length < 10) {
            setError("Please enter a valid phone number");
            return;
        }

        try {
            setLoading("Please wait while we submit your data...");
            const data = new FormData();
            data.append("username", username);
            data.append("email", email);
            data.append("phone", phone);
            data.append("password", password);

            const response = await axios.post("https://ndege25.pythonanywhere.com/api/signup", data);

            setLoading("");
            if (response.data.success) {
                setSuccess(response.data.success);
                setUsername("");
                setEmail("");
                setPhone("");
                setPassword("");
                setTimeout(() => {
                    navigate("/signin"); // Redirect to the sign-in page after successful signup
                }, 2000); // 2 seconds delay for the success message
            } else {
                setError("Signup failed: " + response.data.message || "Unknown error");
            }
        } catch (error) {
            setLoading("");
            setError("Something went wrong: " + error.message);
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>SignUp</h2>

                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>
                <b className="text-danger">{error}</b>

                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    /><br />

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    /><br />

                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter phone"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    /><br />

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    /><br />

                    <button
                        className="btn btn-primary"
                        disabled={loading || !username || !email || !phone || !password}
                    >
                        SignUp
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;

