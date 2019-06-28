function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}
function addNewElementAsLi(){
  console.log(retrieveEmployeeInformation())
    document.querySelector('ul').append('<li>${retrieveEmployeeInformation()}</li>')
}

preventRefreshOnSubmit()
