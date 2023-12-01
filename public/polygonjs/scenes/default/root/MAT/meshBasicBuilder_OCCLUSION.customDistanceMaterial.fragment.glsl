
// INSERT DEFINES

#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>



// /MAT/meshBasicBuilder_OCCLUSION/complement1
float complement(float x){return 1.0-x;}
vec2 complement(vec2 x){return vec2(1.0-x.x, 1.0-x.y);}
vec3 complement(vec3 x){return vec3(1.0-x.x, 1.0-x.y, 1.0-x.z);}
vec4 complement(vec4 x){return vec4(1.0-x.x, 1.0-x.y, 1.0-x.z, 1.0-x.w);}








// /MAT/meshBasicBuilder_OCCLUSION/paramOcclusionAmount
uniform float v_POLY_param_occlusionAmount;

// /MAT/meshBasicBuilder_OCCLUSION/attribute1
varying float v_POLY_attribute_occlusion;




#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>



	// /MAT/meshBasicBuilder_OCCLUSION/attribute1
	float v_POLY_attribute1_val = v_POLY_attribute_occlusion;
	
	// /MAT/meshBasicBuilder_OCCLUSION/paramOcclusionAmount
	float v_POLY_paramOcclusionAmount_val = v_POLY_param_occlusionAmount;
	
	// /MAT/meshBasicBuilder_OCCLUSION/mix1
	float v_POLY_mix1_mix = mix(0.0, v_POLY_attribute1_val, v_POLY_paramOcclusionAmount_val);
	
	// /MAT/meshBasicBuilder_OCCLUSION/complement1
	float v_POLY_complement1_val = complement(v_POLY_mix1_mix);
	
	// /MAT/meshBasicBuilder_OCCLUSION/floatToVec3_1
	vec3 v_POLY_floatToVec3_1_vec3 = vec3(v_POLY_complement1_val, v_POLY_complement1_val, v_POLY_complement1_val);
	
	// /MAT/meshBasicBuilder_OCCLUSION/output1
	diffuseColor.xyz = v_POLY_floatToVec3_1_vec3;




	// INSERT BODY

	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
