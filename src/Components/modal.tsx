import React from 'react';

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (e: React.FormEvent) => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                <button onClick={onClose} className="close-button">✖</button>
                <h2 className="modal-title">Get The Self-Mastery blueprint</h2>
                <p className="modal-description">
                    Download your free blueprint and start mastering your mind, body, and business today.
                </p>

                <form className="modal-form" onSubmit={onSubmit}>
                    <div className="input-group">
                        <div className="input-field">
                            <label htmlFor="name">Your Name</label>
                            <input id="name" type="text" placeholder="John Doe" required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Your Email ID</label>
                            <input id="email" type="email" placeholder="johndoe@gmail.com" required />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-field">
                            <label htmlFor="profession">Your Profession (Optional)</label>
                            <input id="profession" type="text" placeholder="Product Manager" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="goal">What do you want to master</label>
                            <select id="goal" required>
                                <option value="">Select from the options below</option>
                                <option value="Mind">Mindset</option>
                                <option value="Body">Physical Health</option>
                                <option value="Business">Leadership</option>
                                <option value="Business">Productivity</option>
                                <option value="Business">All the Above</option>
                            </select>
                        </div>
                    </div>
                    <div className="btn_wrp">
                        <div className="hero-buttons mt-0">
                            <div className="shedule_btn_wrp ms-auto">
                                <button type='submit' className="schedule-btn">Download</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default DownloadModal;
