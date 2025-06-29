import { TimeInputWrapper, Input } from "./TimeInputStyled";

interface PropsTimeInput {
  minutes: number,
  seconds: number,
  setMinutes: React.Dispatch<React.SetStateAction<number>>,
  setSeconds: React.Dispatch<React.SetStateAction<number>>,
  disabled: boolean
}

export default function TimeInput({
  minutes,
  seconds,
  setMinutes,
  setSeconds,
  disabled,
}: PropsTimeInput) {
  function handleMinutesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    const parsed = parseInt(raw, 10);
    const value = Math.min(720, Math.max(0, isNaN(parsed) ? 0 : parsed));
    setMinutes(value);
  }

  function handleSecondsChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    const parsed = parseInt(raw, 10);
    const value =
      minutes < 720 ? Math.min(59, Math.max(0, isNaN(parsed) ? 0 : parsed)) : 0;
    setSeconds(value);
  }

  return (
    <TimeInputWrapper>
      <Input
        type="number"
        value={minutes.toString()}
        disabled={disabled}
        onChange={handleMinutesChange}
      />
      <span>min</span>
      <Input
        type="number"
        value={seconds.toString()}
        disabled={disabled}
        onChange={handleSecondsChange}
      />
      <span>sec</span>
    </TimeInputWrapper>
  );
}
