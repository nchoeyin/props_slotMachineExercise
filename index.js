class App extends React.Component {
    render() {
        return (
        <div>
            <h1>SLOT MACHINE</h1>
            <Machine 
            s1="๐"
            s2="๐"
            s3="๐"
            />
            <Machine 
            s1="๐งจ"
            s2="๐"
            s3="๐"
            />
        </div>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('root'))