const Item = (props) => (
    <li>{props.text}</li>
)
var found = 0;
var count = 0;
const Hello = () => (<h2>Liczba znalezionych: {found}</h2>)
const Bye = (props) => (<li>
					<h2 style={{position: "absolute", top: "0px"}}>{props.imie}</h2>
                    <h2 style={{position: "absolute", top: "30px"}}>{props.opis}</h2>
                   	<h2 style={{position: "absolute", top: "90px", left: "200px"}}>{props.email}</h2>
                    <h2 style={{position: "absolute", top: "90px"}}>{props.tagi}</h2>
					</li>)
const Ruler = () => {
	for (var i = 0; i < count; i++) {
        ObjectRow()
    } 
}

function Glossary(props) {
  return (
    <dl>
      {props.toDoList.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>"zycie"</dt>
          <dd>"jest nowela"</dd>
          <dd>{item}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
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
    var a={imie:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    	 this.setState({
              toDoList: this.state.toDoList.concat("pp"),
              showWarning: false
          		});
    ReactDOM.render(
    <Glossary toDoList={this.state.toDoList}/>,
    document.getElementById('root4'));
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
        {this.state.showWarning && <h1 style={{color: "red"}}>{this.errorMessage}</h1> }
            </>
        );
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root2')
);
ReactDOM.render(
    <DlaRoot3 dummyText="Dodawanie" />,
    document.getElementById('root3')
);
ReactDOM.render(
    <Bye imie="a" opis="b" email="c" tagi="d"/>,
    document.getElementById('root4')
);