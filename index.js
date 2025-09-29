console.log("yüklendim çakkal");
let kullanici=[{username:"Yyaroglek",password:"097834Ytu."}];// find ile bulup
                                                            // için dizi
//Giriş yapma işlemi
document.getElementById('btnGiriş').addEventListener('click',function(event){
    event.preventDefault()//formun sürekli yenilenmesini engeller
    let username1=document.getElementById('kullanıcıadı').value;
    let password1=document.getElementById('şifre').value;

    let user =kullanici.find(k=> k.username===username1 && k.password===password1);
    if(user){
        window.alert('Giriş başarılı yönlendiriliyorsunuz');
        //2 saniye sonra diğer sayfaya yönlendiriyor
        setTimeout(function(){
            window.location.href='index.yekta.html';
        },2000);
    }
    else
        {
        window.alert('Kullanıcı adı veya şifre hatalı');
    }
        
});