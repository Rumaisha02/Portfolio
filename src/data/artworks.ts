import maxItOut from "../assets/art/MaximalismPoster.png";
import featherPoster from "../assets/art/HighContrastPoster.png";
import architecturePoster from "../assets/art/architecture.webp";
import architectureThumb from "../assets/art/architecture-thumb.webp";
// import mark from "../assets/art/Mark.png";
// import typography from "../assets/art/Typography.png";
// import dietcoke from "../assets/art/DietCoke.png";

export type Artwork = {
  id: string;
  title: string;
  src?: string;
  thumb?: string;
};

export const artworks: Artwork[] = [
  { id: "feather", title: "TV Girl Poster", src: featherPoster },
  { id: "max-it-out", title: "Max It Out", src: maxItOut },
  { id: "architecture", title: "Architecture Poster", src: architecturePoster, thumb: architectureThumb },
  // { id: "mark", title: "Mark", src: mark },
  // { id: "typography", title: "Typography Poster", src: typography },
  // { id: "dietcoke", title: "Diet Coke Poster", src: dietcoke },
];