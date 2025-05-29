export interface CountdownTimerProps {
  targetDate: Date;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}