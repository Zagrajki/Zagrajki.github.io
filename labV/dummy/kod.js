
class New extends React.Component {
    state = {
        text: ""
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    append = () => {
        this.props.adder(this.state.text)
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <>
                <textarea value={this.state.text} onChange={this.onChange} />
                <button onClick={this.append}>Dodaj</button>
            </>
        );
    }
}

class Main extends React.Component {
    state = {
        listOfToDos: [
            { id: 1, text: "Hakuna matata", done: false },
            { id: 2, text: "Summer is coming", done: true },
            { id: 3, text: "Za 2 tygodnie otwieramy...", done: false },
            { id: 4, text: "Chodź szogunie", done: false },
        ]
    }

    render = () => {
        const list = this.state.listOfToDos.map(it => (
            <li key={it.id}
                style={it.done ? { textDecoration: "line-through" } : {}}
            >
                {it.text}</li>
        ))
        return (< ul >
        {list}
        </ul >
        )
    }
}


function App() {

    return (
        <>
            <header>Tu jest nagłówek</header>
            <main>

                <nav>
                    <a href="/">Lista wszytkich</a>
                    <a href="/new">Dodaj nowy</a>
                    <a href="/trash">Śmietnik</a>
                </nav>
                <section><Main/></section>
                <section><New /></section>
            </main>
            <footer>Stopka</footer>
        </>
    );
}

// napaliłem sie jak szczerbaty na suchary :D

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
