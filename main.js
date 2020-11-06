document.addEventListener("DOMContentLoaded" ,function(){
    let icon = document.querySelector(".cover-small-icon");
    let nav = document.querySelector("#small-nav-wrapper");
    current ="click1";
    icon.onclick= function(){
        if(current =="click1"){
            this.style.color ="blue";
            nav.style.display ="block";
            current ="click2"
        }
        else if( current == "click2"){
            this.style.color ="black";
            nav.style.display ="none";
            current ="click1"
        }
    }
},false)



window.setTimeout(function () {
    $(".skill-progress").addClass("go");
}, 1000);



const time_to_write = function(the_html_chua_chu, chu, thoiGianDoi) {
    this.the_html_chua_chu = the_html_chua_chu;
    this.chu = chu;
    this.tu = '';
    this.vi_tri_index_chu = 0;
    this.thoiGianDoi = parseInt(thoiGianDoi, 10);
    this.ham_danh_chu();
    this.dang_xoa_chu = false;
}


document.addEventListener('DOMContentLoaded', chay_ham);
 function chay_ham() {
     const the_html_chua_chu = document.querySelector('.danh_chu');
     const chu = JSON.parse(the_html_chua_chu.getAttribute('data-chu'));
     const thoiGianDoi = the_html_chua_chu.getAttribute('data-thoiGianDoi');
         new time_to_write(the_html_chua_chu, chu, thoiGianDoi);
 }

 time_to_write.prototype.ham_danh_chu = function() {
    const index_chu_hien_tai = this.vi_tri_index_chu % this.chu.length;
    const chu_hien_tai = this.chu[index_chu_hien_tai];
    if(this.dang_xoa_chu) {
        this.tu = chu_hien_tai.substring(0, this.tu.length - 1);
    } else {
        this.tu = chu_hien_tai.substring(0, this.tu.length + 1);
    }
        this.the_html_chua_chu.innerHTML = `<span class="tu">${this.tu}</span>`
    let toc_do_danh_chu = 300;
    if(this.dang_xoa_chu) {
        toc_do_danh_chu = toc_do_danh_chu /2;
    }
   if(!this.dang_xoa_chu && this.tu === chu_hien_tai) {
        toc_do_danh_chu = this.thoiGianDoi;
        console.log(this.thoiGianDoi);
        this.dang_xoa_chu = true;
    } else if (this.dang_xoa_chu && this.tu === ''){
        this.dang_xoa_chu = false;
        this.vi_tri_index_chu++;
        toc_do_danh_chu = 900;
    }
   setTimeout(() => this.ham_danh_chu(), toc_do_danh_chu);
}






//settimeout for skills-progress 

const navLeft = document.querySelector(".navigation-left");
const navRight = document.querySelector(".navigation-right");

const images = document.querySelector(" .images-fake");
const colors = document.querySelector(".colored-backgrounds");

let index = 0;

function right() {
  transform((index = index < 3 ? ++index : 0));
}

function left() {
  transform((index = index > 0 ? --index : 3));
}

navLeft.addEventListener("click", left);
navRight.addEventListener("click", right);

function transform(index) {
  images.style.transform = `translateX(-${index * 100}%)`;
  colors.style.transform = `translateX(-${index * 100}%)`;
}
   
//thís is for slider 





