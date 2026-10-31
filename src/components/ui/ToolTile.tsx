export type Tool = { name: string; icon?: string };

export default function ToolTile({ name, icon }: Tool) {
  return (
    <div
      title={name}
      className="flex size-[75px] items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
    >
      {icon ? (
        <img src={icon} alt={name} className="size-full object-cover" />
      ) : (
        <span className="text-sm font-semibold text-navy/50">{name.slice(0, 2)}</span>
      )}
    </div>
  );
}