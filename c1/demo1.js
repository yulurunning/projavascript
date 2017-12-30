function Lecture(name, teacher) {
  this.name = name;
	this.teacher = teacher;
}

Lecture.prototype.display = function () {
	return this.teacher + ' is teaching ' + this.name;
};

function Schedule(lectures) {
	this.lectures = lectures;
}

Schedule.prototype.display = function () {
	var str = '';
	for (var i = 0;i < this.lectures.length;i++) {
		str += this.lectures[i].display() + '.\n';
	}
	return str;
}

var mySchedule = new Schedule(
	[
		new Lecture('Gym', 'Mr. Smith'),
		new Lecture('Math', 'Mr. James'),
		new Lecture('English', 'TBD')
	]
);
console.log(mySchedule.display());
console.log(mySchedule);

console.log(typeof Lecture('a', 'b'));
console.log(typeof (new Lecture('a', 'b')));
console.log((new Lecture('a', 'b')).constructor);
