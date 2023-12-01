import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1701450451278",
  root: "1701450451278",
  nodes: {
    MAT: "1701450451278",
    "MAT/meshBasicBuilder_OCCLUSION": "1701450613534",
    "MAT/meshStandardBuilder_OCCLUSION": "1701450613534",
    dogWithOcclusion: "1701450451278",
    spheres: "1701450451278",
    headWithOcclusion: "1701450451278",
    dogWithoutOcclusion: "1701450451278",
    dogWithOcclusionAndLighting: "1701450451278",
    cameras: "1701450451278",
    "cameras/cameraControls1": "1701450451278",
    lights: "1701450451278",
  },
  shaders: {
    "/MAT/meshBasicBuilder_OCCLUSION": {
      vertex: "1701450451278",
      fragment: "1701450451278",
      "customDepthMaterial.vertex": "1701450451278",
      "customDepthMaterial.fragment": "1701450451278",
      "customDistanceMaterial.vertex": "1701450451278",
      "customDistanceMaterial.fragment": "1701450451278",
      "customDepthDOFMaterial.vertex": "1701450451278",
      "customDepthDOFMaterial.fragment": "1701450451278",
    },
    "/MAT/meshStandardBuilder_OCCLUSION": {
      vertex: "1701450451278",
      fragment: "1701450451278",
      "customDepthMaterial.vertex": "1701450451278",
      "customDepthMaterial.fragment": "1701450451278",
      "customDistanceMaterial.vertex": "1701450451278",
      "customDistanceMaterial.fragment": "1701450451278",
      "customDepthDOFMaterial.vertex": "1701450451278",
      "customDepthDOFMaterial.fragment": "1701450451278",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_default = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "default",
    urlPrefix: sceneDataRoot + "/default",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
