import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JoinNow = () => {
    const [email, setEmail] = useState('');

    const handleJoin = () => {
        if (!email.trim()) {
            toast.error('Please enter a valid email address.');
            return;
        }

        toast.success(`Successfully joined with ${email}`);
        setEmail(''); // Clear the input
    };

    return (
        <div>
            <section className="cta-section-wrp">
                <div className="cta-section">
                    <div className="cta-left">
                        <h3>Join the Sovero Circle Unlock <br /> Exclusive Insights & Premium Tools!</h3>
                        <p>Sign up now and be the first to access top trends, resources, and expert knowledge.</p>
                    </div>
                    <div className="cta-right">
                        <input
                            type="email"
                            placeholder="Enter your Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleJoin}>Join Now</button>
                    </div>
                </div>
            </section>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default JoinNow;
