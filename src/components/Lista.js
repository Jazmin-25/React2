import { Component } from "react";
import "../css/listastyle.css";

class Lista extends Component {
    render(){
        return(
            <main>
                <label htmlFor="myBrowser">
                    {this.props.defaultTitle}
                </label>
                <input className={this.props.estilo} type="text" id="myBrowser" list="browsers" />
                <datalist id="browsers">
                    <option value="Chrome"></option>
                    <option value="Edge"></option>
                    <option value="Opera"></option>
                    <option value="IE"></option>
                    <option value="Brave"></option>
                    <option value="Firefox"></option>
                    <option value="Safari"></option>
                    
                </datalist>
            </main>
        )
    }//render
}//clas component

export default Lista;