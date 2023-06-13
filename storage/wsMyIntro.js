export let wsMyIntro = {
    displayIntro(p1){
        
        return`
        <br>
        <br>
        <div id="Intro">
        <div id="Intro-img"> 
          <div class="planet">
          </div> 
        </div>
        <div id="Intro-p">
          <div class="loader">
            <p>Una Tribu</p>
            <div class="words">
                <span class="word">Sin Fronteras</span>
                <span class="word">Unida</span>
                <span class="word">Emprendedora</span>
                <span class="word">colaborativa</span>
                <span class="word">Poderosa</span>
            </div>
          </div>
          <div class="cloader">
            <div class="clface">
              <div class="clsface">
                <div id="h2" class="hand"></div>
              </div>
              <div class="top"></div>
              <div class="bottom"></div>
              <div class="left"></div>
              <div class="right"></div>
              <div id="sub" class="pin"></div>
              <div id="h1" class="hand"></div>
              <div id="main" class="pin"></div>
            </div>
          </div>
          
        </div>
      </div>
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyIntro[`${e.data.module}`](e.data.data));
})