export function validateUpdateTarget(input:any,projectId:string,projects:any[]){
 const persona=String(input.persona||input.author||'').trim(),author=String(input.author||persona).trim(),kind=input.targetKind||'project';
 if(!projects.some(p=>p.profiles.some((u:any)=>u.person===persona))||author!==persona)throw Error('Unknown or mismatched demo persona');
 if(input.projectId&&input.projectId!==projectId)throw Error('Update project does not match selected project');
 const project=projects.find(p=>p.id===projectId);if(!project||!['project','task'].includes(kind))throw Error('Invalid update target');
 const taskId=kind==='task'?String(input.taskId||''):null,task=taskId?project.tasks?.find((t:any)=>t.id===taskId):null;
 if(kind==='task'&&(!task||task.owner!==persona))throw Error('Task is not owned by this demo persona in the selected project');
 if(kind==='project'&&input.taskId)throw Error('Project update cannot silently target a task');
 const originalText=String(input.body||''),originalEventAt=String(input.eventAt||'');if(originalText.trim().length<10||originalText.length>1500||!Number.isFinite(Date.parse(originalEventAt)))throw Error('Meaningful original text and valid timestamp required');
 const requestId=input.requestId===undefined?null:String(input.requestId);if(requestId!==null&&!/^[a-zA-Z0-9-]{8,80}$/.test(requestId))throw Error('Invalid update request ID');
 return {persona,projectId,targetKind:kind,taskId,requestId,originalText,originalEventAt};
}
export function existingUpdate(sources:any[],meta:any){if(!meta.requestId)return null;const prior=sources.find(s=>s.requestId===meta.requestId);if(!prior)return null;if(prior.persona!==meta.persona||prior.projectId!==meta.projectId||prior.targetKind!==meta.targetKind||prior.taskId!==meta.taskId||prior.originalText!==meta.originalText)throw Error('Update request ID reused with a different target or text');return prior;}
