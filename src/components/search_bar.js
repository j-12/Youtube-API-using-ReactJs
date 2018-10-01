import React,{Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Search' };
  }
  //value={this.state.term}
  render() {
    return (
      <div className='search-bar'>
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;


  /*
  class SearchBar extends React.Component {
    render() {
      return <input />;
    }
  }
promoted SearchBarfrom func component
 to a class based component
  */
