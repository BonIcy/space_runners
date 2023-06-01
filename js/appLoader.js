(() => {
    const body = document.querySelector('body');

    class PreLoader {
        constructor(word, isUnderline = true, isUpperCase = false) {
            this.word = word;
            this.isUnderline = isUnderline;
            this.isUpperCase = isUpperCase;
            this.loaderDiv = document.querySelector("#Loader");
        }

        addElement(val) {
            return document.createElement(val);
        }

        wordToArray() {
            this.newWord = [];
            for (let i = 0; i < this.word.length; i++) {
                this.newWord.push(this.word[i]);
            }

            return this.newWord;
        }

        setElements() {
            const canvas = this.addElement('div');
            canvas.classList.add('canvas');
            this.loaderDiv.appendChild(canvas);

            const topSection = this.addElement('div');
            topSection.classList.add('topSection');
            canvas.appendChild(topSection);

            const hr = this.addElement('hr');
            canvas.appendChild(hr);

            if (!this.isUnderline) hr.style.display = 'none';

            const bottomSection = this.addElement('div');
            bottomSection.classList.add('bottomSection');
            canvas.appendChild(bottomSection);

            this.wordToArray().forEach((node, index) => {
                let elem = this.addElement('span');
                if (node.trim() === '') node = '&nbsp;';
                if (this.isUpperCase) node = node.toUpperCase();
                topSection.appendChild(elem);
                elem.innerHTML = node;
                elem.setAttribute('style', `animation-delay:${0.1 * (index + 1)}s`);

                let secElem = this.addElement('span');
                bottomSection.appendChild(secElem);
                secElem.innerHTML = node;
                secElem.setAttribute('style', `animation-delay:${0.1 * (index + 1)}s`);
            });

            const width = topSection.offsetWidth + 'px';
            hr.style.width = width;
        }

        start() {
            this.wordToArray();
            this.setElements();
        }

    }

    const loaderDiv = document.createElement('div');
    loaderDiv.setAttribute('id', 'Loader');
    body.appendChild(loaderDiv);

    new PreLoader('loading', false, true).start();
})();

function Loader() {
    setTimeout(function() {
        window.location.href = "index.html";
    }, 4000); 
}


Loader();

