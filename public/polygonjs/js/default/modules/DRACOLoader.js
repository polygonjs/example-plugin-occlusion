import"../chunk-BYXBJQAS.js";import{Zb as w,oc as L,rc as D,sc as k}from"../chunk-D6WTR7OC.js";import"../chunk-KBNISIIW.js";var T=new WeakMap,A=class extends D{constructor(e){super(e);this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,s,i,r){let n=new k(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,t=>{let o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(t,o).then(s).catch(r)},i,r)}decodeDracoFile(e,s,i,r){let n={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i};this.decodeGeometry(e,n).then(s)}decodeGeometry(e,s){for(let a in s.attributeTypes){let h=s.attributeTypes[a];h.BYTES_PER_ELEMENT!==void 0&&(s.attributeTypes[a]=h.name)}let i=JSON.stringify(s);if(T.has(e)){let a=T.get(e);if(a.key===i)return a.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r,n=this.workerNextTaskID++,t=e.byteLength,o=this._getWorker(n,t).then(a=>(r=a,new Promise((h,c)=>{r._callbacks[n]={resolve:h,reject:c},r.postMessage({type:"decode",id:n,taskConfig:s,buffer:e},[e])}))).then(a=>this._createGeometry(a.geometry));return o.catch(()=>!0).then(()=>{r&&n&&this._releaseTask(r,n)}),T.set(e,{key:i,promise:o}),o}_createGeometry(e){let s=new L;e.index&&s.setIndex(new w(e.index.array,1));for(let i=0;i<e.attributes.length;i++){let r=e.attributes[i],n=r.name,t=r.array,o=r.itemSize;s.setAttribute(n,new w(t,o))}return s}_loadLibrary(e,s){let i=new k(this.manager);return i.setPath(this.decoderPath),i.setResponseType(s),i.setWithCredentials(this.withCredentials),new Promise((r,n)=>{i.load(e,r,void 0,n)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",s=[];return e?s.push(this._loadLibrary("draco_decoder.js","text")):(s.push(this._loadLibrary("draco_wasm_wrapper.js","text")),s.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(s).then(i=>{let r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);let n=P.toString(),t=["/* draco decoder */",r,"","/* worker */",n.substring(n.indexOf("{")+1,n.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([t]))}),this.decoderPending}_getWorker(e,s){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(n){let t=n.data;switch(t.type){case"decode":r._callbacks[t.id].resolve(t);break;case"error":r._callbacks[t.id].reject(t);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+t.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,n){return r._taskLoad>n._taskLoad?-1:1});let i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=s,i._taskLoad+=s,i})}_releaseTask(e,s){e._taskLoad-=e._taskCosts[s],delete e._callbacks[s],delete e._taskCosts[s]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}};function P(){let g,e;onmessage=function(t){let o=t.data;switch(o.type){case"init":g=o.decoderConfig,e=new Promise(function(c){g.onModuleLoaded=function(u){c({draco:u})},DracoDecoderModule(g)});break;case"decode":let a=o.buffer,h=o.taskConfig;e.then(c=>{let u=c.draco,d=new u.Decoder,f=new u.DecoderBuffer;f.Init(new Int8Array(a),a.byteLength);try{let l=s(u,d,f,h),y=l.attributes.map(m=>m.array.buffer);l.index&&y.push(l.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:l},y)}catch(l){console.error(l),self.postMessage({type:"error",id:o.id,error:l.message})}finally{u.destroy(f),u.destroy(d)}});break}};function s(t,o,a,h){let c=h.attributeIDs,u=h.attributeTypes,d,f,l=o.GetEncodedGeometryType(a);if(l===t.TRIANGULAR_MESH)d=new t.Mesh,f=o.DecodeBufferToMesh(a,d);else if(l===t.POINT_CLOUD)d=new t.PointCloud,f=o.DecodeBufferToPointCloud(a,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let y={index:null,attributes:[]};for(let m in c){let p=self[u[m]],b,_;if(h.useUniqueIDs)_=c[m],b=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,t[c[m]]),_===-1)continue;b=o.GetAttribute(d,_)}y.attributes.push(r(t,o,d,m,p,b))}return l===t.TRIANGULAR_MESH&&(y.index=i(t,o,d)),t.destroy(d),y}function i(t,o,a){let c=a.num_faces()*3,u=c*4,d=t._malloc(u);o.GetTrianglesUInt32Array(a,u,d);let f=new Uint32Array(t.HEAPF32.buffer,d,c).slice();return t._free(d),{array:f,itemSize:1}}function r(t,o,a,h,c,u){let d=u.num_components(),l=a.num_points()*d,y=l*c.BYTES_PER_ELEMENT,m=n(t,c),p=t._malloc(y);o.GetAttributeDataArrayForAllPoints(a,u,m,y,p);let b=new c(t.HEAPF32.buffer,p,l).slice();return t._free(p),{name:h,array:b,itemSize:d}}function n(t,o){switch(o){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32}}}var I={moduleName:"DRACOLoader",module:A};export{I as DRACOLoaderModule};
