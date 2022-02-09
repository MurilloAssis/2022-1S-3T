import axios from "axios";            

export const LerConteudoImagem = async (formdata) => {

    let resultado;

        await axios({
            method: "post",
            url: "https://ocr-Techman-Murillo.cognitiveservices.azure.com/vision/v3.2/ocr?language=unk&detectOrientation=true&model-version=latest",
            data: formdata,
            headers: {
                "Content-Type": "multipart/form-data",
                "Ocp-Apim-Subscription-Key": "86eb0dc248f74bc4948a42d0da4eb121"
            }
            
        })
        .then(response => {
            //console.log(response)
            resultado = FiltrarOBJ(response.data)
            
        })
        .catch(erro => console.log(erro))
    return resultado;
}

export const FiltrarOBJ = (obj) =>{

    let resultado;
    obj.regions.forEach(region => {
        region.lines.forEach(line => {
            line.words.forEach(word =>{
                if(word.text[0] === "1" && word.text[1] === "2"){
                    resultado = word.text
                }
            });
        });
    });

    return resultado
}    