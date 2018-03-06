console.log('hello there hi')
var car={
  type:'small',
  isTurnedOn: false,
  seats: ['first','second', 'backseats'],
  turnOn: function() {
    this.isTurnedOn=true;
  },
  fly: function () {
    alert("fly");
  }
}
