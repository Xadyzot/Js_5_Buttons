let butt = document.getElementsByClassName("btns");
let bobo = document.getElementById("bobo");
let newEl = document.createElement('div');
let newText = document.createTextNode('');
let my = 5;
for (const btnA of butt) {
    btnA.addEventListener('click', function () {
        this.textContent = parseInt(this.textContent) - 1;
        if (this.textContent <= 15 ) {;
            this.classList.add('bg-success');
            this.classList.remove('bg-primary');
        };
        if (this.textContent <= 10 ) {;
            this.classList.add('bg-warning');
            this.classList.remove('bg-success');
        };
        if (this.textContent <= 5 ) {;
            this.classList.add('bg-danger');
            this.classList.remove('bg-warning');
        };
        if (this.textContent <= 0 ) {;
            this.remove();
            my -= 1
            if (my <= 0) {
                bobo.className = "bg-black"
                newEl.appendChild(newText);
                let position = document.getElementById('dividi');
                position.appendChild(newEl);
                document.getElementById('dividi').innerHTML += '<div class="h1 text-white">The End</div>';
            }
        }; 
    });
};

