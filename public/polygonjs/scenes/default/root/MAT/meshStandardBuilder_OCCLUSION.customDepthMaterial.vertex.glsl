#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>



// /MAT/meshStandardBuilder_OCCLUSION/attribute1
varying float v_POLY_attribute_occlusion;

// /MAT/meshStandardBuilder_OCCLUSION/attribute1
attribute float occlusion;




#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
// removed:
//		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
// removed:
//	#include <begin_vertex>



	// /MAT/meshStandardBuilder_OCCLUSION/attribute1
	v_POLY_attribute_occlusion = float(occlusion);
	
	// /MAT/meshStandardBuilder_OCCLUSION/output1
	vec3 transformed = position;
	vec3 objectNormal = normal;
	#ifdef USE_TANGENT
		vec3 objectTangent = vec3( tangent.xyz );
	#endif



	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}