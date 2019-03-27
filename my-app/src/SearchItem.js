import React from 'react';

class SearchItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
                <br />
                <img src={this.props.imgUrl} />
                <br />
                <br />
            </div>
        );
    }
}

export default SearchItem;
