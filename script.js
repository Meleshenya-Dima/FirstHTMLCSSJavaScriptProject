function TalkButtonClick(){
    alert("lets talk");
}

function OpenSocialNetwork(socialNetworkName){
    if(socialNetworkName == "vk"){
        window.open('https://vk.com/xto_qa');
    }
    else if(socialNetworkName == "instagram"){
        window.open('https://www.instagram.com/dimkahevidimka/');
    }
    else{
        alert("telegram для педиков")
    }
}

function ReadMoreButtonClick(nameProject){
    if(nameProject == "NeuralNetwork"){
        window.open('https://github.com/Meleshenya-Dima/NumericalNeuralNetwork');
    }
    else if(nameProject == "UnityClientServer"){
        window.open('https://github.com/Meleshenya-Dima/unityClientServer')
    } 
    else if(nameProject == "OnlineStore"){
        window.open('https://github.com/Meleshenya-Dima/OnlineStore')
    }
    else if(nameProject == "Service"){
        window.open('https://github.com/Meleshenya-Dima/JsonDataService');
    }
}

function SectionButtonClick(){

}