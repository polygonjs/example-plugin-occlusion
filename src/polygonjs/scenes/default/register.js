import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../../PolyConfig';
// modules
import {ModuleName} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/modules/Common';
import {DRACOLoader} from '@polygonjs/polygonjs/dist/src/modules/three/examples/jsm/loaders/DRACOLoader';
import {GLTFLoader} from '@polygonjs/polygonjs/dist/src/modules/three/examples/jsm/loaders/GLTFLoader';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshBasicBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshBasicBuilder';
import {MeshStandardMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard';
import {MeshStandardBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder';
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
import {FileSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/File';
import {HierarchySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {PlaneSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane';
import {SphereSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
export class PolyRegister {
	static run() {
		AllExpressionsRegister.run(Poly);
		// modules
		Poly.modulesRegister.register(ModuleName.DRACOLoader, DRACOLoader);
		Poly.modulesRegister.register(ModuleName.GLTFLoader, GLTFLoader);
		// event
		Poly.registerNode(CameraOrbitControlsEventNode);
		// mat
		Poly.registerNode(MeshBasicBuilderMatNode);
		Poly.registerNode(MeshStandardMatNode);
		Poly.registerNode(MeshStandardBuilderMatNode);
		// obj
		Poly.registerNode(AreaLightObjNode);
		Poly.registerNode(GeoObjNode);
		Poly.registerNode(HemisphereLightObjNode);
		Poly.registerNode(MaterialsNetworkObjNode);
		Poly.registerNode(PerspectiveCameraObjNode);
		Poly.registerNode(PolarTransformObjNode);
		// sop
		Poly.registerNode(AttribCastSopNode);
		Poly.registerNode(CopySopNode);
		Poly.registerNode(EventsNetworkSopNode);
		Poly.registerNode(FileSopNode);
		Poly.registerNode(HierarchySopNode);
		Poly.registerNode(MaterialSopNode);
		Poly.registerNode(MergeSopNode);
		Poly.registerNode(PlaneSopNode);
		Poly.registerNode(SphereSopNode);
		Poly.registerNode(TransformSopNode);
		// custom configuration
		configurePolygonjs(Poly);
	}
}
