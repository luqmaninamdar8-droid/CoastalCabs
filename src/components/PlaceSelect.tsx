import { otherPlace, places } from "@/lib/site";

export function PlaceSelect({
  id,
  label,
  value,
  custom,
  onValue,
  onCustom,
  className,
}: {
  id: string;
  label: string;
  value: string;
  custom: string;
  onValue: (value: string) => void;
  onCustom: (value: string) => void;
  className?: string;
}) {
  const customId = `${id}-custom`;

  return (
    <div className={className}>
      <label className="text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="field mt-1.5"
        value={value}
        onChange={(event) => onValue(event.target.value)}
      >
        {places.map((place) => (
          <option key={place}>{place}</option>
        ))}
      </select>
      {value === otherPlace ? (
        <label className="mt-2 block text-sm font-semibold" htmlFor={customId}>
          Your location
          <input
            id={customId}
            className="field mt-1.5"
            value={custom}
            onChange={(event) => onCustom(event.target.value)}
            placeholder="Hotel, village, or landmark"
            autoComplete="off"
          />
        </label>
      ) : null}
    </div>
  );
}
