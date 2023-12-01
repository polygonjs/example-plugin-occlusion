import { fetchSceneAndMount_default } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_default(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-default";
  const loadedData = await fetchSceneAndMount_default({
    domElement,
    autoPlay: true,
    onProgress,
    sceneDataRoot: publicPath + "/polygonjs/scenes",
    assetsRoot: publicPath,
    libsRootPrefix: publicPath,
  });
  return loadedData;
}
