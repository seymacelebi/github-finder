// import React, { Component } from "react";

// export class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       keyword: "",
//     };
//   }
//   onChange = (e) => {
//     this.setState({
//       keyword: e.target.value,
//     });
//   };
//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.keyword === "") {
//       this.props.displayAlert("Anahtar kelime giriniz", "danger");
//     } else {
//       this.props.searchUsers(this.state.keyword);
//       this.setState({ keyword: "" });
//     }
//   };

//   render() {
//     return (
//       <div className="container my-3">
//         <form onSubmit={this.onSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               value={this.state.keyword}
//               onChange={this.onChange}
//               className="form-control"
//               placeholder="Anahtar Kelime"
//             />
//             <button className="btn btn-primary" type="submit">
//               ARA
//             </button>
//           </div>
//         </form>

//         {this.props.showClearButton && (
//           <button
//             onClick={this.props.clearResults}
//             className="btn btn-outline-danger mt-2 btn-block"
//           >
//             Temizle
//           </button>
//         )}
//       </div>
//     );
//   }
// }

// export default Search;
import React, { useState } from 'react'

const Search = ({ displayAlert,searchUsers,showClearButton,clearResults }) => {

    const [keyword, setKeyword] = useState('');

    const onChange = (e) => {
        setKeyword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(keyword === '') {
            displayAlert('Anahtar Kelime Giriniz', 'warning');
        } else {
            searchUsers(keyword);
            setKeyword('');
        }
    }

    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className='form-control' placeholder='Anahtar Kelime' />
                    <button className="btn btn-primary" type='submit'>Ara</button>
                </div>
            </form>
            {
                showClearButton && <button onClick={clearResults} className="btn btn-outline-danger mt-2 btn-block">Sonuçları Temizle</button>
            }        

        </div>
    )
}

export default Search