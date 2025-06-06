import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const JoinNow = () => {
    const [email, setEmail] = useState('');

    const handleJoin = () => {
        if (!email.trim()) {
            toast.error('Please enter a valid email address.');
            return;
        }

        const templateParams = {
            user_email: email,
            message: `Welcome to the Sovereo Circle! 🎉`,
        };

        emailjs
            .send('your_service_id', 'your_template_id', templateParams, 'your_public_key')
            .then(() => {
                toast.success(`Successfully joined with ${email}`);
                setEmail('');
            })
            .catch(() => {
                toast.error('Failed to send welcome email.');
            });
    };

    return (
        <div>
            <section className="cta-section-wrp">
                <div className="cta-section">
                    <div className="cta-left">
                        <h3>Join the Sovereo Circle Unlock <br /> Exclusive Insights & Premium Tools!</h3>
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
