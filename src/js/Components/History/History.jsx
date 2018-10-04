import React from 'react';

export default class History extends React.Component {
    render() {
        return (

            <div className='container'>
                <div className='col-xs-6'>
                    <div className='card border border-info'>
                        <div className='card-header alert-primary'>Search History</div>
                        <table className='table table-striped'>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            // <div>
            //     <div className='col-sm'>
            //     <div className='card'>
            //         <div className='card-header alert-primary'>Search History</div>
            //         <div className='container card-block'>
            //             <table className='table table-striped'>
            //                 <tbody></tbody>
            //             </table>
            //         </div>
            //     </div>
            //     </div>
            // </div>
        );
    }
}