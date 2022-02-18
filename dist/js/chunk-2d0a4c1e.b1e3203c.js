(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4c1e"],{"0899":function(e,t,a){"use strict";a.r(t),a.d(t,"applyEdits",(function(){return p}));var r=a("8d60"),s=a("2c4f"),i=a("ce50"),d=a("7ffa"),n=a("b2b2"),l=a("e041"),o=a("a8d5");function u(e){return e&&null!=e.applyEdits}async function p(e,t,a,r={}){let s,i;const n={edits:a,result:new Promise((e,t)=>{s=e,i=t})};e.emit("apply-edits",n);try{var l;const{results:i,edits:n}=await c(e,t,a,r),o=e=>e.filter(e=>!e.error).map(d["a"]),u={edits:n,addedFeatures:o(i.addFeatureResults),updatedFeatures:o(i.updateFeatureResults),deletedFeatures:o(i.deleteFeatureResults),addedAttachments:o(i.addAttachmentResults),updatedAttachments:o(i.updateAttachmentResults),deletedAttachments:o(i.deleteAttachmentResults)};return null!=(l=i.editedFeatureResults)&&l.length&&(u.editedFeatures=i.editedFeatureResults),(u.addedFeatures.length||u.updatedFeatures.length||u.deletedFeatures.length||u.addedAttachments.length||u.updatedAttachments.length||u.deletedAttachments.length)&&e.emit("edits",u),s(u),i}catch(h){throw i(h),h}}async function c(e,t,a,r){if(await e.load(),!u(t))return Promise.reject(new i["a"](e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new i["a"](e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});const{edits:s,options:d}=await h(e,a,r);return s.addFeatures.length||s.updateFeatures.length||s.deleteFeatures.length||s.addAttachments.length||s.updateAttachments.length||s.deleteAttachments.length?{edits:s,results:await t.applyEdits(s,d)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function h(e,t,a){const r=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!r&&!d)throw new i["a"](e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new i["a"](e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new i["a"](e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new i["a"](e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&d)throw new i["a"](e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&d)throw new i["a"](e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const n={...a};if(null!=n.rollbackOnFailureEnabled||e.capabilities.editing.supportsRollbackOnFailure||(n.rollbackOnFailureEnabled=!0),!1===n.rollbackOnFailureEnabled&&"original-and-current-features"===n.returnServiceEditsOption)throw new i["a"](e.type+"-layer:invalid-parameter","'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&n.returnServiceEditsInSourceSR)throw new i["a"](e.type+"-layer:invalid-parameter","This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(n.returnServiceEditsInSourceSR&&"original-and-current-features"!==n.returnServiceEditsOption)throw new i["a"](e.type+"-layer:invalid-parameter","'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const l={...t};if(l.addFeatures=t&&s["a"].isCollection(t.addFeatures)?t.addFeatures.toArray():l.addFeatures||[],l.updateFeatures=t&&s["a"].isCollection(t.updateFeatures)?t.updateFeatures.toArray():l.updateFeatures||[],l.deleteFeatures=t&&s["a"].isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():l.deleteFeatures||[],l.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new i["a"](e.type+"-layer:unsupported-operation","Layer does not support adding features.");if(l.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new i["a"](e.type+"-layer:unsupported-operation","Layer does not support updating features.");if(l.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new i["a"](e.type+"-layer:unsupported-operation","Layer does not support deleting features.");l.addAttachments=l.addAttachments||[],l.updateAttachments=l.updateAttachments||[],l.deleteAttachments=l.deleteAttachments||[],l.addFeatures=l.addFeatures.map(F),l.updateFeatures=l.updateFeatures.map(F);const o=a&&a.globalIdUsed;return l.addFeatures.forEach(t=>m(t,e,o)),l.updateFeatures.forEach(t=>f(t,e,o)),l.deleteFeatures.forEach(t=>b(t,e,o)),l.addAttachments.forEach(t=>g(t,e)),l.updateAttachments.forEach(t=>g(t,e)),{edits:await w(l),options:n}}function y(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new i["a"](t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new i["a"](t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&Object(n["l"])(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new i["a"](t.type+"-layer:z-unsupported","Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new i["a"](t.type+"-layer:m-unsupported","Layer does not support m values while feature has m values.")}}function m(e,t,a){y(e,t,a)}function b(e,t,a){y(e,t,a)}function f(e,t,a){if(y(e,t,a),"geometry"in e&&Object(n["l"])(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new i["a"](t.type+"-layer:unsupported-operation","Layer does not support geometry updates.")}function g(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new i["a"](t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new i["a"](t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new i["a"](t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new i["a"](t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new i["a"](t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new i["a"](t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=Object(l["i"])(r.data);if(e&&!e.isBase64)throw new i["a"](t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function w(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map(e=>e.geometry),s=await Object(o["a"])(r),i=t.length,d=a.length;return s.slice(0,i).forEach((t,a)=>e.addFeatures[a].geometry=t),s.slice(i,i+d).forEach((t,a)=>e.updateFeatures[a].geometry=t),e}function F(e){const t=new r["a"];return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);
//# sourceMappingURL=chunk-2d0a4c1e.b1e3203c.js.map