function lightbox (e) {
  e.target.classList.toggle('lightbox')
}

function updateTask( e, index ) {
  const store = JSON.parse( localStorage.getItem( "userstories" ) )
  store[index] = e.target.checked
  const updatedTask = JSON.stringify( store )
  localStorage.setItem( "userstories", updatedTask )
}
const tasks = Array.from(
  document.querySelectorAll( ".user-stories > li >input" )
)
tasks.forEach( ( task, index ) =>
  task.addEventListener( "click", ( e ) => updateTask( e, index ) )
)
if ( !localStorage.getItem( "userstories" ) ) {
  localStorage.setItem( "userstories", "[]" )
} else {
  const curState = JSON.parse( localStorage.getItem( "userstories" ) )
  tasks.forEach(
    ( task, index ) => ( task.checked = curState[index] ? true : false )
  )
}
document.querySelector( ".reset.×" ).addEventListener( "click", ( e ) => {
  localStorage.setItem( "userstories", "[]" )
  tasks.forEach( ( task, index ) => ( task.checked = false ) )
} );