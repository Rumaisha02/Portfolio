export type Tool = { name: string; icon?: string };

export default function ToolTile({ name, icon }: Tool) {
  return (
    <div
      title={name}
      className="flex size-[75px] items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:rotate-[4deg] hover:shadow-[0_10px_18px_rgba(0,0,0,0.3)]"
    >
      {icon ? (
        <img src={icon} alt={name} className="size-full object-cover" />
      ) : (
        <span className="text-sm font-semibold text-navy/50">{name.slice(0, 2)}</span>
      )}
    </div>
  );
}