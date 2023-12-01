import { LoadedData } from "./loadScene";

interface LoadSceneAndMountOptions {
  domElement?: string | undefined;
  publicPath: string;
  onProgress: (progress: number) => void;
}

type LoadSceneAndMount_default = (
  options: LoadSceneAndMountOptions
) => Promise<LoadedData>;

export const loadSceneAndMount_default: LoadSceneAndMount_default;
