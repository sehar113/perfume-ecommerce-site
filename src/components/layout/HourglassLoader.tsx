import { cn } from "@/lib/utils";

interface HourglassLoaderProps {
  className?: string;
  text?: string;
}

export function HourglassLoader({ className, text }: HourglassLoaderProps) {
  return (
    <div className={cn("hourglass-loader-container", className)}>
      <div className="hourglassBackground">
        <div className="hourglassContainer">
          <div className="hourglassCurves"></div>
          <div className="hourglassCapTop"></div>
          <div className="hourglassGlassTop"></div>
          <div className="hourglassSand"></div>
          <div className="hourglassSandStream"></div>
          <div className="hourglassCapBottom"></div>
          <div className="hourglassGlass"></div>
        </div>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}
