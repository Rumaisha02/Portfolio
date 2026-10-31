import { useRef } from "react";
import catAnim from "../../assets/cat/cat.webp";

export default function Cat() {
  const img = useRef<HTMLImageElement>(null);
  const still = useRef<HTMLCanvasElement>(null);

  // on hover: copy the frame currently showing onto a canvas and put it on top
  const freeze = () => {
    const i = img.current;
    const c = still.current;
    if (!i || !c) return;
    c.width = i.naturalWidth;
    c.height = i.naturalHeight;
    c.getContext("2d")?.drawImage(i, 0, 0);
    c.style.visibility = "visible";
    i.style.visibility = "hidden";
  };

  // on leave: remove it, and the animation underneath is still running
  const unfreeze = () => {
    if (still.current) still.current.style.visibility = "hidden";
    if (img.current) img.current.style.visibility = "visible";
  };

  return (
    <div className="relative w-[330px]" onMouseEnter={freeze} onMouseLeave={unfreeze}>
      <img
        ref={img}
        src={catAnim}
        alt="Cat sitting on a stack of books, wagging its tail"
        className="block w-full"
      />
      <canvas
        ref={still}
        aria-hidden="true"
        className="pointer-events-none invisible absolute inset-0 size-full"
      />
    </div>
  );
}