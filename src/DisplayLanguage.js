import React from "react";
import { LanguageContext } from "./LanguageContext"
const Switch = {

    en: {
        text: "this is written in english"
    },

    it: {
        text: "questo è scritto in italiano"
    }

}
export class DisplayLanguage extends React.Component{

    render(){
        return(

            <div>
                <LanguageContext.Consumer>
                    { language =>{
                        return (
                        <h1>
                            {Switch[language].text}
                        </h1>
                       )
                    }}
                </LanguageContext.Consumer>

            </div>

        )
    }
    

}