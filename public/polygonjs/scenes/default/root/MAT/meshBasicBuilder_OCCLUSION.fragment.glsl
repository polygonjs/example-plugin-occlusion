uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
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




#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );



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



	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}