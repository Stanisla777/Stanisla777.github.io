function CountdownTimer(elm,tl,mes){
    this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
    initialize:function(elm,tl,mes) {
        this.elem = document.getElementById(elm);
        this.tl = tl;
        this.mes = mes;
    },countDown:function(){
        var timer='';
        var today=new Date();
        var day=Math.floor((this.tl-today)/(24*60*60*1000));
        var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
        var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
        var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
        var me=this;

        if( ( this.tl - today ) > 0 ){



              timer += '<div class="number-wrapper">' +
                '<span class="number day">'+day+'</span></div><div class="timer-date">дней</div><div class="line">'+obj.delimiter+'</div>';
                timer += '<div class="number-wrapper"><span class="number hour">'+hour+'</span></div><div class="timer-date">часов</div>';
                /*timer += '<div class="number-wrapper"><span class="number min">'+this.addZero(min)+'</span></div><div class="timer-date">минут</div>';*/


            this.elem.innerHTML = timer;
            tid = setTimeout( function(){me.countDown();},10 );
        }else{
            this.elem.innerHTML = this.mes;
            return;
        }
    },addZero:function(num){ return ('0'+num).slice(-2); }
};



function CDT(year,month,day,hour,minutes,seconds,container){

    var e = +year+'/'+month+'/'+day +' '+ hour+':'+ minutes+':'+seconds;
    var tl = new Date(e);

    var timer = new CountdownTimer(container,tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');

    timer.countDown();
}

//Объявляю переменную с новым таймером. В container указываетcя id таймера
var obj = {
    year: '2019',
    month: '01',
    day:'23',
    hour:'0',
    minutes:'8',
    seconds:'00',
    delimiter:',',
    container:'upcoming-event__timer',
    method:CDT
};

obj.method(obj.year,obj.month,obj.day,obj.hour,obj.minutes,obj.seconds,obj.container);//передаю в функцию CDT параметры


if('hour' in obj ==false){
    obj.hour = '00';
}
if('minutes' in obj ==false){
    obj.minutes = '00';
}
if('seconds' in obj ==false){
    obj.seconds = '00';
}

