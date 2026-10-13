/** Frozen demo lookup: pure cache/local metadata only. No network/client dependency. */
export function cachedEvidence(localId:string, fixtures:any[], manifest:any[], comparison:any){
 const fixture=fixtures.find(s=>s.id===localId),record=manifest.find(m=>m.localId===localId);
 if(!fixture||!record?.result?.id||comparison?.operation!=='comparison')return undefined;
 const chunks=(comparison.calls||[]).flatMap((call:any)=>call.response?.data?.chunks||[]).filter((chunk:any)=>chunk.id===record.result.id&&typeof chunk.chunkContent==='string'&&chunk.chunkContent.length);
 if(!chunks.length)return undefined;
 const body=[...new Set<string>(chunks.map((chunk:any)=>chunk.chunkContent))].join('\n');
 return {...fixture,body,providerSourceId:record.result.id,ingestedAt:chunks.find((chunk:any)=>chunk.sourceUploadTime)?.sourceUploadTime,retrievedAt:comparison.at,retrievalMode:'cached actual HydraDB query passages; no live source fetch'};
}
export const unavailableEvidence=(sourceId:string)=>({error:'Evidence is unavailable locally or in cached retrieval. Remote source inspection is disabled for this frozen demo.',code:'EVIDENCE_UNAVAILABLE',sourceId,remoteInspection:false});
