import React from "react";

export default class History extends React.Component {
  render() {
    const { historyItems } = this.props;
    return (
      <div className='card border'>
        <div className='card-header alert alert-light text-center'><strong>Search History</strong></div>
        <div className='card-body'>
          <table className='table table-striped table-dark'>
            <tbody>
              {
                historyItems.map(historyItem => {
                  return <tr key ={historyItem.time.toString()}>
                    <td>{historyItem.name}</td>
                    <td>
                      <p className='mb-0'>{historyItem.time.toLocaleDateString()}</p>
                      <p className='mb-0'>{historyItem.time.toLocaleTimeString()}</p>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}