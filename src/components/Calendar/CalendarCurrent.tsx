import { FC, useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { calendarCurrentBaseCls } from '../../consts/className';

interface CalendarCurrentProps {
  className?: string; 
}

const CalendarCurrent : FC<CalendarCurrentProps> = ({ className }) => {
  const { currentDate } = useContext(CalendarContext);

  const calendarCurrentCls = useMemo(() => {
    return className ? `${className} ${calendarCurrentBaseCls}` : calendarCurrentBaseCls;
}, [className]);

  return (
    <div className={calendarCurrentCls}>
      <div>현재 날짜: {currentDate.toDateString()}</div>
    </div>
  );
};

export default CalendarCurrent;