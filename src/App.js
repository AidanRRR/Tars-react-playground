import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const albums = [{
      'nummer': '6',
      'titel': 'Het hemelhuis',
      'kaft': 'Softcover',
      'prijs': 5.20
    }, {
      'nummer': '8',
      'titel': 'Promo',
      'kaft': 'Lutgart',
      'prijs': 6.00
    }]

    return (
      <div className="App">
        <table>
          <tr>
            <th>Nummer</th>
            <th>Titel</th>
            <th>Kaft</th>
            <th>Prijs</th>
          </tr>
          {albums.map((album) => {
            return (
              <tr>
                <td>{album.nummer}</td>
                <td>{album.titel}</td>
                <td>{album.kaft}</td>
                <td>{album.prijs}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
}

export default App;
