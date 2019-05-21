

export default class IndexController{
    private resp;
    constructor(req,resp){
        this.resp = resp;
    }
    index():void{
        this.resp.send('direto da controller');
    }
}