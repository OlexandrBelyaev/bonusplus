var i=0;
function openSearch() {
if (i===0){
  document.getElementById("myOverlay").style.display = "block";i=1;
  document.getElementById("myTopnav").style.display = "none";
  }
else{closeSearch();i=0;}
}
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("myTopnav").style.display = "block"; 
}
 /* этот код помечает картинки, для удобства разработки */
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    /* конфигурация */
    var width = 320; // ширина изображения
    var count = 1; // количество изображений

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
	
	
	
	    /* этот код помечает картинки, для удобства разработки */
    var lis1 = document.getElementsByTagName('li');
    for (var i = 0; i < lis1.length; i++) {
      lis1[i].style.position = 'relative';
      var span1 = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span1.style.cssText = 'position:absolute;left:0;top:0';
      span1.innerHTML = i + 1;
      lis1[i].appendChild(span);
    }

    /* конфигурация */
    var width1 = 320; // ширина изображения
    var count1 = 1; // количество изображений

    var carousel1 = document.getElementById('carousel1');
    var list1 = carousel1.querySelector('ul');
    var listElems1 = carousel1.querySelectorAll('li');

    var position1 = 0; // текущий сдвиг влево

    carousel1.querySelector('.prev1').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position1 = Math.min(position1 + width1 * count1, 0)
      list1.style.marginLeft = position1 + 'px';
    };

    carousel1.querySelector('.next1').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position1 = Math.max(position1 - width1 * count1, -width1 * (listElems1.length - count1));
      list1.style.marginLeft = position1 + 'px';
    };
	
	
	
		    /* этот код помечает картинки, для удобства разработки */
    var lis2 = document.getElementsByTagName('li');
    for (var i = 0; i < lis2.length; i++) {
      lis2[i].style.position = 'relative';
      var span2 = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span2.style.cssText = 'position:absolute;left:0;top:0';
      span2.innerHTML = i + 1;
      lis2[i].appendChild(span);
    }

    /* конфигурация */
    var width2 = 320; // ширина изображения
    var count2 = 1; // количество изображений

    var carousel2 = document.getElementById('carousel2');
    var list2 = carousel2.querySelector('ul');
    var listElems2 = carousel2.querySelectorAll('li');

    var position2 = 0; // текущий сдвиг влево

    carousel2.querySelector('.prev2').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position2 = Math.min(position2 + width2 * count2, 0)
      list2.style.marginLeft = position2 + 'px';
    };

    carousel2.querySelector('.next2').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position2 = Math.max(position2 - width2 * count2, -width2 * (listElems2.length - count2));
      list2.style.marginLeft = position2 + 'px';
    };
 
 
 
 		    /* этот код помечает картинки, для удобства разработки */
    var lis3 = document.getElementsByTagName('li');
    for (var i = 0; i < lis3.length; i++) {
      lis3[i].style.position = 'relative';
      var span3 = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span3.style.cssText = 'position:absolute;left:0;top:0';
      span3.innerHTML = i + 1;
      lis3[i].appendChild(span);
    }

    /* конфигурация */
    var width3 = 320; // ширина изображения
    var count3 = 1; // количество изображений

    var carousel3 = document.getElementById('carousel3');
    var list3 = carousel3.querySelector('ul');
    var listElems3 = carousel3.querySelectorAll('li');

    var position3 = 0; // текущий сдвиг влево

    carousel3.querySelector('.prev3').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position3 = Math.min(position3 + width3 * count3, 0)
      list3.style.marginLeft = position3 + 'px';
    };

    carousel3.querySelector('.next3').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position3 = Math.max(position3 - width3 * count3, -width3 * (listElems3.length - count2));
      list3.style.marginLeft = position3 + 'px';
    };
	function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}