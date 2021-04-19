"use strict"
const Item = (props) => (
    <div>{props.text}</div>
)
var found = 0;
var count = 0;
const Hello = () => (<h2>Liczba znalezionych: {found}</h2>)
const Bye = (props) => (<>
					<h1 style={{position: "static", top: "0px"}}>{props.imie}</h1>
                    <p style={{position: "static", top: "0px"}}>{props.opis}</p>
                   	<p style={{position: "relative", top: "40px", left: "200px"}}><a href={"mailto:"+props.email} target="_blank">{props.email}</a></p>
                    <p style={{position: "static", top: "0px"}}>{props.tagi}</p>
					</>)

function Glossary(props) {
  return (
    <dl>
      {props.toDoList.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>"zycie"</dt>
          <dd>"jest nowela"</dd>
          <dd>{item.imie}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

class DlaRoot1 extends React.Component {
    state = {
        newItemValue: "",
        showWarning: false
    }
    errorMessage = "Wrong entry value"

    handleOnChange = (event) => {
        this.setState({
            newItemValue: event.target.value
        })
    }

    handleEnter = (event) => {
        if(event.code === "Enter"){
            if(this.state.toDoList.includes(this.state.newItemValue)){
                this.setState({
                    showWarning: true
                })
            } else {
                this.setState({
                    toDoList: this.state.toDoList.concat(this.state.newItemValue),
                    showWarning: false

                })
            }
        } else {
            this.setState({
                showWarning: false
            })
        }
    }
    // it => ( )
    render() {

        return (
            //React.Fragment
            <>
                <h2>{this.props.dummyText}</h2>
                <p>
        <input
            type="text"
            name="newItemValue"
            placeholder="Wyszukiwanie po tagach"
            value={this.newItemValue}
            onChange={this.handleOnChange}
            onKeyDown={this.handleEnter}
        />
        </p>
        <input
            type="text"
            name="newItemValue"
            placeholder="Wyszukiwanie w opisach"
            value={this.newItemValue}
            onChange={this.handleOnChange}
            onKeyDown={this.handleEnter}
        />
            </>
        );
    }
}

class DlaRoot3 extends React.Component {
    state = {
        toDoList: [],
        imie: "",
        opis: "",
        email: "",
        tagi: "",
        showWarning: false
    }
    errorMessage = "Wrong entry value"

    imieOnChange = (event) => {
        this.setState({
            imie: event.target.value
        })
    }
    opisOnChange = (event) => {
        this.setState({
            opis: event.target.value
        })
    }
    emailOnChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    tagiOnChange = (event) => {
        this.setState({
            tagi: event.target.value
        })
    }
    
    klikniete = (event) => {
    var newP = document.createElement('p');
    	ReactDOM.render(
    <Bye imie={this.state.imie} opis={this.state.opis} email={this.state.email} tagi={this.state.tagi}/>,
    document.getElementById('root4').appendChild(newP)
);
    }
    // it => ( )
    render() {
        return (
            //React.Fragment
            <>
        <h2>{this.props.dummyText}</h2>
        <p>
        <input
            type="text"
            name="Imię"
            placeholder="Imię"
            value={this.imie}
            onChange={this.imieOnChange}
            onKeyDown={this.handleEnter}
        />
        </p>
        <p>
        <input
            type="text"
            name="Opis"
            placeholder="Opis"
            value={this.opis}
            onChange={this.opisOnChange}
            onKeyDown={this.handleEnter}
        />
        </p>
        <p>
        <input
            type="text"
            name="Email"
            placeholder="Email"
            value={this.email}
            onChange={this.emailOnChange}
            onKeyDown={this.handleEnter}
        />
        </p>
        <p>
        <input
            type="text"
            name="Tagi"
            placeholder="Tagi"
            value={this.tagi}
            onChange={this.tagiOnChange}
            onKeyDown={this.handleEnter}
        />
        </p>
        <button
        	onClick={this.klikniete}>
        	Dodaj
        </button>
            </>
        );
    }
}

ReactDOM.render(
    <DlaRoot1 dummyText="Szukanie" />,
    document.getElementById('root1')
);
ReactDOM.render(
    <Hello />,
    document.getElementById('root2')
);
ReactDOM.render(
    <DlaRoot3 dummyText="Dodawanie" />,
    document.getElementById('root3')
);