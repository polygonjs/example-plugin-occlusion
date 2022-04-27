
import {PolyScene} from '@polygonjs/polygonjs/dist/src/engine/scene/PolyScene';
// obj
import {AreaLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/AreaLight';
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {MaterialsNetworkObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/MaterialsNetwork';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {PolarTransformObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PolarTransform';
// sop
import {AttribCastSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCast';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {FileGLTFSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/FileGLTF';
import {HierarchySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {OcclusionSopNode} from '@polygonjs/plugin-occlusion/dist/src/engine/nodes/sop/Occlusion';
import {PlaneSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane';
import {SphereSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshBasicBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshBasicBuilder';
import {MeshStandardBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder';
import {MeshStandardMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard';

export class PolySceneWithNodeMap_default extends PolyScene {
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/polarTransform1'): PolarTransformObjNode;
	node(path: '/areaLight1'): AreaLightObjNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: '/MAT'): MaterialsNetworkObjNode;
	node(path: '/MAT/meshStandard_NO_OCCLUSION'): MeshStandardMatNode;
	node(path: '/MAT/meshBasicBuilder_OCCLUSION'): MeshBasicBuilderMatNode;
	node(path: '/MAT/meshStandardBuilder_OCCLUSION'): MeshStandardBuilderMatNode;
	node(path: '/dogWithOcclusion'): GeoObjNode;
	node(path: '/dogWithOcclusion/file1'): FileGLTFSopNode;
	node(path: '/dogWithOcclusion/hierarchy1'): HierarchySopNode;
	node(path: '/dogWithOcclusion/occlusion1'): OcclusionSopNode;
	node(path: '/dogWithOcclusion/attribCast1'): AttribCastSopNode;
	node(path: '/dogWithOcclusion/material1'): MaterialSopNode;
	node(path: '/spheres'): GeoObjNode;
	node(path: '/spheres/plane1'): PlaneSopNode;
	node(path: '/spheres/sphere1'): SphereSopNode;
	node(path: '/spheres/copy1'): CopySopNode;
	node(path: '/spheres/plane2'): PlaneSopNode;
	node(path: '/spheres/merge1'): MergeSopNode;
	node(path: '/spheres/occlusion1'): OcclusionSopNode;
	node(path: '/spheres/material1'): MaterialSopNode;
	node(path: '/headWithOcclusion'): GeoObjNode;
	node(path: '/headWithOcclusion/attribCast1'): AttribCastSopNode;
	node(path: '/headWithOcclusion/file1'): FileGLTFSopNode;
	node(path: '/headWithOcclusion/hierarchy1'): HierarchySopNode;
	node(path: '/headWithOcclusion/material1'): MaterialSopNode;
	node(path: '/headWithOcclusion/occlusion1'): OcclusionSopNode;
	node(path: '/dogWithoutOcclusion'): GeoObjNode;
	node(path: '/dogWithoutOcclusion/file1'): FileGLTFSopNode;
	node(path: '/dogWithoutOcclusion/hierarchy1'): HierarchySopNode;
	node(path: '/dogWithoutOcclusion/material1'): MaterialSopNode;
	node(path: '/dogWithoutOcclusion/transform1'): TransformSopNode;
	node(path: '/dogWithOcclusionAndLighting'): GeoObjNode;
	node(path: '/dogWithOcclusionAndLighting/attribCast1'): AttribCastSopNode;
	node(path: '/dogWithOcclusionAndLighting/file1'): FileGLTFSopNode;
	node(path: '/dogWithOcclusionAndLighting/hierarchy1'): HierarchySopNode;
	node(path: '/dogWithOcclusionAndLighting/material1'): MaterialSopNode;
	node(path: '/dogWithOcclusionAndLighting/occlusion1'): OcclusionSopNode;
	node(path: '/dogWithOcclusionAndLighting/transform1'): TransformSopNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
