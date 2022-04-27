import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651076475916',
	root: '1651076475916',
	nodes: {
		perspectiveCamera1: '1651076475916',
		'perspectiveCamera1/events1': '1651076475916',
		MAT: '1651076475916',
		'MAT/meshBasicBuilder_OCCLUSION': '1651076475916',
		'MAT/meshStandardBuilder_OCCLUSION': '1651076475916',
		dogWithOcclusion: '1651076475916',
		spheres: '1651076475916',
		headWithOcclusion: '1651076475916',
		dogWithoutOcclusion: '1651076475916',
		dogWithOcclusionAndLighting: '1651076475916',
	},
};

export const loadSceneData_default = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'default',
		urlPrefix: sceneDataRoot + '/' + 'default',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
