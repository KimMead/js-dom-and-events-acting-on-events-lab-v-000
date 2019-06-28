function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()

    })
}
function retrieveEmployeeInformation() {
  return document.querySelector('input').value

}
function addNewElementAsLi() {
console.log(retrieveEmployeeInformation())
  document.querySelector('li').append(`<li>${retrieveEmployeeInformation()}</li>`)
}


function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    document.querySelector('ul').innerHTML = ""
  })
}
preventRefreshOnSubmit()
