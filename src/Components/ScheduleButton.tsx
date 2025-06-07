import { PopupButton } from 'react-calendly';

interface ScheduleButtonProps {
  calendlyUrl?: string;
  classname?: string;
}

const ScheduleButton: React.FC<ScheduleButtonProps> = ({
  calendlyUrl,
  classname,
}) => {
  return (
    <PopupButton
      url={calendlyUrl || 'https://calendly.com/tsosm/30min?back=1'}
      text='Schedule 1 : 1'
      rootElement={document.getElementById('root') || document.body}
      className={classname ? classname : 'schedule-btn'}
    />
  );
};

export default ScheduleButton;
