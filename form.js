function fun1() {
    var a = document.getElementById('values').value;
    var b = document.getElementById('rightdiv');
    var c = document.getElementById('left-div');
    var d = document.getElementById('right-div');

    // const abc = () => {
    //     var p = document.createElement('div');
    //     p.setAttribute("id", "left1");
    //     c.appendChild(p);

    //     var q = document.createElement('div');
    //     q.setAttribute("id", "right1");
    //     d.appendChild(q);

    //     var p1 = document.createElement('input');
    //     p1.setAttribute("placeholder", "Label");
    //     p.appendChild(p1);

    //     var p2 = document.createElement('button');
    //     var p2p = document.createTextNode('ADD');
    //     p2.appendChild(p2p);
    //     p.appendChild(p2);

    //     var q1 = document.createElement('input');
    //     q1.setAttribute("placeholder", "Text");
    //     q1.setAttribute("id", "inputval");
    //     q.appendChild(q1);

    //     var q2 = document.createElement('button');
    //     var q2q = document.createTextNode('x');
    //     q2.appendChild(q2q);
    //     q.appendChild(q2);
    //     q2.style.float = "right";

    //     p2.onclick = () => {
    //         var z = document.createElement('span');
    //         p.insertBefore(z, p.firstChild);
    //         z.innerHTML = p1.value + ":";
    //         p1.remove();
    //         p2.remove();
    //     }

    //     q2.onclick = () => {
    //         p.remove();
    //         q.remove();
    //     }
    // }
    if (a == "text") {
        // abc();
        var p = document.createElement('div');
        p.setAttribute("id", "left1");
        c.appendChild(p);

        var q = document.createElement('div');
        q.setAttribute("id", "right1");
        d.appendChild(q);

        var p1 = document.createElement('input');
        p1.setAttribute("placeholder", "Label");
        p.appendChild(p1);

        var p2 = document.createElement('button');
        var p2p = document.createTextNode('ADD');
        p2.appendChild(p2p);
        p.appendChild(p2);

        var q1 = document.createElement('input');
        q1.setAttribute("placeholder", "Text");
        q1.setAttribute("id", "int1");
        q.appendChild(q1);

        var q2 = document.createElement('button');
        var q2q = document.createTextNode('x');
        q2.appendChild(q2q);
        q.appendChild(q2);
        q2.style.float = "right";

        p2.onclick = () => {
            var z = document.createElement('span');
            p.insertBefore(z, p.firstChild);
            z.innerHTML = p1.value + ":";
            p1.remove();
            p2.remove();
        }

        q2.onclick = () => {
            p.remove();
            q.remove();
        }
    }

    if (a == "number") {
        // abc();
        var p = document.createElement('div');
        p.setAttribute("id", "left1");
        c.appendChild(p);

        var q = document.createElement('div');
        q.setAttribute("id", "right1");
        d.appendChild(q);

        var p1 = document.createElement('input');
        p1.setAttribute("placeholder", "Label");
        p.appendChild(p1);

        var p2 = document.createElement('button');
        var p2p = document.createTextNode('ADD');
        p2.appendChild(p2p);
        p.appendChild(p2);

        var q1 = document.createElement('input');
        q1.setAttribute("placeholder", "Number");
        q1.setAttribute("id", "int2");
        q.appendChild(q1);

        var q2 = document.createElement('button');
        var q2q = document.createTextNode('x');
        q2.appendChild(q2q);
        q.appendChild(q2);
        q2.style.float = "right";

        p2.onclick = () => {
            var z = document.createElement('span');
            p.insertBefore(z, p.firstChild);
            z.innerHTML = p1.value + ":";
            p1.remove();
            p2.remove();
        }

        q2.onclick = () => {
            p.remove();
            q.remove();
        }
    }
    if (a == "email") {
        // abc();
        var p = document.createElement('div');
        p.setAttribute("id", "left1");
        c.appendChild(p);

        var q = document.createElement('div');
        q.setAttribute("id", "right1");
        d.appendChild(q);

        var p1 = document.createElement('input');
        p1.setAttribute("placeholder", "Label");
        p.appendChild(p1);

        var p2 = document.createElement('button');
        var p2p = document.createTextNode('ADD');
        p2.appendChild(p2p);
        p.appendChild(p2);

        var q1 = document.createElement('input');
        q1.setAttribute("placeholder", "Email");
        q1.setAttribute("id", "int3");
        q.appendChild(q1);

        var q2 = document.createElement('button');
        var q2q = document.createTextNode('x');
        q2.appendChild(q2q);
        q.appendChild(q2);
        q2.style.float = "right";

        p2.onclick = () => {
            var z = document.createElement('span');
            p.insertBefore(z, p.firstChild);
            z.innerHTML = p1.value + ":";
            p1.remove();
            p2.remove();
        }

        q2.onclick = () => {
            p.remove();
            q.remove();
        }
    }

    if (a == "radio") {
        var p = document.createElement('div');
        p.setAttribute("id", "left1");
        p.setAttribute("class", "hgt");
        c.appendChild(p);

        var q = document.createElement('div');
        q.setAttribute("id", "right1");
        q.setAttribute("class", "hgt");
        d.appendChild(q);

        var p1 = document.createElement('input');
        p1.setAttribute("placeholder", "Label");
        p.appendChild(p1);

        var p2 = document.createElement('button');
        var p2p = document.createTextNode('ADD');
        p2.appendChild(p2p);
        p.appendChild(p2);

        var q1 = document.createElement('input');
        q1.setAttribute("placeholder", "Options");
        q.appendChild(q1);
        q1.className = "hide";

        var q2 = document.createElement('button');
        var q2q = document.createTextNode('ADD');
        q2.appendChild(q2q);
        q.appendChild(q2);
        q2.className = "hide";

        var q3 = document.createElement('button');
        var q3q = document.createTextNode('x');
        q3.appendChild(q3q);
        q.appendChild(q3);
        q3.style.float = "right";
        // q3.className = "hide";

        p2.onclick = () => {
            var z = document.createElement('span');
            p.insertBefore(z, p.firstChild);
            z.innerHTML = p1.value + ":";
            p1.remove();
            p2.remove();
        }

        q2.onclick = () => {
            var a = q1.value;
            var x = document.createElement('input');
            x.setAttribute("type", "radio");
            x.setAttribute("name", "radio1");
            var y = document.createElement('label');
            y.setAttribute("for", "radio1");
            var y1 = document.createTextNode(a);
            y.appendChild(y1);

            var div = document.createElement('div');
            div.appendChild(x);
            div.appendChild(y);
            q.insertBefore(div, q.firstChild);
        }

        q3.onclick = () => {
            p.remove();
            q.remove();
        }
    }
    let pqr = () => {
        var x = document.getElementsByClassName("hide");
        x[0].style.display = "none";
        x[1].style.display = "none";
        // x[2].style.display = "none";
    }

    if (a == "select") {
        pqr();
        var p = document.createElement('div');
        p.setAttribute("id", "left1");
        p.setAttribute("class", "hgt");
        
        c.appendChild(p);
        
        var q = document.createElement('div');
        q.setAttribute("id", "right1");
        q.setAttribute("class", "hgt");
        d.appendChild(q);

        var p1 = document.createElement('input');
        p1.setAttribute("placeholder", "Label");
        p.appendChild(p1);

        var p2 = document.createElement('button');
        var p2p = document.createTextNode('ADD');
        p2.appendChild(p2p);
        p.appendChild(p2);

        p2.onclick = () => {
            var z = document.createElement('span');
            p.insertBefore(z, p.firstChild);
            z.innerHTML = p1.value + ":";
            p1.remove();
            p2.remove();
        }

        var q1 = document.createElement('select');
        q1.setAttribute("id","selectoption");
        q1.style.width = "60%";
        q1.setAttribute("placeholder", "Options");
        q.appendChild(q1);

        var q2 = document.createElement('input');
        q2.setAttribute("placeholder", "Options");
        q.appendChild(q2);
        q2.className = "hide2";


        var q3 = document.createElement('button');
        var q3q = document.createTextNode('ADD');
        q3.appendChild(q3q);
        q.appendChild(q3);
        q3.className = "hide2";

        var q4 = document.createElement('button');
        var q4q = document.createTextNode('x');
        q4.appendChild(q4q);
        q.appendChild(q4);
        q4.style.float = "right";

        q3.onclick = () => {
            var x = q2.value;
            var y = document.createElement('option');
            var z = document.createTextNode(x);
            y.appendChild(z);
            console.log(y);
            q1.appendChild(y);
        }

        q4.onclick = () => {
            p.remove();
            q.remove();
        }

    }
    let pqr2 = () => {
        var x = document.getElementsByClassName("hide2");
        x[0].style.display = "none";
        x[1].style.display = "none";
    }

    if (a == "checkbox") {
        pqr2();
        var p = document.createElement('div');
        p.setAttribute("id", "left1");
        p.setAttribute("class", "hgt");
        c.appendChild(p);
        
        var q = document.createElement('div');
        q.setAttribute("id", "right1");
        q.setAttribute("class", "hgt");
        d.appendChild(q);

        var p1 = document.createElement('input');
        p1.setAttribute("placeholder", "Label");
        p.appendChild(p1);

        var p2 = document.createElement('button');
        var p2p = document.createTextNode('ADD');
        p2.appendChild(p2p);
        p.appendChild(p2);

        var q1 = document.createElement('input');
        q1.setAttribute("placeholder", "Options");
        q.appendChild(q1);
        q1.className = "hide3";

        var q2 = document.createElement('button');
        var q2q = document.createTextNode('ADD');
        q2.appendChild(q2q);
        q.appendChild(q2);
        q2.className = "hide3";

        var q3 = document.createElement('button');
        var q3q = document.createTextNode('x');
        q3.appendChild(q3q);
        q.appendChild(q3);
        q3.style.float = "right";

        p2.onclick = () => {
            var z = document.createElement('span');
            p.insertBefore(z, p.firstChild);
            z.innerHTML = p1.value + ":";
            p1.remove();
            p2.remove();
        }

        q2.onclick = () => {
            var a = q1.value;
            var x = document.createElement('input');
            x.setAttribute("type", "checkbox");
            x.setAttribute("name", "check1");
            x.setAttribute("class", "checkedItem");
            var y = document.createElement('label');
            y.setAttribute("for", "check1");
            var y1 = document.createTextNode(a);
            y.appendChild(y1);

            var div = document.createElement('div');
            div.appendChild(x);
            div.appendChild(y);
            q.insertBefore(div, q.firstChild);
        }
        q3.onclick = () => {
            p.remove();
            q.remove();
        }
    }
    let pqr3 = () => {
        var x = document.getElementsByClassName("hide3");
        x[0].style.display = "none";
        x[1].style.display = "none";
    }
    if (a == "submit") {
        pqr3();
        alert("Is your form complete");
        var a = document.createElement('div');
        a.style.marginLeft = "-43px";
        var b = document.createElement("button");
        b.setAttribute("onclick", "submit_form()");
        b.setAttribute("id", "submit-btn");
        var b1 = document.createTextNode('Submit');
        b.appendChild(b1);
        a.appendChild(b);
        b.style.display = "block";
        a.appendChild(b);
        document.getElementById('right-div').appendChild(a);

        b.onclick = () => {
            var a = document.getElementById('left-div');
            var b = document.getElementById('right-div');
            var c = document.getElementById('bleft1');
            var d = document.getElementById('bleft2');

            c.innerHTML = a.innerHTML;
            d.innerHTML = b.innerHTML;
        }



    }


}

var name1;
var age;
var email;
var radio;
var select;
var checkbox;
function submit_form(){
    var a = document.getElementById("bright1");
    var b = document.getElementById("left-div");
    a.innerHTML = b.innerHTML;
    document.getElementById("submit-btn").style.marginTop = "20px";
    // var inp = document.getElementById("inputval").value;
    // console.log(inp);
    name1 = document.getElementById('int1').value;
    age = document.getElementById('int2').value;
    email = document.getElementById('int3').value;
    radio = document.querySelector('input[name= "radio1"]:checked').value;
    select = document.getElementById('selectoption');
    var slp = select.options[select.selectedIndex].text;
    checkbox = document.querySelector('.checkedItem:checked').value;
     
    var c = document.getElementById('bright2');
    c.innerHTML = `${name1} <br> ${age} <br> ${email} <br> ${radio} <br> ${slp} <br> ${checkbox} `

    console.log(name1);
    console.log(age);
    console.log(email);
    console.log(radio);
    console.log(select);
    console.log(checkbox);

}




