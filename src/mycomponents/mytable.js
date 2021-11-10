import React from 'react';
import './mytable.css';

const Tableheader =()=>{
    return (
        <thead className="table_header">
            <th>name</th>
            <th>job</th>
            <th>city</th>
        </thead>
    );

}
// const Tablebody = ()=>{
//     return (
//         <tbody className="table_body">
//             <tr>
//                 <td>Adithya</td>
//                 <td>software</td>
//             </tr>
//             <tr>
//                 <td>sai</td>
//                 <td>software</td>
//             </tr>
//             <tr>
//                 <td>Jaya</td>
//                 <td>teacher</td>
//             </tr>
//         </tbody>  
//     )
// }
const Tablebody =(props)=>{
    const rows = props.characterData.map((row,index)=>{
        return (
            <tr key ={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>{row.city}</td>
            </tr>
        )
    })
    return  <tbody>{rows}</tbody>
}


class Table extends React.Component{
    render(){
        const {characterData}= this.props
        return (
            <table>
                <Tableheader />
                <Tablebody characterData ={characterData}/>
            </table>  
        )
    }
}
class Samp extends React.Component{
    render(){
        const characters=[
            {
                name:'adithya',
                job:'Software Engineer',
                city:'rayachti'
            },{
                name:'Sai',
                job:'Artist',
                city:'kadapa'
            },{
                name:'jaya',
                job:'HR',
                city:'heyderabad'
            },{
                name:'deepika',
                job:'bank',
                city:'banglore'
            },{
                name:'gowtham',
                job:'testing',
                city:'kochi'
            }
        ]
        return(
            <div className="container">
                <Table characterData={characters} />
            </div>
        )
    }
}

export default Samp;