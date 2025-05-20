import SuccessIcon from '../assets/Images/suucess.png'

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="modal-backdrop success">
      <div className="modal-content text-center">
        <div className="success-illustration">
          <img src={SuccessIcon} loading="lazy" />
        </div>
        <div className="succ_cont">
          <h3>The Self-Mastery blueprint</h3>
          <p>Had been successfully Downloaded!</p>
          <div className="hero-buttons mt-0">
            <div className="shedule_btn_wrp mx-auto">
              <button type='submit' className="schedule-btn"  onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
