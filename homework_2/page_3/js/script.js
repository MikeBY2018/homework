function redirect(){
	window.location.href = 'http://www.gismeteo.ru';
}
function styleMod(){
	document.getElementsByTagName('p')[0].style.cssText = 'background-color: black; height: 100px;';
	document.getElementsByTagName('p')[1].style.cssText = 'background-color: black;  height: 100px;';
	document.getElementsByClassName('wrapper')[0].style.cssText = 'background-color: white';
}
function rewrite(){
	var wrap = document.getElementsByClassName('wrapper')[0];
	wrap.classList.remove('wrapper');
	wrap.classList.add('wrapper1');
	wrap.innerHTML = '<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>';
}