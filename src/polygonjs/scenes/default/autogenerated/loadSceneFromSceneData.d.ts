import { ScenePlayerImporter } from '@polygonjs/polygonjs/dist/src/engine/io/player/Scene';
import {configureScene} from '../PolyConfig';
import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../PolyConfig';
import {requiredImports_default} from './requiredImports';
import { SceneJsonExporterData } from '@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene';
import { OnProgressCallback } from './loadSceneData';
import { PolySceneWithNodeMap_default } from './PolySceneWithNodeMap';
import { BaseViewerType } from '@polygonjs/polygonjs/dist/src/engine/viewers/_Base';

export interface loadSceneOptions {
	sceneData: SceneJsonExporterData;
	onProgress: OnProgressCallback;
	domElement?: HTMLElement;
	runRegister?: boolean;
}
interface LoadedData {
	scene: PolySceneWithNodeMap_default,
	viewer: BaseViewerType|undefined
}
export type LoadSceneMethod = (options: loadSceneOptions) => Promise<LoadedData|undefined>;

const loadSceneFromSceneData_default: LoadSceneMethod;

export {Poly, loadSceneFromSceneData_default};