import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchIcon from '@mui/icons-material/Search';
import './Searchbar.css';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Write correct name');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleNameChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <header className="searchbar">
      <form onSubmit={handleSubmit} className="search_form">
        <button type="submit" className="search_button">
          <div className="search_icon">
            <SearchIcon />
          </div>
        </button>
        <input
          onChange={handleNameChange}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

// ----
// class Searchbar extends Component {
//   state = {
//     searchQuery: '',
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     const { searchQuery } = this.state;

//     if (searchQuery.trim() === '') {
//       toast.error('Write correct name');
//       return;
//     }
//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };

//   handleNameChange = e => {
//     this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
//   };

//   render() {
//     return (
//       <header className="searchbar">
//         <form onSubmit={this.handleSubmit} className="search_form">
//           <button type="submit" className="search_button">
//             <div className="search_icon">
//               <SearchIcon />
//             </div>
//           </button>
//           <input
//             onChange={this.handleNameChange}
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
