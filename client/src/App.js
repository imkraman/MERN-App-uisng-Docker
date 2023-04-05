import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [documents, setDocuments] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('/api/documents')
      .then(response => setDocuments(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddDocument = () => {
    axios.post('/api/documents', { title, content })
      .then(response => {
        setDocuments([...documents, response.data]);
        setTitle('');
        setContent('');
      })
      .catch(error => console.error(error));
  };

  const handleUpdateDocument = (id) => {
    const documentToUpdate = documents.find(document => document._id === id);
    axios.put(`/api/documents/${id}`, { title: documentToUpdate.title, content })
      .then(response => {
        const updatedDocuments = documents.map(document => {
          if (document._id === id) {
            return response.data;
          } else {
            return document;
          }
        });
        setDocuments(updatedDocuments);
      })
      .catch(error => console.error(error));
  };

  const handleDeleteDocument = (id) => {
    axios.delete(`/api/documents/${id}`)
      .then(response => {
        const updatedDocuments = documents.filter(document => document._id !== id);
        setDocuments(updatedDocuments);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Documents</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        handleAddDocument();
      }}>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" />
        <br />
        <textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="Content"></textarea>
        <br />
        <button type="submit">Add Document</button>
      </form>

      <ul>
        {documents.map(document => (
          <li key={document._id}>
            <input type="text" value={document.title} onChange={(event) => handleUpdateDocument(document._id)} />
            <button onClick={() => handleDeleteDocument(document._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
