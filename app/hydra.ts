/** Offline compatibility status only. The restricted provider SDK and live adapter are not distributed. */
export class HydraAdapter {
 client:any=null; database=''; collection=''; ids:string[]=[]; manifest:any[]=[];
 ingestionAccepted=false; ready=false; partialApproved=false; partialIds:string[]=[];
 last:any=null; lastComparison:any=null; operations=0; queriesUsed=0; readinessChecks=0; uncertainCharge=false;
 constructor(_storageDir?:string){}
 async restore(){} // Never loads provider receipts or selected connection configuration.
 status(){return {liveCallsEnabled:false,sdk:'Not included in this offline export',configured:false,mode:'Offline fixtures only; live retrieval adapter excluded',ids:this.ids,expectedSources:this.manifest,ingestionAccepted:false,lastComparison:null,last:null,ready:false,partialApproved:false,partialIds:[],operations:0,queriesUsed:0,readinessChecks:0,uncertainCharge:false};}
 async ingest(_sources:any[]){throw Error('Live retrieval adapter is excluded from this offline export.');}
 async readiness(){throw Error('Live retrieval adapter is excluded from this offline export.');}
 async compare(_query:string){throw Error('Live retrieval adapter is excluded from this offline export.');}
}
