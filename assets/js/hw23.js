function to_f(){

    if(fBtn.classList.contains('selected')){
        return
    }else if(cBtn.classList.contains('selected')){
        cBtn.classList.remove('selected');
        kBtn.classList.remove('selected');
        fBtn.classList.add('selected');
        let tags = document.querySelectorAll('.temperature');
        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = Math.round(t*1.8+32);
            item.innerHTML = `${t}° F`;
            console.log(t);
        }
    }else {
    kBtn.classList.remove('selected');
    cBtn.classList.remove('selected');
    fBtn.classList.add('selected');
    let tags = document.querySelectorAll('.temperature');
        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = Math.round((t-273)*1.8+32);
            item.innerHTML = `${t}° F`;
            console.log(t);
        }
    }
}


function to_c(){
    if(cBtn.classList.contains('selected')){
        return
    }else if(kBtn.classList.contains('selected')){
        kBtn.classList.remove('selected');
        fBtn.classList.remove('selected');
        cBtn.classList.add('selected');
        let tags = document.querySelectorAll('.temperature');
        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = Math.round(t-273);
            item.innerHTML = `${t}° C`;
            console.log(t);
        }
    }else{
    fBtn.classList.remove('selected');
    kBtn.classList.remove('selected');
    cBtn.classList.add('selected');
    let tags = document.querySelectorAll('.temperature');
        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = Math.round((t-32)*(5/9));
            item.innerHTML = `${t}° C`;
            console.log(t);
        }
    }
}

function to_k(){
   
    if(kBtn.classList.contains('selected')){
        return
    }else if(cBtn.classList.contains('selected')){
        fBtn.classList.remove('selected');
        cBtn.classList.remove('selected');
        kBtn.classList.add('selected');
        let tags = document.querySelectorAll('.temperature');
        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = Math.round(t+273);
            item.innerHTML = `${t}° K`;
            console.log(t);
        }
    }else{
    fBtn.classList.remove('selected');
    cBtn.classList.remove('selected');
    kBtn.classList.add('selected');
    let tags = document.querySelectorAll('.temperature');
        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = Math.round((t-32)*(5/9)+273);
            item.innerHTML = `${t}° K`;
            console.log(t);
        }
    }
}