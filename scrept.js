var d = new Date();
var n = d.getDay();
console.log( n );
if ( n === 0 ) {
  document.querySelector( ".sunday" ).style.display = "block";
} else if ( n === 1 ) {
  document.querySelector( ".monday" ).style.display = "block";
} else if ( n === 2 ) {
  document.querySelector( ".tuesday" ).style.display = "block";
} else if ( n === 3 ) {
  document.querySelector( ".wenesday" ).style.display = "block";
} else if ( n === 4 ) {
  document.querySelector( ".thuesday" ).style.display = "block";
} else if ( n === 5 ) {
  document.querySelector( ".friday" ).style.display = "block";
} else if ( n === 6 ) {
  document.querySelector( ".saturday" ).style.display = "block";
}


// document.querySelector( '.verymain' ).style.display = 'none';
document.querySelector( '.last' ).addEventListener( 'click', function ()
{
  var email = document.querySelector( '.email' ).value;
  var password = document.querySelector( '.password' ).value;
  if (  email == 'jdcvmk123@gmail.com'  && password == 'jdcvmk'  ) {
    document.querySelector( '#content' ).style.display = 'none';
    document.querySelector( '.varymain' ).style.display = 'block';

  }
  else
  {
    alert( 'Email or password is wrong' )
    var email = document.querySelector( '.email' ).value='';
    var password = document.querySelector( '.password' ).value='';
  }
} )

document.querySelector( '.art-2' ).addEventListener( 'click', function ()
{
  document.querySelector( '.art-2' ).style.display = 'block';
})
