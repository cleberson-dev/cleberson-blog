import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const convertToRGB = (HEX) => {
  if (!HEX.startsWith("#") || HEX.length !== 7) {
    throw new Error("Não é um valor HEX válido.");
  }

  const HEXChannels = {
    R: HEX.slice(1, 3),
    G: HEX.slice(3, 5),
    B: HEX.slice(5, 7)
  };

  const RGBChannels = {
    R: Number.parseInt(HEXChannels.R, 16),
    G: Number.parseInt(HEXChannels.G, 16),
    B: Number.parseInt(HEXChannels.B, 16)
  }

  const { R, G, B } = RGBChannels;
  return `rgb(${R}, ${G}, ${B})`;
}

export const extractRGBChannels = (RGBString) => {
  const values = RGBString
    .slice(4)
    .replace(")", "")
    .split(",");

  return {
    R: Number.parseInt(values[0]),
    G: Number.parseInt(values[1]),
    B: Number.parseInt(values[2])
  }
}

export const RGBToHEX = (RGBChannels) => {
  const { R, G, B } = RGBChannels;

  const H = R.toString(16);
  const E = G.toString(16);
  const X = B.toString(16);

  return `#${H}${E}${X}`;
}

export const darkenHEX = (HEX, percentage = 0.01) => {
  if (percentage > 1) {
    throw new Error();
  }

  const rgbString = convertToRGB(HEX);
  const RGBChannels = extractRGBChannels(rgbString);

  
  const darkenedRGBChannels = {
    R: Number.parseInt(RGBChannels.R - (RGBChannels.R * percentage)),
    G: Number.parseInt(RGBChannels.G - (RGBChannels.G * percentage)),
    B: Number.parseInt(RGBChannels.B - (RGBChannels.B * percentage))
  }
  
  return RGBToHEX(darkenedRGBChannels);
}

export const formatDate = (dateString) => (
  format(
    new Date(dateString), 
    `d 'de' LLLL 'de' yyyy`, 
    { locale: ptBR }
  )
);

export const getPostsOutOfMarkdownRemarks = (markdownRemarkNodes) => {
  return markdownRemarkNodes
    .filter((node) => (
      node.parent.relativeDirectory !== ""  && node.parent.base === "content.md"
    ));
};


export const getPostImages = (imageSharpNodes) => (
  imageSharpNodes.filter((node) => (
    node.parent.sourceInstanceName === "posts" 
    && node.parent.name === "cover"
    && node.parent.relativeDirectory !== ""
  ))
);

export const filterPostsByCategory = (posts, category) => (
  posts.filter(post => post.frontmatter.category === category)
);