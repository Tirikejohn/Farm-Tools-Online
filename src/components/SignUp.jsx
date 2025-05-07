import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState(false);
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");
    
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        if (phone && phone.length < 10) {
            setError("Please enter a valid phone number");
            return;
        }

        try {
            setLoading(true);
            const data = new FormData();
            data.append("username", username);
            data.append("email", email);
            data.append("phone", phone);
            data.append("password", password);

            const response = await axios.post("https://ndege25.pythonanywhere.com/api/signup", data);

            setLoading(false);
            if (response.data.success) {
                setSuccess(response.data.success);
                setTimeout(() => setSuccess(''), 3000); // Clear success message after 3 seconds
                setUsername("");
                setEmail("");
                setPhone("");
                setPassword("");
                setTimeout(() => {
                    navigate("/signin");
                }, 2000); // Redirect after 2 seconds
            } else {
                setError("Signup failed: " + (response.data.message || "Unknown error"));
                setTimeout(() => setError(''), 3000); // Clear error message after 3 seconds
            }
        } catch (error) {
            setLoading(false);
            setError("Something went wrong: " + (error.response ? error.response.data.message : error.message));
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>SignUp</h2>

                {loading && <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}

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
                        disabled={loading || !username || !email || !password}
                    >
                        SignUp
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
