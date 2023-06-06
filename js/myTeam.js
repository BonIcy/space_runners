export default{
    muestraTeam(){
        const ws = new Worker("../storage/wsMyTeam.js", {type: "module"});
        let id = [];
        let count = 0;
        ws.postMessage({module:"displayTeam", data: this.data}) 
        id = [".integrantes"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==0) ? ws.terminate(): count++;
        });
    }
}