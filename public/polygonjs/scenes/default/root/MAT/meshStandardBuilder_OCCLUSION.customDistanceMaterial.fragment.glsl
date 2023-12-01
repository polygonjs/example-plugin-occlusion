
// INSERT DEFINES

#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

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
#include <clipping_planes_pars_fragment>

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

	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
