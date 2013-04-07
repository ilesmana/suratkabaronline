var serviceURL = "http://192.168.115.1/bdgx/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, berita) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + berita.id_berita + '">' +
					'<img src="http://192.168.115.1/bdgx/services/foto/' + berita.photo_berita + '"/>' +
					'<h4>' + berita.judul_berita + '</h4>' +
					'<p>' + berita.isi_berita + '</p>' +
					'</a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}