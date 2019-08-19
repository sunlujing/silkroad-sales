import {Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import * as Swiper from 'swiper';
import {SalesDetailPage} from '../sales-detail-page/sales-detail-page'

@Component({
  selector: 'sales-home-page',
  templateUrl: 'sales-home-page.html',
})
export class SalesHomePage {
  @ViewChild('lyScroll')
  lyScrollDiv: ElementRef;
  @ViewChild('btnBackTop')
   bBackTop: ElementRef;

  oSwiper1: any = null;
  public headerSlideData = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public el: ElementRef) {
  }

  ionViewDidLoad() {
    this.initHeaderSlide();
    this.headerSlideData = this.getHeaderSlideData();
    this.goTop();
    this.initToutiaoSlide();
    this.countdown();
  }


  private countdown() {
   let timer;
   if(timer)
     clearInterval(timer);
    // 倒计时
    var timeObj={
      h:1,
      m:37,
      s:13
    };
    var timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
    var timeList=document.getElementsByClassName('time-text');
    for(var i=0;i<timeList.length;i++){
      timeList[i].innerHTML=timeStr[i];
    }
    function toDouble(num){
      if(num<10){
        return '0'+num;
      }else{
        return ''+num;
      }
    }
    timer=setInterval(function(){
      timeObj.s--;
      if(timeObj.s==-1){
        timeObj.m--;
        timeObj.s=59;
      }
      if(timeObj.m==-1){
        timeObj.h--;
        timeObj.m=59;
      }
      if(timeObj.h==-1){
        timeObj.h=0;
        timeObj.m=0;
        timeObj.s=0;
        clearInterval(timer);
      }
      timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
      for(var i=0;i<timeList.length;i++){
        timeList[i].innerHTML=timeStr[i];
      }
    },1000)

  }


  private goTop() {
    let lyBg=this.lyScrollDiv.nativeElement;
    let btTop=this.bBackTop.nativeElement;

    lyBg.addEventListener('scroll',function(){
      var top = btTop.scrollTop;
      if(top>500){
        console.dir("小雨200")
        btTop.style.opacity = 1;
      }else{
        console.dir("大雨200")
        btTop.style.opacity = 0;
      }
    },false);

    btTop.onclick = function(){
      lyBg.scrollTop = 0;
    }
  }


  // 初始化京东头条滚动条
  private initToutiaoSlide() {
    new Swiper('#toutiaoSlider', {
      direction:'vertical',
      autoplay: 2000,
      loop: true
    });
  }
  // 初始化头部滚动条
  private initHeaderSlide() {
    this.oSwiper1 = new Swiper('.swiper-container', {
      slidesPerView: 1,
      paginationClickable: true,
      centeredSlides: true,
      autoplay: 2000,
      autoplayDisableOnInteraction: false,
      loop: false,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 改变自动更新
      observer:true,
      observeParents:true
    });

  }

  private getHeaderSlideData() {
    return [
      {
        alt: "西港天然沙滩",
        src: "assets/img/silkroad/head-slide-1.jpg"
      },
      {
        alt: "路上丝绸之路",
        src: "assets/img/silkroad/head-slide-1.jpg"
      }

    ];
  }

  showDetailLand()
  {
    this.navCtrl.push(SalesDetailPage, {

          });
  }


}
