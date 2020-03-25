import React from 'react';


class Dropdown extends React.Component {
	constructor(props) {
		super(props);
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.updateSelection = this.updateSelection.bind(this);
        this.state = {
           displayMenu: false,
           selection: "Spanish"
        };
        
        this.languages = {
            German: "de",
            Spanish: "es",
            Russian: "ru"
        };
    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }
    
    updateSelection(language) {
        this.setState({selection: language});
    }

    render() {
        let menuContents = Object.keys(this.languages).map(language => (
            <li onClick = {(e) => {
                    this.updateSelection(language); 
                    this.props.SetLanguage(this.languages[language]); } }> 
                {language} 
            </li>
        ));
        
        return (
            <div className="dropdown">
                <div className="dropdownbutton"onClick={this.showDropdownMenu}> {this.state.selection} </div>
                { 
                    this.state.displayMenu ? 
                    (
                        <ul>
                            <div id = "caret"> &#9660; </div>
                            {menuContents}
                        </ul>
                    ):
                    ( null )
                }
           </div>
        );
    }
}

export default Dropdown;