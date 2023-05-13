import React, { Component } from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErrorBoundary'

class Main extends Component {
    render() {
        return (
            <div>
                {/* method 1 */}
                <ErrorBoundary>
                    <Hero heroName={'superman'}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName={'batman'}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName={'spiderman'}/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default Main
