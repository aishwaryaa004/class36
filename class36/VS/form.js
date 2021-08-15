class Form{
    constructor(){}

  display(){
   
    var title= createElement('h1')
    title.html("car racing game")
    title.position(350,0)

    var input= createInput("name")
    input.position(350,160)

    var button = createButton('Play')
    button.position(350,200)
       button.mousePressed(function(){
           input.hide()
           button.hide()
           var name = input.value()
           var greeting = createElement('h3')
           greeting.html("HELLO " +name)
           greeting.position(350,160)
       })



    }
}