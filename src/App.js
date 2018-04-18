import React from 'react'

const ThemeContext = React.createContext('light')

class ThemeProvider extends React.Component {
	state = { theme: 'light' }
	
	toggleTheme = () => {
		this.setState(({ theme }) => ({
			theme: theme === 'light' ? 'dark' : 'light',
		}))
	}
	
	render() {
		return (
      <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
				{this.props.children}
      </ThemeContext.Provider>
		)
	}
}

const ThemeConsumer = ThemeContext.Consumer

const styles = {
	dark: {
		backgroundColor: 'black',
		color: 'white',
	},
	light: {
		backgroundColor: 'white',
		color: 'black',
	},
}

export default class App extends React.Component {
	render() {
		return (
      <ThemeProvider>
        <ThemeConsumer>
        
					{({ theme, toggleTheme }) => (
					  <div>
              <button onClick={toggleTheme}>toggle</button>
              <div style={styles[theme]}>{theme}</div>
            </div>
          )}
        </ThemeConsumer>
      </ThemeProvider>
		)
	}
}

