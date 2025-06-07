// import Todd from "../assets/Images/Todd Allyn 2.png"
import Video from '../assets/Images/vide.mp4';
import DownloadModal from './modal';
import SuccessModal from './successModel';
import { useEffect, useRef, useState } from 'react';
import ScheduleButton from './ScheduleButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeXmark, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const HeroVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = muted;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, [muted]);

    const toggleMute = () => {
        setMuted((prev) => !prev);
        if (videoRef.current) {
            videoRef.current.muted = !muted;
        }
    };

    return (
        <div
            className='hero-right position-relative'
            onContextMenu={(e) => e.preventDefault()}
        >
            <video
                ref={videoRef}
                src={Video}
                preload='auto'
                playsInline
                disablePictureInPicture
                controlsList='nodownload noplaybackrate nofullscreen'
                className='h-auto rounded-lg no-controls'
            />

            {/* <button
        className='btn btn-warning position-absolute'
        style={{ bottom: '20px', right: '20px', zIndex: 10 }}
        onClick={toggleMute}
      >
        {muted ? 'Unmute' : 'Mute'}
      </button> */}

            <button
                className='position-absolute d-flex justify-content-center align-items-center rounded-circle border-0.5 shadow'
                style={{
                    width: '42px',
                    height: '42px',
                    bottom: '15px',
                    right: '20px',
                    backgroundColor: '#EFBF04',
                    zIndex: 10,
                    cursor: 'pointer',
                }}
                onClick={toggleMute}
                aria-label={muted ? 'Unmute' : 'Mute'}
            >
                <FontAwesomeIcon
                    icon={muted ? faVolumeXmark : faVolumeHigh}
                    style={{ color: '#000000' }}
                />
            </button>
        </div>
    );
};

const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(false);
        setIsSuccessOpen(true);

        const link = document.createElement('a');
        link.href = '/identity-reset-guide.pdf'; // Correct, absolute public path
        link.download = 'Self-Mastery-Blueprint.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => setIsSuccessOpen(false), 5000);
    };

    return (
        <>
            <div className='hero-container '>
                <div className='hero-left'>
                    <div className='hero-tags'>
                        <span>Power</span>
                        <span>✦</span>
                        <span>Prestige</span>
                        <span>✦</span>
                        <span>Precision</span>
                    </div>
                    <h1 className='hero-title'>
                        You Weren’t Designed to Survive <br />
                        You Were Meant to Build
                    </h1>
                    <p className='hero-subtext'>
                        The Science of Self-Mastery.
                        <br />
                        Rebuild Your Identity, Reclaim Your Power.
                    </p>
                    <div className='hero-buttons'>
                        <div className='shedule_btn_wrp'>
                            {/* <button className="schedule-btn">Schedule 1:1</button> */}
                            <ScheduleButton />
                        </div>
                        <button className='btn dark' onClick={() => setIsModalOpen(true)}>
                            Download Mastery Blueprint
                        </button>
                    </div>
                </div>
                {/* <div className='hero-right'>
          <video
            src={Video}
            controls
            autoPlay
            muted
            loop
            className='h-auto rounded-lg'
          />
        </div> */}
                <HeroVideo />
            </div>

            <DownloadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleFormSubmit}
            />
            {isSuccessOpen && (
                <SuccessModal onClose={() => setIsSuccessOpen(false)} />
            )}
        </>
    );
};

export default Banner;
