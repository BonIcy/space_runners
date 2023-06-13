export default{
    muestraIntro(){
        const ws = new Worker("../storage/wsMyIntro.js", {type: "module"});
        let id = [];
        let count = 0;
        ws.postMessage({module:"displayIntro", data: this.data}) 
        id = [".intro"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==0) ? ws.terminate(): count++;
        });
    }
}