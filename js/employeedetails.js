$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
});

function displayEmployee(data) {
	var berita = data.item;
	console.log(berita);
	$('#employeePic').attr('src', 'http://192.168.115.1/bdgx/services/foto/' + berita.photo_berita);
	$('#fullName').text(berita.judul_berita);
	$('#employeeTitle').text(berita.isi_berita);
	$('#city').text(berita.kategori);
	$('#publisher').text(berita.publisher);
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
