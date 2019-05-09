//레이어0을 안보이게
var layer_list = app.activeDocument.layers;
var layer_length = layer_list.length;
var input_name = app.activeDocument.name;
var class_list = ["car", "fe", "fp", "car", "bi", "moto"];
var class_name = "";
var flag = false;

while(true){
	class_name = prompt("Please enter your name", "");
	if ( class_name == null) {
	  alert("User cancelled the prompt.");
	  break;
	} 

	for (var i = class_list.length - 1; i >= 0; i--) {
		if(class_list[i] == class_name){
			flag = true;
			alert("class name is "+class_name);
			break;
		}
	}

	if( flag ) {
	  break;
	} else {
		alert("unavaluable class name");
	}
}

if(flag){
	var output_name = input_name.split('.')[0]+'_'+class_name+'_';

	layer_list.getByName('레이어 0').visible = false;

	//흰색 부분 전체 투명화
	for (var i = 2; i < layer_length; i++) {
		layer_list.getByName('레이어 '+i).visible = false;
	}

	for (var i = 2; i < layer_length; i++) {
		layer_list.getByName('레이어 '+i).visible = true;
		saveJpeg(output_name+(i-2));
		layer_list.getByName('레이어 '+i).visible = false;
	}
}

function saveJpeg(name){
	var doc = app.activeDocument;
	var file = new File(doc.path + '/' + name + '.jpg');

	var opts = new JPEGSaveOptions();
	opts.quality = 8;

	doc.saveAs(file, opts, true);
}