import React, {useState} from 'react';

import logo from './logo.svg';

import './App.scss';

import {Hello} from './Hello';

function App() {
    //let count = 0;
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState( 0 );
    const [inputValue, setInputValue] = useState( '' );
    const [textAreaValue, setTextareaValue] = useState( '' );


    const [flavour, setFlavour] = useState( 'lime' );


    const handleClick = () => {
        setCount( count + 1 );
    }

    const handleInputChange = ( e ) => {
        //console.log(e.target.value);
        if ( e.target.value.length <= 5 ) {
            setInputValue( e.target.value );
        }
    }

    const names = ['Slavo', 'Ondrej', 'Jan'];

    const [numbers, setNumbers] = useState( [1, 2, 3, 4, 5] );

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <ul>
                    {
                        numbers.map( ( value, index ) => {
                            return (
                                <li key={index}>
                                    {value}
                                    <button
                                        onClick={() => {
                                            const newNumbers = numbers.filter( ( n, i ) => {
                                                if(index === i){
                                                    return false
                                                }else{
                                                    return true;
                                                }
                                            } )
                                            setNumbers( newNumbers );
                                        }}
                                    >
                                        Remove
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newNumbers =  numbers.map((n, i) => {
                                                if(index === i) return n * 2;
                                                return n;
                                            })
                                            setNumbers(newNumbers);
                                        }}
                                    >
                                        Double
                                    </button>
                                </li>
                            )
                        } )
                    }
                </ul>

                <button onClick={() => {
                    setNumbers( numbers.concat( numbers.length + 1 ) );
                    // setNumbers([...numbers, numbers.length + 1]);

                    // setNumbers([numbers.length + 1].concat(numbers) );
                    // setNumbers([numbers.length + 1, ...numbers]);
                }}>
                    Add number
                </button>

                {
                    names.map(
                        ( name, index ) => {
                            return (
                                <Hello key={index} name={name}/>
                            );
                        }
                    )
                }

                {/*{*/}
                {/*    names.map( ( name, index ) => <Hello key={index} name={name}/> )*/}
                {/*}*/}

                {/*<Hello name="Slavo"/>*/}
                {/*<Hello name="Ondrej"/>*/}
                {/*<Hello name="Jan"/>*/}


                {
                    count > 0 ? (
                        <p>The button was clicked {count} times.</p>
                    ) : (
                        <p>The button hasnt been clicked yet!</p>
                    )
                }

                <button
                    onClick={handleClick}
                >
                    Click me!
                </button>
            </header>
        </div>
    );

}

export default App;
