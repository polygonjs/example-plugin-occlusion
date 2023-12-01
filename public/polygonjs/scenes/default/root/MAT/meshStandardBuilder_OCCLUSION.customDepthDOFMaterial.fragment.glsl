
// INSERT DEFINES


#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>



// /MAT/meshStandardBuilder_OCCLUSION/complement1
float complement(float x){return 1.0-x;}
vec2 complement(vec2 x){return vec2(1.0-x.x, 1.0-x.y);}
vec3 complement(vec3 x){return vec3(1.0-x.x, 1.0-x.y, 1.0-x.z);}
vec4 complement(vec4 x){return vec4(1.0-x.x, 1.0-x.y, 1.0-x.z, 1.0-x.w);}








// /MAT/meshStandardBuilder_OCCLUSION/paramOcclusionAmount
uniform float v_POLY_param_occlusionAmount;

// /MAT/meshStandardBuilder_OCCLUSION/attribute1
varying float v_POLY_attribute_occlusion;




#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

struct SSSModel {
	bool isActive;
	vec3 color;
	float thickness;
	float power;
	float scale;
	float distortion;
	float ambient;
	float attenuation;
};

void RE_Direct_Scattering(
	const in IncidentLight directLight,
	const in GeometricContext geometry,
	const in SSSModel sssModel,
	inout ReflectedLight reflectedLight
	){
	vec3 scatteringHalf = normalize(directLight.direction + (geometry.normal * sssModel.distortion));
	float scatteringDot = pow(saturate(dot(geometry.viewDir, -scatteringHalf)), sssModel.power) * sssModel.scale;
	vec3 scatteringIllu = (scatteringDot + sssModel.ambient) * (sssModel.color * (1.0-sssModel.thickness));
	reflectedLight.directDiffuse += scatteringIllu * sssModel.attenuation * directLight.color;
}

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif


	#include <map_fragment>
	#include <alphamap_fragment>



	// /MAT/meshStandardBuilder_OCCLUSION/attribute1
	float v_POLY_attribute1_val = v_POLY_attribute_occlusion;
	
	// /MAT/meshStandardBuilder_OCCLUSION/paramOcclusionAmount
	float v_POLY_paramOcclusionAmount_val = v_POLY_param_occlusionAmount;
	
	// /MAT/meshStandardBuilder_OCCLUSION/mix1
	float v_POLY_mix1_mix = mix(0.0, v_POLY_attribute1_val, v_POLY_paramOcclusionAmount_val);
	
	// /MAT/meshStandardBuilder_OCCLUSION/complement1
	float v_POLY_complement1_val = complement(v_POLY_mix1_mix);
	
	// /MAT/meshStandardBuilder_OCCLUSION/floatToVec3_1
	vec3 v_POLY_floatToVec3_1_vec3 = vec3(v_POLY_complement1_val, v_POLY_complement1_val, v_POLY_complement1_val);
	
	// /MAT/meshStandardBuilder_OCCLUSION/output1
	diffuseColor.xyz = v_POLY_floatToVec3_1_vec3;
	float POLY_metalness = 1.0;
	float POLY_roughness = 1.0;
	vec3 POLY_emissive = vec3(1.0, 1.0, 1.0);
	SSSModel POLY_SSSModel = SSSModel(/*isActive*/false,/*color*/vec3(1.0, 1.0, 1.0), /*thickness*/0.1, /*power*/2.0, /*scale*/16.0, /*distortion*/0.1,/*ambient*/0.4,/*attenuation*/0.8 );




	// INSERT BODY
	// the new body lines should be added before the alphatest_fragment
	// so that alpha is set before (which is really how it would be set if the alphamap_fragment above was used by the material node parameters)

	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>


	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), diffuseColor.a );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
