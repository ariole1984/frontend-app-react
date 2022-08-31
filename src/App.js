import "./App.css";

function App() {
  const addData = () => {
    const newStudent = { name: 'Jane', male: false };

    fetch("http://localhost:4040", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    console.log("getting data");
  };

  const getData = () => {
    fetch("http://localhost:4040")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    console.log("Added data");
  };

  const handleDelete = () => {
    fetch('http://localhost:4040/?name=Juice', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    console.log('Deleted Juice');
  };

  const handleUpdate = () => {
    const updateStudentWith = { registered: true }

    fetch('http://localhost:4040?name=Jane', {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(updateStudentWith),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    console.log("Added data");
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Juice App</h1>
        <button onClick={() => addData()}>Add Data</button>
        <button onClick={getData}>Get Data</button>
        <button onClick={handleDelete}>Delete Juice</button>
        <button onClick={handleUpdate}>Update Jane</button>
      </header>
    </div>
  );
}

export default App;
