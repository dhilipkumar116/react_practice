import React, { Component } from 'react'

class Hero extends Component {

    render() {
        if(this.props.heroName==='spiderman'){
            throw new Error('not a hero')
        }
        return (
            <div>
                {this.props.heroName}
            </div>
        )
    }
}

export default Hero
