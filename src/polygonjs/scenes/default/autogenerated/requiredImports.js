// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshBasicBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshBasicBuilder";
import { MeshStandardMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard";
import { MeshStandardBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { MaterialsNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/MaterialsNetwork";
// sop
import { AreaLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AreaLight";
import { AttribCastSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCast";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { FileGLTFSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/FileGLTF";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { HierarchySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PlaneSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";

export const requiredImports_default = {
  nodes: [
    CameraOrbitControlsEventNode,
    MeshBasicBuilderMatNode,
    MeshStandardMatNode,
    MeshStandardBuilderMatNode,
    GeoObjNode,
    MaterialsNetworkObjNode,
    AreaLightSopNode,
    AttribCastSopNode,
    CameraControlsSopNode,
    CopySopNode,
    FileGLTFSopNode,
    HemisphereLightSopNode,
    HierarchySopNode,
    MaterialSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PlaneSopNode,
    PolarTransformSopNode,
    SphereSopNode,
    TransformSopNode,
  ],
  operations: [],
  jsFunctions: [],
};
