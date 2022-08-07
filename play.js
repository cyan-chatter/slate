const iconbasepath = "utils/icons/";
const iconMap = {
  state: {
    domId: "stateWrapper",
    iconUrl: [`${iconbasepath}pencil.svg`, `${iconbasepath}eraser.svg`],
    alt: ["&#128397;", "&#9938;"],
  },
  brush: {
    domId: "brushBtnWrapper",
    iconUrl: [`${iconbasepath}pencil.svg`],
    alt: ["&#128397;"],
  },
  eraser: {
    domId: "eraserBtnWrapper",
    iconUrl: [`${iconbasepath}eraser.svg`],
    alt: ["&#9938;"],
  },
  clear: {
    domId: "clearCanvasBtnWrapper",
    iconUrl: [`${iconbasepath}clear.svg`],
    alt: ["&#11119;"],
  },
  save: {
    domId: "saveBtnWrapper",
    iconUrl: [`${iconbasepath}save.svg`],
  },
  up: {
    domId: "brushSizeIncBtnWrapper",
    iconUrl: [`${iconbasepath}up.svg`],
    alt: ["&#11145;"],
  },
  down: {
    domId: "brushSizeDecBtnWrapper",
    iconUrl: [`${iconbasepath}down.svg`],
    alt: ["&#11147;"],
  },
  mode: {
    domId: "brushModeBtnWrapper",
    iconUrl: [`${iconbasepath}mode1.svg`, `${iconbasepath}mode2.svg`],
    alt: ["&#8652;"],
  },
};


const attachIcons = () => {
  for (const key in iconMap) {
    const icon = iconMap[key];
    const iconBtnWrapper = document.getElementById(icon.domId);
    if (iconBtnWrapper) {
      const iconImg = document.createElement("OBJECT");
      iconImg.setAttribute("id", `${icon.domId}Icon`);
      iconImg.setAttribute("class", "svg-icon");
      iconImg.setAttribute("type", "image/svg+xml");
      iconImg.setAttribute("data", icon.iconUrl[0]);
      // iconImg.setAttribute("viewBox", "0 0 24 24");
      // iconImg.setAttribute("xmlns", icon.iconUrl[0]);
      iconBtnWrapper.appendChild(iconImg);
    }
  }
};


