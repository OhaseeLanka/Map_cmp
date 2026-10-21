export interface EvacuationActionPayload {
  areaName: string;
  district: string;
  division: string;
}

interface EvacuationActionButtonProps {
  areaName: string;
  district: string;
  division: string;
  onNavigate: (payload: EvacuationActionPayload) => void;
}

export function EvacuationActionButton({ areaName, district, division, onNavigate }: EvacuationActionButtonProps) {
  return (
    <button
      type="button"
      className="evacuation-action-button"
      onClick={() => onNavigate({ areaName, district, division })}
    >
      Open evacuation route map <span>→</span>
    </button>
  );
}
