import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            acucar: false,
            leite: false,
            porco: false,
            gluten: false
            
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        // console.log(event.target.type)
        const { value, name, type, checked } = event.target
        (type === "checkbox") ? 
            this.setState({[name]: checked}) 
        : 
            this.setState({[name]: value})
            
     
    }
    
    handleSubmit() {
        console.log('submited')
    }
    
    render() {
        const {firstName, lastName, age, gender, destination, acucar, porco, gluten, leite} = this.state
        // const {acucar, porco, gluten, leite} = this.state.dietaryRestrictions
        
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange} /><br />
                    <input placeholder="Last Name" name="lastName" onChange={this.handleChange} /><br />
                    <input placeholder="Age" name="age" onChange={this.handleChange} /><br />
                    
                    Sexo: <br/>
                    <label>
                        <input type="radio" name="gender" onChange={this.handleChange} value="male" /> Masculino
                    </label>
                    <br/>
                    <label>
                        <input type="radio" name="gender" onChange={this.handleChange} value="female" /> Feminino
                    </label>
                    <br />
                    
                    Destino: <br/>
                    <select name="destination" onChange={this.handleChange}>
                        <option value="Brasília">Brasília</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="São Paulo">São Paulo</option>
                    </select>
                    <br />
                    
                    Restrções: <br/>
                    <label>
                        <input type="checkbox" 
                                name="acucar" 
                                onChange={this.handleChange}
                                checked={acucar} /> Açúcar
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="leite" onChange={this.handleChange}
                                checked={leite} /> Leite
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="porco" onChange={this.handleChange}
                                checked={porco} /> Carne de porco
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="gluten" onChange={this.handleChange} 
                                checked={gluten} /> Glúten
                    </label>
                    <br />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {firstName} {lastName}</p>
                <p>Your age: {age}</p>
                <p>Your gender: {gender}</p>
                <p>Your destination: {destination}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
