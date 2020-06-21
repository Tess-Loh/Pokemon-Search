import React from "react";
import {Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, Jumbotron, Button, Image, Form, FormGroup, FormLabel, FormControl, InputGroup} from "react-bootstrap";
import Select from 'react-select';
import {getPokeApiListing,getPokeApi} from '../service/poke-api.js'


class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
            pokemonInfo: [],
            selectValue: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        getPokeApiListing(this);
    }


    handleChange(e){
        if (e !=null){
        this.setState({selectValue:e.value});
        } else {
            this.setState({selectValue:''});
        }
    }

    handleClick (pokemon){
        getPokeApi(this,pokemon);
    }

    
    render(){
        let pokemonList = this.state.hits.map(pokemon => {
            return { value: pokemon.name, label: pokemon.name};
        })

        const pokemonInfo = this.state.pokemonInfo;
        const pokeName = pokemonInfo.name;
        const pokemonStats = pokemonInfo.stats;
        const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonInfo.id}.png`

        return(
            <div>
                <section className='search-content'>
                    <Container className='search-container'>
                        <Row className='center'>
                            <Col md={12}>
                                <h2>Search to find your Pokemon's stats</h2>
                            </Col>
                            <Col md={6}>
                                <Select 
                                options={pokemonList} 
                                onChange={this.handleChange} 
                                placeholder={<div>Search Pokemon Name</div>} 
                                isClearable />
                                <Button className='custom-btn' onClick={()=> this.handleClick(this.state.selectValue)}>Search</Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='poke-content'>
                {(pokemonStats && this.state.selectValue) ?
                    <Container>
                        <Row className="center">
                                <Col md={4} className='stats-content'>
                                    <Col md={12}>
                                        <h1>{pokeName}</h1>
                                    </Col>
                                    <Col md={12}>
                                        {pokemonStats && pokemonStats.map((data,index)=> <p key={index}>{data.stat.name} - {data.base_stat}</p>)}
                                    </Col>
                                </Col>
                                <Col md={7}>
                                    <Col md={12}>
                                        {imgUrl ?
                                        <Image src={imgUrl} />
                                        : <p>isLoading...</p>
                                        }
                                    </Col>
                            </Col>
                        </Row>
                    </Container>
                    : <Container className="center"><p className="no-results">Try searching again cause you gotta catch them all</p></Container>}
                </section>
            </div>
        )
    }
}

export default Home;