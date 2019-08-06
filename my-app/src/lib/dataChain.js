
export default class DataChain{
     constructor(dataTemplate){
         this.dataTemplate = dataTemplate
         this.chainMap={}
         this.processChainMap={}
         this.chainKey=[]
         this.data={}
     }
     
     setData(data){
        this.data=data
     }
     addChain(name,func){
        this.chainMap[name] = func
        this.chainKey.push(name)
     }
     addProcess(name,func){
         this.chainMap[name]="process"
         this.processChainMap[name] = func
         this.chainKey.push(name)
     }
     clearChain(){
        this.chainMap={}
        this.processChainMap={}
     }
     clearData(){
        this.data={}
     }
     clearDataAndChain(){
        this.clearChain()
        this.clearData()
     }

     excutechain(){
         this.chainKey.forEach((key)=>{
            if(this.chainMap[key] === "process"){
                this.data = this.processChainMap[key](this.data)
            }else{
                this.data = this.chainMap[key](this.data)
            }
         })
         return this.data
     }

     getData(){
         return this.excutechain()
     }
}