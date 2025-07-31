
'use client';

interface LearnMoreButtonProps {
    text: string;
}

export function LearnMoreButton({ text }: LearnMoreButtonProps) {
  return (
    <button className="learn-more-button learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
}
